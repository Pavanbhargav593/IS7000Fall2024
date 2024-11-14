import React from 'react';

function Header() {
  return (
    <header className="bg-teal-700 text-white py-4 px-6 shadow-lg fixed top-0 w-full z-50">
      <div className="flex justify-between items-center">
        {/* Logo/Title */}
        <h1 className="text-3xl font-bold">Market Insights Dashboard</h1>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8 font-semibold">
            <li>
              <a href="#" className="hover:text-teal-300">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-300">Market Overview</a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-300">Subscriptions</a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-300">User</a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-300">Profile</a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-300">Wallet</a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-300">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;