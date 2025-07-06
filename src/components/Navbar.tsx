import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bouncedQuery, setBouncedQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { mode, setMode } = useTheme();
  const navigate = useNavigate();

  const menuItems = [
    { name: 'About', path: '/about' },
    { name: 'New Arrival', path: '/new-arrival' },
    { name: 'Best Sellers', path: '/best-sellers' },
    { name: 'Makeup', path: '/makeup' },
    { name: 'Nail Polish', path: '/nail-polish' },
    { name: 'FAQ', path: '/faq' },
  ];

  const allproducts = [];
  const allItems = [...menuItems, ...allproducts];

  const themeOptions = [
    { value: 'light', icon: Sun },
    { value: 'dark', icon: Moon },
    { value: 'auto', icon: 'custom' },
  ];

  const ThemeIcon = () => {
    if (mode === 'auto') {
      return (
        <img
          src="/Produk/Logo/auto-mode.png"
          alt="Auto Mode"
          className="w-5 h-5 dark:invert"
        />
      );
    }
    const option = themeOptions.find(opt => opt.value === mode);
    const Icon = option?.icon as any;
    return <Icon className="w-5 h-5" />;
  };

  useEffect(() => {
    if (bouncedQuery.trim() === '') {
      setFilteredResults([]);
      setShowSuggestions(false);
      return;
    }
    const filtered = allItems.filter(item =>
      item.name.toLowerCase().includes(bouncedQuery.toLowerCase())
    );
    setFilteredResults(filtered);
    setShowSuggestions(true);
  }, [bouncedQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (filteredResults.length > 0) {
      navigate(filteredResults[0].path);
      setBouncedQuery('');
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (path: string) => {
    navigate(path);
    setBouncedQuery('');
    setShowSuggestions(false);
  };

  return (
    <nav className="bg-transparent backdrop-blur-md shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img
              src="Produk/Slideshow/Logo Brand.png"
              alt="Beautica Beauty Colour Logo"
              className="h-10 object-contain"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map(item => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition duration-300 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4 relative">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={bouncedQuery}
                onChange={(e) => setBouncedQuery(e.target.value)}
                onFocus={() => bouncedQuery && setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                className="w-64 px-4 py-2 pl-10 pr-4 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
              {showSuggestions && filteredResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
                  {filteredResults.slice(0, 5).map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(item.path)}
                      className="w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-600 last:border-b-0 transition-colors"
                    >
                      <span className="text-gray-800 dark:text-gray-200 font-medium">{item.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </form>
            <Popover>
              <PopoverTrigger asChild>
                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <ThemeIcon />
                </button>
              </PopoverTrigger>
              <PopoverContent className="p-1 space-x-1 w-auto min-w-0 flex" align="center">
                {themeOptions.map(option => {
                  const isActive = mode === option.value;
                  return (
                    <button
                      key={option.value}
                      onClick={() => setMode(option.value as any)}
                      className={`flex items-center justify-center w-8 h-8 rounded-md transition-colors ${
                        isActive
                          ? 'bg-pink-100 text-pink-600 dark:bg-pink-900 dark:text-pink-300'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      {option.icon === 'custom' ? (
                        <img
                          src="/Produk/Logo/auto-mode.png"
                          alt="Auto"
                          className="w-5 h-5 dark:invert"
                        />
                      ) : (
                        <option.icon className="w-5 h-5" />
                      )}
                    </button>
                  );
                })}
              </PopoverContent>
            </Popover>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-2 space-y-2 flex flex-col items-start animate-slide-down">
            {menuItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-2 px-4 mt-2">
              {themeOptions.map((option) => {
                const isActive = mode === option.value;
                return (
                  <button
                    key={option.value}
                    onClick={() => setMode(option.value as any)}
                    className={`flex items-center justify-center w-8 h-8 rounded-md transition-colors ${
                      isActive
                        ? 'bg-pink-100 text-pink-600 dark:bg-pink-900 dark:text-pink-300'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {option.icon === 'custom' ? (
                      <img
                        src="/Produk/Logo/auto-mode.png"
                        alt="Auto"
                        className="w-5 h-5 dark:invert"
                      />
                    ) : (
                      <option.icon className="w-5 h-5" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
