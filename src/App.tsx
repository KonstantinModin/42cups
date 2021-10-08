import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./components/Home/Home";
import Assortment from "./components/Assortment/Assortment";

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className={styles.app}>
          <Navbar />
          <div className={styles.content}>
          <Switch>
            <Route path="/assortment">
              <Assortment />
            </Route>
            <Route path="/franchise">4444</Route>
            <Route path="/company">4242</Route>
            <Route path="/contact">17</Route>
            <Route path="/cart">cart</Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
