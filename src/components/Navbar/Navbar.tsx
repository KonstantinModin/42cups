import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import blot from "../../assets/images/blot.png";
import bag from "../../assets/images/bag.png";
import { useAppSelector } from "../../hooks/hooks";

const Navbar: React.FC = () => {
  const sum = useAppSelector((state) => state.items.sum);
  const numberOfProducts = useAppSelector(
    (state) => state.items.numberOfProducts
  );


  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logoBlock}>
        <img
          src={logo}
          height="80px"
          width="80px"
          className={styles.logo}
          alt="logo"
        ></img>
      </NavLink>
      <div className={styles.navigationBlock}>
        <NavLink to="/assortment" className={styles.navItem}>
          <p>Ассортимент</p>
          <img
            className={styles.blot}
            src={blot}
            height="100%"
            width="100%"
            alt="blot"
          ></img>
        </NavLink>
        <NavLink to="/franchise" className={styles.navItem}>
          <p>Франшиза</p>
          <img
            className={styles.blot}
            src={blot}
            height="100%"
            width="100%"
            alt="blot"
          ></img>
        </NavLink>
        <NavLink to="/company" className={styles.navItem}>
          <p>О компании</p>
          <img
            className={styles.blot}
            src={blot}
            height="100%"
            width="100%"
            alt="blot"
          ></img>
        </NavLink>
        <NavLink to="/contact" className={styles.navItem}>
          <p>Контакты</p>
          <img
            className={styles.blot}
            src={blot}
            height="100%"
            width="100%"
            alt="blot"
          ></img>
        </NavLink>
      </div>
      <NavLink to="/cart" className={styles.cartBlock}>
        <img src={bag} width="30px" height="30px" alt="bag"></img>
        <div className={styles.info}>
          {sum} ₽ <br></br>
          {numberOfProducts} товаров
        </div>
      </NavLink>
    </header>
  );
};

export default Navbar;
