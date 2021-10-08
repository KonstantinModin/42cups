import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";
import menu from "../../assets/images/menu.jpg";
import franchise from "../../assets/images/franchise.jpg";
import about from "../../assets/images/about.jpg";

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <div>slider</div>
      <div className={styles.tiles}>
        <div className={styles.tile}>
          <NavLink to="/assortment" className={styles.menu}>
            <img src={menu} alt="menu"></img>
            <h3 className={styles.titleLeft}>
              Взгляни<br></br>на наш ассортимент
              <span className={styles.transition}>{">"}</span>
            </h3>
          </NavLink>
        </div>
        <div className={styles.tile}>
          <NavLink
            to="/franchise"
            className={styles.menu}
            style={{ marginBottom: "20px" }}
          >
            <img src={franchise} alt="franchise"></img>
            <h3 className={styles.title}>
              Франшиза<br></br>
              <span>заполни анкету будущего члена семьи</span>
              <span className={styles.transition}>{">"}</span>
            </h3>
          </NavLink>
          <NavLink to="/company" className={styles.menu}>
            <img src={about} alt="about"></img>
            <h3 className={styles.title}>
              Немного<br></br>
              <span>о нас</span>
              <span className={styles.transition}>{">"}</span>
            </h3>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
