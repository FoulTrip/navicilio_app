import { FC } from "react";
import styles from "./carnes.module.css";
import { useRouter } from "next/navigation";

interface CardProps {
  name: string;
  image: string;
  description?: string;
  scope?: number;
  price?: number;
  linkProduct: string;
  discount: number | null;
}

const Card: FC<CardProps> = ({
  name,
  image,
  description,
  scope,
  price,
  discount,
  linkProduct,
}) => {
  const router = useRouter();

  const formattedNormalPrice = price?.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  const formattedDiscountPrice = discount?.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

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
        Precio:
        <span
          className={
            discount != null
              ? `${styles.value} ${styles.strikeThrough}`
              : `${styles.value}`
          }
        >
          {formattedNormalPrice}
        </span>
      </p>
      {discount == null ? null : (
        <p className={styles.subTitle}>
          Precio actual:
          <span className={styles.value}>{formattedDiscountPrice}</span>
        </p>
      )}
      <div
        onClick={() => router.push(linkProduct)}
        className={styles.orderBtnWht}
      >
        <p className={styles.realBtn}>Ordenar</p>
      </div>
    </div>
  );
};

export default Card;
