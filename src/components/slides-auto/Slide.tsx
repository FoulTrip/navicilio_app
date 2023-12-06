import React from "react";
import styles from "./slide.module.css";
import Image from "next/image";

import img00 from "@/assets/slideBanner/07.jpg";
import img01 from "@/assets/slideBanner/02.jpg";
import img02 from "@/assets/slideBanner/03.jpeg";
import img03 from "@/assets/slideBanner/09.jpg";
import img04 from "@/assets/slideBanner/05.jpg";
import img05 from "@/assets/slideBanner/06.jpg";
import img06 from "@/assets/slideBanner/01.jpeg";
import img07 from "@/assets/slideBanner/08.jpg";
import img08 from "@/assets/slideBanner/04.jpg";

function AutoSliderLeft() {
  return (
    <>
      <div className={styles.mainProncipal}>
        <div className={styles.slider}>
          <div className={styles.slide_track}>
            <div className={styles.slide}>
              <Image className={styles.img} src={img00} alt="img00" />
            </div>
            <div className={styles.slide}>
              <Image className={styles.img} src={img01} alt="img01" />
            </div>
            <div className={styles.slide}>
              <Image className={styles.img} src={img02} alt="img02" />
            </div>
            <div className={styles.slide}>
              <Image className={styles.img} src={img03} alt="img03" />
            </div>
            <div className={styles.slide}>
              <Image className={styles.img} src={img04} alt="img04" />
            </div>
            <div className={styles.slide}>
              <Image className={styles.img} src={img05} alt="img05" />
            </div>
            <div className={styles.slide}>
              <Image className={styles.img} src={img06} alt="img06" />
            </div>
            <div className={styles.slide}>
              <Image className={styles.img} src={img07} alt="img07" />
            </div>
            <div className={styles.slide}>
              <Image className={styles.img} src={img08} alt="img08" />
            </div>

            {/* Copy */}
            <div className={styles.slide}>
              <Image className={styles.img} src={img00} alt="img00" />
            </div>
            <div className={styles.slide}>
              <Image className={styles.img} src={img01} alt="img01" />
            </div>
            <div className={styles.slide}>
              <Image className={styles.img} src={img02} alt="img02" />
            </div>
            <div className={styles.slide}>
              <Image className={styles.img} src={img03} alt="img03" />
            </div>
            <div className={styles.slide}>
              <Image className={styles.img} src={img04} alt="img04" />
            </div>
            <div className={styles.slide}>
              <Image className={styles.img} src={img05} alt="img05" />
            </div>
            <div className={styles.slide}>
              <Image className={styles.img} src={img06} alt="img06" />
            </div>
            <div className={styles.slide}>
              <Image className={styles.img} src={img07} alt="img07" />
            </div>
            <div className={styles.slide}>
              <Image className={styles.img} src={img08} alt="img08" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AutoSliderLeft;
