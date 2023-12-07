"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";
import Avatar from "react-avatar";

import imgChef from "@/assets/imgChef.jpg";
import MenuComponent from "@/components/platos/CarnesCard";

import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar/NavBar";
import InfoChef from "@/components/platos/infoChef";

function Order() {
  const [option, setOption] = useState("productos");

  const handleOption = (option: string) => {
    setOption(option);
  };
  return (
    <>
      <NavBar />
      <div className={styles.boxChef}>
        <div className={styles.floatingBox}>
          <div className={styles.suboxChef}>
            <Avatar src={imgChef.src} size="70" round={true} />
            <p>Sebastian Cuellar</p>
          </div>
          {/* <Link
            href="https://www.instagram.com/chefsebastiancuellar/"
            className={styles.redesChef}
          >
            <FaInstagram className={styles.iconInstagramChef} size={20} />
          </Link> */}
        </div>
      </div>
      <div className={styles.BarSeccion}>
        <div className={styles.subBarSeccion}>
          <p
            className={
              option == "productos"
                ? `${styles.active} ${styles.btnOption}`
                : `${styles.desactive} ${styles.btnOption}`
            }
            onClick={() => handleOption("productos")}
          >
            Productos
          </p>
          <p
            className={
              option == "detalles"
                ? `${styles.active} ${styles.btnOption}`
                : `${styles.desactive} ${styles.btnOption}`
            }
            onClick={() => handleOption("detalles")}
          >
            Detalles
          </p>
        </div>
      </div>
      <div>{option == "productos" ? <MenuComponent /> : null}</div>
      <div>{option == "detalles" ? <InfoChef /> : null}</div>
      <Footer />
    </>
  );
}

export default Order;
