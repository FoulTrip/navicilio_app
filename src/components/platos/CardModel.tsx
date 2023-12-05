import { FC } from "react";
import styles from "./carnes.module.css";

interface CardProps {
  name: string;
  image: string;
  description?: string;
  scope?: number;
  price?: number;
}

const Card: FC<CardProps> = ({ name, image, description, scope, price }) => {

    const formattedPrice = price?.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
    })
  return (
    <div className={styles.card}>
      <img
        className={styles.imgPlato}
        src={`/menuImages/${image}`}
        alt={name}
      />
      <h3 className={styles.titlePlate}>{name}</h3>
      <p className={styles.textDecription}>{description}</p>
      <p className={styles.subTitle}>
        Alcance: <span className={styles.value}>{scope} porciones</span>
      </p>
      <p className={styles.subTitle}>
        Precio: <span className={styles.value}>{formattedPrice}</span>
      </p>
      <div className={styles.orderBtnWht}>
        <p className={styles.realBtn}>Ordenar</p>
      </div>
    </div>
  );
};

export default Card;
