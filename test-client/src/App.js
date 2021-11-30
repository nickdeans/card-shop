import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Pay from './Pay'
import Success from './Success'
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  // const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
        <Route exact path="/pay">
          <Pay />
        </Route>
        <Route exact path="/success">
          <Success />
        </Route>
    </Router>
  );
};

export default App;