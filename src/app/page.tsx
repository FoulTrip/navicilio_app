"use client";

import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

import ilustrationHS from "@/assets/undraw_Having_fun_re_vj4h.png";
import logoApp from "@/assets/logoAppFont.png";


import { IoIosArrowRoundForward } from "react-icons/io";
import { GiChefToque } from "react-icons/gi";
import { BsFillHouseFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { useRouter } from "next/navigation";
import iconChefMes from "@/assets/sombrero-de-cocinero.png";
import imgChef from "@/assets/imgChef.jpg";
import Avatar from "react-avatar";
import AutoSliderLeft from "@/components/slides-auto/Slide";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar/NavBar";
import Warning from "@/components/bannerWarning/Warning";

import { useMediaQuery } from "react-responsive";

function HomePage() {
  const router = useRouter();
  const imgTrans = useMediaQuery({ query: "(min-width: 800px)" });
  return (
    <>
      <Warning />
      <NavBar />
      <main className={styles.heroin_section}>
        <div className={styles.boxInfo}>
          <div className={styles.subBoxInfo}>
            {imgTrans && (
              <div className={styles.bigLogo}>
                <Image className={styles.imageLogo} src={logoApp} alt="logo" />
              </div>
            )}

            <h1 className={styles.headline}>
              RELAJATE Y CELEBRA: ¡NOSOTROS COCINAMOS POR TI!
            </h1>

            <div className={styles.characters}>
              <div className={styles.subCharacters}>
                <div className={styles.chrCard}>
                  <div className={styles.subChrCard}>
                    <div className={styles.imgChr}>
                      <GiChefToque className={styles.iconChrcard} size={20} />
                    </div>
                    <p>Chefs Profesionales</p>
                  </div>
                </div>
                <div className={styles.chrCard}>
                  <div className={styles.subChrCard}>
                    <div className={styles.imgChr}>
                      <AiFillStar className={styles.iconChrcard} size={20} />
                    </div>
                    <p>Excelente Calidad</p>
                  </div>
                </div>
                <div className={styles.chrCard}>
                  <div className={styles.subChrCard}>
                    <div className={styles.imgChr}>
                      <BsFillHouseFill
                        className={styles.iconChrcard}
                        size={20}
                      />
                    </div>
                    <p>Totalmente a Domicilio</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.boxBtnOrder}>
              <div
                className={styles.btnOrder}
                onClick={() => router.push("/order")}
              >
                <div className={styles.subBtnOrder}>
                  <p>Ordenar</p>
                  <div className={styles.iconBtnOrder}>
                    <IoIosArrowRoundForward />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.boxImage}>
          <Image
            className={styles.iconIlus}
            src={ilustrationHS}
            alt="ilustration"
          />
        </div>
      </main>

      <main className={styles.presentationSection}>
        <div className={styles.topBanner}>
          <div className={styles.subTopBanner}>
            <div className={styles.FirstPartBanner}>
              <div className={styles.imgBanner}>
                <Image
                  className={styles.iconBanner}
                  src={iconChefMes}
                  alt="iconChef"
                />
              </div>
              <h1 className={styles.bannerMessage}>
                CHEF ESTRELLA DE ESTA TEMPORADA
              </h1>
            </div>

            <div className={styles.boxPresentationChef}>
              <div className={styles.subPreChef}>
                <div className={styles.imgChef}>
                  <Avatar src={imgChef.src} size="80" round={true} />
                </div>
                <div className={styles.boxInfoChef}>
                  <div className={styles.subInfoChef}>
                    <h3>Sebastian Cuellar</h3>
                    <p>Chef Profesional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.boxCarrousel}>
          <AutoSliderLeft />
        </div>
        <div className={styles.boxBtnOrder}>
          <div
            className={styles.btnOrder}
            onClick={() => router.push("/order")}
          >
            <div className={styles.subBtnOrder}>
              <p>Ver Cenas</p>
              <div className={styles.iconBtnOrder}>
                <IoIosArrowRoundForward />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
