import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import dbConnect from "./Helpers/DBConnect";

export const tokenVerify = async (token) => {
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
    dbConnect();
    return NextResponse.next();
  }

  const { url, nextUrl, cookies } = req;
  const token = cookies.get("token")?.value || null;

  // // if no token found, redirect to login page
  if (!token || token === "") {
    const response = NextResponse.next();
    response.cookies.delete("token");
    return NextResponse.redirect(new URL("/login", url));
  }

  let user;
  try {
    user = jwt.verify(token, process.env.JWT_SECRET);
    console.log({ user });
  } catch (err) {
    console.log({ err });
    return NextResponse.redirect(new URL("/login", url));
  }
  // if token is not valid, redirect to login page
  if (!user) {
    return NextResponse.redirect(new URL("/login", url));
  } else {
    return NextResponse.redirect(new URL("/users", url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login"],
};
