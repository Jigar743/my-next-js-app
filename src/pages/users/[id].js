import React from "react";
import { isAuthenticated } from "../../Helpers/AuthHandler";
import { formatDate } from "../../Helpers/helper";
import { useRouter } from "next/router";

export default function UserPage({ isLoggedIn, loginUser }) {
  const router = useRouter();

  return (
    <>
      <div>
        <button onClick={() => router.push("/users")}>Back</button>
      </div>
      <div>
        <h3>Email: {loginUser.email}</h3>
        <h3>Name: {loginUser.name}</h3>
        <p>Account Created on: {formatDate(loginUser.createdAt)}</p>
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { isLoggedIn, user } = await isAuthenticated(context);
  if (!isLoggedIn && !user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  } else {
    return {
      props: {
        isLoggedIn,
        loginUser: user,
      },
    };
  }
};
