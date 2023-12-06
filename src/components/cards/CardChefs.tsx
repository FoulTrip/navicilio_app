import React from "react";
import styles from "./card.module.css";
import { TbPointFilled } from "react-icons/tb";
import { FaCrown } from "react-icons/fa6";
import Avatar from "react-avatar";
import imgChef from "@/assets/imgChef.jpg";


interface cardProps {
  name: string;
  status: string;
  ranking: string | null;
  bio: string;
}

function CardChefs({ name, status, ranking, bio }: cardProps) {
  return (
    <>
      <div className={styles.baseCard}>
        <div className={styles.barStatus}>
          {ranking != null ? (
            <div className={styles.boxActiveChef}>
              <div className={styles.iconStatus}>
                <FaCrown className={styles.iconCorona} />
              </div>
              <p>{ranking}</p>
            </div>
          ) : null}
          <div className={styles.boxActiveChef}>
            <div className={styles.iconStatus}>
              <TbPointFilled className={styles.iconPoint} />
            </div>
            <p>{status}</p>
          </div>
        </div>

        <div className={styles.infoChef}>
          <div className={styles.avatarChef}>
            <Avatar src={imgChef.src} round={true} size="200" />
          </div>
          <p className={styles.nameChef}>{name}</p>
          <div className={styles.biografy}>
            <p>{bio}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardChefs;
