import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Navbar from "/src/components/Navbar";
import Favourites from "./pages/Favourites";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetail";
import CheckoutPage from "./pages/CheckoutPage";
import PaymentPage from "./pages/PaymentPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SuccessPage from "./pages/SuccessPage";




function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="w-full">
        <Navbar />
      </div>

      {/* Main content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favourites" element={<Favourites />} />
           <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<CheckoutPage />} />
           <Route path="/payment" element={<PaymentPage />} />
           <Route path="/purchaseSuccess" element={<SuccessPage />} />
          

        </Routes>
      </main>

      {/* Footer */}
      <Footer />
            <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
