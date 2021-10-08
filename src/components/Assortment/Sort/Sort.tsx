import styles from "./Sort.module.css";
import { useAppDispatch } from "../../../hooks/hooks";
import { sortByCountry } from "../../../features/itemSlice";

const Sort: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.sort}>
      <h2>Страна</h2>
      <div className={styles.countries}>
        <div className={styles.country}>
          <input
            type="radio"
            name="country"
            onClick={() => dispatch(sortByCountry("Все"))}
          ></input>
          <p>Все</p>
        </div>
        <div className={styles.country}>
          <input
            type="radio"
            name="country"
            onClick={() => dispatch(sortByCountry("Бразилия"))}
          ></input>
          <p>Бразилия</p>
        </div>
        <div className={styles.country}>
          <input
            type="radio"
            name="country"
            onClick={() => dispatch(sortByCountry("Колумбия"))}
          ></input>
          <p>Колумбия</p>
        </div>
        <div className={styles.country}>
          <input
            type="radio"
            name="country"
            onClick={() => dispatch(sortByCountry("Эфиопия"))}
          ></input>
          <p>Эфиопия</p>
        </div>
        <div className={styles.country}>
          <input
            type="radio"
            name="country"
            onClick={() => dispatch(sortByCountry("Гватемала"))}
          ></input>
          <p>Гватемала</p>
        </div>
      </div>
    </div>
  );
};

export default Sort;
