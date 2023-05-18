import { useRouter } from "next/router";
import React from "react";

export default function UserPage() {
  const router = useRouter();
  console.log({ router });
  return <div>userPage</div>;
}
