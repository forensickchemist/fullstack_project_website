import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-lg font-semibold tracking-wide text-gray-900">
          RIVANSH
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Products
          </Link>

          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Team
          </a>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              to="/signup"
              className="rounded-md border border-gray-300 px-4 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Register
            </Link>

            <Link
              to="/login"
              className="rounded-md bg-gray-900 px-4 py-1.5 text-sm font-medium text-white hover:bg-gray-800"
            >
              Sign In
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
