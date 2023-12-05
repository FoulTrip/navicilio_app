import Image from "next/image";
import React from "react";
import styles from "./navbar.module.css";

import logoApp from "@/assets/logoAppFont.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useRouter } from "next/navigation";

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
          <p>Pide tu cena navideña</p>
          <div className={styles.BoxArrow}>
            <IoIosArrowRoundForward />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
