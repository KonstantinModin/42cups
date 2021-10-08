import styles from "./Assortment.module.css";
import { useAppSelector } from "../../hooks/hooks";
import Product from "./Product/Product";
import Sort from "./Sort/Sort";

const Assortment: React.FC = () => {
  const items = useAppSelector((state) => state.items.sortedItems);
  console.log(items)
  return (
    <div className={styles.assortment}>
      <Sort />
      <div className={styles.products}>
        {items.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            description={item.description}
            weight={item.weight}
            price={item.price}
            number={item.number}
          />
        ))}
      </div>
    </div>
  );
};

export default Assortment;
