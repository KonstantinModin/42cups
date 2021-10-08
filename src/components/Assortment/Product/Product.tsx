import styles from "./Product.module.css";
import { useAppDispatch } from "../../../hooks/hooks";
import { decrement, increment } from "../../../features/itemSlice";
import oval from "../../../assets/images/oval.png";

interface Props {
    id: string;
    image: string;
    name: string;
    description: string;
    weight: string;
    price: number;
    number: number;
}

const Product: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.product}>
      <img src={props.image} alt="product" width="100%" height="70%"></img>
      <h3 className={styles.name}>{props.name}</h3>
      <p>{props.description}</p>
      <div className={styles.data}>
        <h4>
          {props.price + " ₽"} <span>/ {props.weight}</span>
        </h4>
        <div className={styles.number}>
          <div
            className={styles.btn}
            style={{
              backgroundImage: `url(${oval})`,
              backgroundSize: "100%",
            }}
            onClick={() => dispatch(decrement(props.id))}
          >
            -
          </div>
          {props.number}
          <div
            className={styles.btn}
            style={{
              backgroundImage: `url(${oval})`,
              backgroundSize: "100%",
            }}
            onClick={() => dispatch(increment(props.id))}
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
