import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import styles from "../../styles/global.module.css";
import Cookies from "js-cookie";

function Navbar({ isLoggedIn, loginUser }) {
  const router = useRouter();
  const [popOverToggle, setPopOverToggle] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_brand}>
        <p>Brand</p>
      </div>
      {!isLoggedIn ? (
        <>
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
        </>
      ) : (
        <>
          <div className={styles.navbar_links}>
            <div className={styles.profile_popover}>
              <a href="#" onClick={() => setPopOverToggle(!popOverToggle)}>
                Profile
              </a>
              {popOverToggle && (
                <div style={{ display: "block" }} className={styles.popover}>
                  <a
                    href="#"
                    onClick={() => {
                      router.push(`/users/${loginUser._id.toString()}`);
                    }}
                  >
                    Edit Profile
                  </a>
                  <a
                    href="#"
                    onClick={() => {
                      Cookies.remove("token");
                      localStorage.removeItem("token");
                      router.replace("/login");
                    }}
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
