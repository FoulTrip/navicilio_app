"use client";

import React from "react";
import styles from "./styles.module.css";
import Avatar from "react-avatar";

import imgChef from "@/assets/imgChef.jpg";
import MenuComponent from "@/components/platos/CarnesCard";

import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar/NavBar";

function Order() {
  return (
    <>
      <NavBar />
      <div className={styles.boxChef}>
        <div className={styles.floatingBox}>
          <div className={styles.suboxChef}>
            <Avatar src={imgChef.src} size="70" round={true} />
            <p>Sebastian Cuellar</p>
          </div>
          <Link
            href="https://www.instagram.com/chefsebastiancuellar/"
            className={styles.redesChef}
          >
            <FaInstagram className={styles.iconInstagramChef} size={20} />
          </Link>
        </div>
      </div>
      <div>
        <MenuComponent />
      </div>
      <Footer />
    </>
  );
}

export default Order;
