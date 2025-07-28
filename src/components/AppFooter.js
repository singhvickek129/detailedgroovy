import React, { useState } from 'react'; // Import useState
import { Facebook, Instagram, Twitter, Youtube, Pin, Mail, Phone, ChevronDown, ChevronUp, Plus } from 'lucide-react'; // Added ChevronDown, ChevronUp, Plus

// Main App component that renders the Footer
export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-inter">
      {/* Main content area - for demonstration purposes */}
      <main className="flex-grow bg-gray-100 p-8 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800">Your footer Content Goes Here</h1>
      </main>

      {/* Footer Component */}
      <AppFooter /> {/* Updated component name */}
    </div>
  );
}

const AppFooter = () => { // Changed component name from Footer to AppFooter
  const [isPopularCategoriesOpen, setIsPopularCategoriesOpen] = useState(false);

  const togglePopularCategories = () => {
    setIsPopularCategoriesOpen(!isPopularCategoriesOpen);
  };

  return (
    <footer className="bg-orange-500 text-gray-300 py-10 px-4 md:px-8 lg:px-16"> {/* Changed background to bg-orange-500 */}
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Navigation Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-10 border-b border-gray-700 pb-8">
          {/* Need Help? */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Need Help?</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Track Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Returns & Exchange</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Shipping</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Cancellation</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Collaborations</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Media</a></li>
            </ul>
          </div>

          {/* More Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">More Info</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Sitemap</a></li>
            </ul>
          </div>

          {/* Popular Categories - Now a Dropdown */}
          <div className="sm:col-span-2 lg:col-span-1">
            <button
              className="flex justify-between items-center w-full text-white text-lg font-semibold mb-4 focus:outline-none"
              onClick={togglePopularCategories}
            >
              Popular Categories
              {isPopularCategoriesOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {isPopularCategoriesOpen && (
              <ul className="space-y-2 text-sm mt-2">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Men's T-Shirts</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Women's T-Shirts</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Full Sleeve T-Shirts</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Hoodies & Sweatshirts</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Jackets</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Joggers</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Shorts</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Vests</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Polo T-Shirts</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Shirts</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Co-ord Sets</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Plus Size</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Boxers</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Jeans & Denims</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Trousers & Pyjamas</a></li>
              </ul>
            )}
          </div>

          {/* New Navigation Link Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
              <Plus size={20} className="mr-2" /> Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Dummy Link 1</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Dummy Link 2</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Dummy Link 3</a></li>
            </ul>
          </div>
        </div>

        {/* Middle Section: Connect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 border-b border-gray-700 pb-8">
          {/* Connect With Us */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200"><Facebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200"><Instagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200"><Twitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200"><Pin size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200"><Youtube size={24} /></a>
            </div>
            <div className="flex items-center space-x-2 text-sm mb-2">
              <Mail size={18} className="text-gray-400" />
              <span><a href="mailto:dummy@example.com" className="hover:text-white transition-colors duration-200">dummy@example.com</a></span> {/* Dummy email */}
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Phone size={18} className="text-gray-400" />
              <span><a href="tel:+1234567890" className="hover:text-white transition-colors duration-200">+1 234 567 890 (Dummy Number)</a></span> {/* Dummy phone */}
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-center text-sm text-gray-500 pt-4">
          <p>&copy; 2023 The Souled Store. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
