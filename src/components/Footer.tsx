import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import GoogleMaps from './GoogleMaps';

const Footer = () => {
  return (
    <footer className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300 text-gray-800 dark:text-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {/* Instagram 1 */}
              <a
                href="https://instagram.com/beautica.official"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-yellow-500 transition duration-300 hover:scale-105"
              >
                <Instagram size={20} className="text-gray-800 dark:text-white group-hover:text-white dark:group-hover:text-yellow-200" />
              </a>

              {/* Instagram 2 */}
              <a
                href="https://instagram.com/beautycolour.official"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-pink-500 transition duration-300 hover:scale-105"
              >
                <Instagram size={20} className="text-gray-800 dark:text-white group-hover:text-white dark:group-hover:text-pink-300" />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@beauticaofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-black transition duration-300 hover:scale-105"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-gray-800 dark:text-white group-hover:text-white dark:group-hover:text-blue-200"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>

              {/* Shopee */}
              <a
                href="https://shopee.co.id/beautica_official"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-orange-300 transition duration-300 hover:scale-105"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopee_logo.svg/1200px-Shopee_logo.svg.png"
                  alt="Shopee"
                  className="group w-6 h-6 object-contain group-hover:brightness-110 transition duration-300"
                />
              </a>

              {/* Google Maps */}
              <a
                href="https://g.co/kgs/YExyytS"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-green-300 transition duration-300 hover:scale-105"
              >
                <img
                  src="/produk/Logo/google-maps.png"
                  alt="Google Maps"
                  className="w-6 h-6 object-contain transition duration-300 group-hover:invert group-hover:brightness-200"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/new-arrival" className="text-gray-600 dark:text-gray-300 hover:text-pink-500">New Arrival</Link></li>
              <li><Link to="/best-sellers" className="text-gray-600 dark:text-gray-300 hover:text-pink-500">Best Sellers</Link></li>
              <li><Link to="/makeup" className="text-gray-600 dark:text-gray-300 hover:text-pink-500">Makeup</Link></li>
              <li><Link to="/nail-polish" className="text-gray-600 dark:text-gray-300 hover:text-pink-500">Nail Polish</Link></li>
              <li><Link to="/faq" className="text-gray-600 dark:text-gray-300 hover:text-pink-500">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact & Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Waktu Operasional</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>Senin - Jumat 8.30 - 17.30 WIB</li>
              <li>Sabtu 8.30 - 15.30 WIB</li>
              <li>Ruko Royal Palem Jl. Royale Boulevard Blok RC No. 22-23, RT.22/RW.16, Cengkareng Tim., Kecamatan Cengkareng, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11730</li>
            </ul>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold mb-4 text-center">Our Location</h3>
          <GoogleMaps />
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
              &copy; 2025 PT. Sinar Terang Megantara. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
