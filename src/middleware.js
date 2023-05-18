import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import dbConnect from "./Helpers/DBConnect";

export const tokenVerify = async () => {
  let token = null;
  if (typeof window !== "undefined") {
    token = window.localStorage.getItem("token");
  }
  console.log(token);

  if (token) {
    const response = await axios.get("/api/verifyToken", {
      token,
    });
    console.log(response);
    return response.data;
  } else return null;
};

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/api")
  ) {
    console.log({ pathname });
    dbConnect();
    return NextResponse.next();
  }

  const auth = req.headers.get("Cookie");
  console.log({ auth });

  if (!auth) {
    return NextResponse.rewrite(new URL("/login", req.url));
  }

  // get token from cookie
  const token = auth.split("=")[1];

  // if no token found, redirect to login page
  if (!token || token === "") {
    return NextResponse.rewrite(new URL("/login", req.url));
  }

  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return NextResponse.rewrite(new URL("/login", req.url));
  }
  // if token is not valid, redirect to login page
  if (!decodedToken) {
    return NextResponse.rewrite(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  // matcher: ["/api/:path*"],
  matcher: "/api/:path*",
};
