import React, { useState } from 'react'
import { FaSearch,  FaShoppingCart, FaHeart, FaUser } from 'react-icons/fa'; 

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false)

  return (
    <>
      <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-1">

          {/* Left: Logo with custom fonts and colors */}
          <div className="flex items-center">
            <div className="text-[48px] font-bold">
              <a href="/" className="font-permanent-marker flex"> {/* Flexbox added here */}
                <span className="text-[#4E2525]">Urban</span> {/* Brown color */}
                <span className="text-red-600">Cove</span> {/* Red color */}
              </a>
            </div>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-gray-900 text-lg font-montserrat">Home</a>
            <a href="/products" className="text-gray-700 hover:text-gray-900 text-lg font-montserrat">Products</a>
            <a href="/contact" className="text-gray-700 hover:text-gray-900 text-lg font-montserrat">Contact Us</a>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center space-x-6 relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <a href="/search" className="text-gray-700 hover:text-gray-900">
              <FaSearch size={20} />
            </a>
            <a href="/wishlist" className="text-gray-700 hover:text-gray-900">
              <FaHeart size={20} />
            </a>
            <a href="/cart" className="text-gray-700 hover:text-gray-900">
              <FaShoppingCart size={20} />
            </a>
            <div className="relative">
              <a href="/profile" className="text-gray-700 hover:text-gray-900">
                <FaUser size={20} />
              </a>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  <a href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">My Profile</a>
                  <a href="/my-orders" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">My Orders</a>
                  <a href="/wishlist" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">My Wishlist</a>
                  <a href="/logout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
