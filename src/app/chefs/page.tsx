"use client"

import React from "react";
import styles from "./chefs.module.css";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer";

function Chefs() {
  return (
    <>
      <NavBar />
      <p className={styles.comming}>Muy pronto ...</p>
      <Footer />
    </>
  );
}

export default Chefs;
