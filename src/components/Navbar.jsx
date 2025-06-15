import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../assets/Cart.png";
import favourites from "../assets/favourites.png";
import { Menu, X } from "lucide-react"; // Optional: You can use any icon library

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Top banner */}
      <section className="bg-black text-white p-2 text-sm">
        <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="text-center md:text-left">
            Summer Sale For All Swim Suit And Free Express Delivery - OFF 50%!
          </div>
          <div className="mt-2 md:mt-0">ENGLISH</div>
        </div>
      </section>

      {/* Navbar */}
      <nav className="border-b border-red-200 p-5 w-full">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">EXCLUSIVE</h1>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/signup">Sign Up</Link>
          </div>

          {/* Right Icons */}
          <div className="hidden md:flex gap-6">
            <Link to="/cart" className="flex items-center gap-1">
              <img src={Cart} alt="Cart" className="w-5 h-5" />
              <span>Cart</span>
            </Link>
            <Link to="/favourites" className="flex items-center gap-1">
              <img src={favourites} alt="Favourites" className="w-5 h-5" />
              <span>Favourites</span>
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 px-4">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link to="/signup" onClick={() => setIsOpen(false)}>Sign Up</Link>
            <Link to="/cart" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
              <img src={Cart} alt="Cart" className="w-5 h-5" />
              Cart
            </Link>
            <Link to="/favourites" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
              <img src={favourites} alt="Favourites" className="w-5 h-5" />
              Favourites
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
