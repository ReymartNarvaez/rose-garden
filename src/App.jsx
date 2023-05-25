import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./pages/Navbar";
import { SubNavbar } from "./pages/SubNavbar";
import { Footer } from "./pages/Footer";
import { Cart } from "./pages/CartPage";
import { HomePage } from "./pages/HomePage";
import { Blog } from "./pages/BlogPage";
import { About } from "./pages/AboutPage";
import { Contact } from "./pages/ContactPage";
import { Account } from "./pages/AccountPage";
import { Products } from "./pages/ProductPage";
import { ProductContextProvider } from "./context/ProductContextProvider";

const App = () => {
  return (
    <div>
      <ProductContextProvider>
        <Router>
          <Navbar />
          <SubNavbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
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
      </ProductContextProvider>
    </div>
  );
};
export default App;
