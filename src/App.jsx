import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { SubNavbar } from "./components/subNavbar";
import { Cart } from "./pages/cart";
import { Home } from "./pages/home";
import { Products } from "./pages/products";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <SubNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" />
          <Route path="/about" />
          <Route path="/contact" />
          <Route path="/account" />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/spring-flowers" />
          <Route path="/indoor-plants" />
          <Route path="/outdoor-plants" />
          <Route path="/pots" />
          <Route path="/grow" />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
