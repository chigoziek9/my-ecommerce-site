import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";
import AOS from "aos"; // ← Import AOS
import "aos/dist/aos.css";
import "./index.css";
import App from "./App";

AOS.init({
  duration: 1200,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </StrictMode>
);
