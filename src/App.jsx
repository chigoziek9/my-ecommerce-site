import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/Sign Up";
import Cart from "./pages/Cart";
import Navbar from "/src/components/Navbar";
import Favourites from "./pages/Favourites";
import Footer from "./components/footer";
import ProductDetails from "./components/ProductDetail";

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
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
