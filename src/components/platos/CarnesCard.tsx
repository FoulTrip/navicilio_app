import { FC } from "react";
import menuData from "@/components/jsons/menu.json";
import Card from "./CardModel";
import styles from "./carnes.module.css";

const MenuComponent = () => {
  return (
    <>
      <div className={styles.boxCarnes}>
        {menuData.platos.map((plato: any) => (
          <div key={plato.id} className={styles.barItems}>
            <h2 className={styles.nameCategoria}>{plato.categoria}</h2>
            <div className={styles.subBarItems}>
              {plato.menu.map((menuItem: any) => (
                <Card
                  key={menuItem.id}
                  name={menuItem.name}
                  image={menuItem.image}
                  description={menuItem.description}
                  scope={menuItem.scope}
                  price={menuItem.price}
                  discount={menuItem.priceDiscount}
                  linkProduct={menuItem.linkProduct}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuComponent;
