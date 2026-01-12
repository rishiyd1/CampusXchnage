import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    // 1. MAIN NAV: Uses the exact responsive padding from your screenshot (px-6, md:px-16, lg:px-22)
    // This handles the "shift toward the right" for the logo and left for the button.
    <nav className=" w-full px-6 md:px-16 lg:px-22 py-3 flex items-center justify-between relative z-50 bg-[#f1efee] border-b border-gray-200">
      
      {/* 2. LOGO: Using the <h1> style from your image */}
      <Link to="/" className=" mt-12 text-2xl md:text-3xl font-bold cursor-pointer tracking-tighter">
        <span className="text-black">CAMPUS</span>
        <span className="text-[#f57404]">Xchange</span>
      </Link>

      {/* 3. RIGHT SIDE CONTAINER: Groups links and button together */}
      <div className="hidden md:flex items-center gap-10">
        
        {/* Navigation Links List */}
        <ul className="flex gap-10 text-gray-600 font-medium text-[1.2rem]">
          <li><Link to="/" className="hover:text-black transition">How it Works</Link></li>
          <li><Link to="/" className="hover:text-black transition">Features</Link></li>
          <li><Link to="/" className="hover:text-black transition">About Us</Link></li>
        </ul>

        {/* 4. BUTTON: Exact classes from your screenshot */}
        <Link
          to="/login"
          className="bg-[#f57404] px-6 py-2 rounded-full text-white font-semibold hover:bg-[#f57404]/90 cursor-pointer transition duration-200"
        >
          Join Now
        </Link>
      </div>

      {/* 5. MOBILE MENU ICON (Visible only on small screens) */}
      <button className="md:hidden text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

    </nav>
  );
}

export default Navbar;