import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import imgPath from "../../../public/download.png";
import styles from "../../styles/global.module.css";

function Navbar({ props, children }) {
  const router = useRouter();
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_brand}>
        <p>Brand</p>
      </div>
      <div className={styles.navbar_links}>
        <div>
          <button
            onClick={() => {
              router.replace("/signup");
            }}
          >
            Sign Up
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              router.replace("/login");
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
