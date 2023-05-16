import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./main-components/navbar";
import { SubNavbar } from "./main-components/subNavbar";
import { Footer } from "./main-components/footer";
import { Cart } from "./pages/cart";
import { Home } from "./pages/home";
import { Blog } from "./pages/blog";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Account } from "./pages/account";
import { Products } from "./pages/products";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <SubNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/spring-flowers" />
          <Route path="/indoor-plants" />
          <Route path="/outdoor-plants" />
          <Route path="/pots" />
          <Route path="/grow" />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};
export default App;
