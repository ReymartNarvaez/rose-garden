import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Cart } from "./pages/cart";
import { Products } from "./pages/products";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" />
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
