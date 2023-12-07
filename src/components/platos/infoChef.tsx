import React from "react";
import styles from "./info.module.css";

import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { useRouter } from "next/navigation";

function InfoChef() {
  const router = useRouter();

  return (
    <>
      <main className={styles.mainInfo}>
        <h1>Un chef que fusiona arte y sabor</h1>
        <p className={styles.textInfo}>
          Sebastian Cuellar es un chef con más de una década de experiencia en
          el mundo de la gastronomía. Su pasión y dedicación lo han llevado a
          innovar y crear platos que sorprenden por su sabor y su presentación.
          Su especialidad es el menú degustación de productos autóctonos
          colombianos, una propuesta que rescata la riqueza y la diversidad de
          la cocina nacional. También domina la comida peruana, una de las más
          reconocidas y variadas del mundo. Se graduó de la Escuela Gastronómica
          de Occidente Cali, una de las más prestigiosas del país. Su talento y
          su trayectoria lo han hecho merecedor de varios reconocimientos, entre
          ellos el de ser un chef destacado y disponible para ofrecer sus
          servicios a través de la plataforma.
        </p>
        <h2>Contactalo</h2>
        <div className={styles.boxRedes}>
          <div className={styles.subBoxRedes}>
            <FaInstagram
              size={25}
              className={styles.iconRedInsta}
              onClick={() =>
                router.push("https://www.instagram.com/chefsebastiancuellar/")
              }
            />
            <MdOutlineMail
              size={25}
              className={styles.iconRedMail}
              // onClick={() =>
              //   router.push("https://www.instagram.com/chefsebastiancuellar/")
              // }
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default InfoChef;
