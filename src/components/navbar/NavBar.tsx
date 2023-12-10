import Image from "next/image";
import React from "react";
import styles from "./navbar.module.css";

import logoApp from "@/assets/logoAppFont.png";
import { FaInstagram, FaFacebook } from "react-icons/fa";

import { useRouter } from "next/navigation";
import Link from "next/link";

function NavBar() {
  const router = useRouter();
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.boxIconLogo}>
          <Image
            className={styles.iconLogo}
            onClick={() => router.push("/")}
            src={logoApp}
            alt="logo"
          />
        </div>
        <div className={styles.boxAviso}>
          <p>Siguenos</p>
          <Link
            className={styles.linkSocial}
            href="https://www.instagram.com/navicilio/"
          >
            <FaInstagram size={20} />
          </Link>
          <Link
            className={styles.linkSocial}
            href="https://www.facebook.com/profile.php?id=61554268893495&mibextid=ZbWKwL"
          >
            <FaFacebook size={20} />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
