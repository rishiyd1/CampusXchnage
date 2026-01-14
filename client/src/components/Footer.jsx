import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Instagram, X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* BRAND INFO */}
          <div className="space-y-4 -ml-2 md:-ml-4">
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-gray-900">Campus</span>
              <span className="text-orange-500">Xchange</span>
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              A verified, campus-only platform to buy, sell, and exchange essentials
              with fellow students—simple, safe, and stress-free.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-gray-900 font-bold mb-4">Navigation</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-orange-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="hover:text-orange-500 transition-colors"
                >
                  How it Works
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className="hover:text-orange-500 transition-colors"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-orange-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* CONNECT */}
          <div>
            <h4 className="text-gray-900 font-bold mb-4">Connect</h4>

            <div className="flex items-center gap-5 text-gray-500">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/YOUR_LINKEDIN"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>

              {/* X / Twitter */}
              <a
                href="https://twitter.com/YOUR_TWITTER"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors"
                aria-label="Twitter"
              >
                <X size={22} />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/YOUR_INSTAGRAM"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Campus Xchange. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
