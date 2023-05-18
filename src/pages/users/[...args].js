import { useRouter } from "next/router";
import React from "react";

export default function UserPageArgs() {
  const router = useRouter();
  console.log({ router });
  return <div>userPageArgs</div>;
}
