import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { getAllProducts } from '../data/products';

const Makeup = () => {
  const navigate = useNavigate();

  // Get all products and filter out nail polish products
  const allProducts = getAllProducts();
  const products = allProducts.filter(product => 
    product.category !== 'Nail Polish'
  ).map(product => ({
    id: product.id,
    name: product.name,
    category: product.category,
    image: product.images[0],
    description: product.description,
    slug: product.slug
  }));

  const categories = [
    { 
      name: 'All', 
      count: products.length,
      description: 'Semua produk makeup' 
    },
    { 
      name: 'Cushion', 
      count: products.filter(p => p.category === 'Cushion').length,
      description: '' 
    },
    { 
      name: 'Eyeliner', 
      count: products.filter(p => p.category === 'Eyeliner').length,
      description: '' 
    },
    { 
      name: 'Eyeshadow', 
      count: products.filter(p => p.category === 'Eyeshadow').length,
      description: '' 
    },
    { 
      name: 'Lips', 
      count: products.filter(p => p.category === 'Lips').length,
      description: '' 
    },
    { 
      name: 'Makeup Kit', 
      count: products.filter(p => p.category === 'Makeup Kit').length,
      description: '' 
    },
    { 
      name: 'Mascara', 
      count: products.filter(p => p.category === 'Mascara').length,
      description: '' 
    }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleProductClick = (product: { id: number; name: string; category: string; image: string; description: string; slug: string; }) => {
    if (product.slug) {
      navigate(`/products/${product.slug}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
              Makeup Collection
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Professional makeup products for every occasion and style preference.
            </p>
          </div>

          {/* Category List */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
              Kategori Produk
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {categories.map((category) => (
                <div
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`group cursor-pointer rounded-xl p-6 transition-all duration-300 hover:scale-105 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-pink-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 shadow-md'
                  }`}
                >
                 <div className="text-center">
                    <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                    <p className={`text-sm mb-2 ${
                      selectedCategory === category.name ? 'text-pink-100' : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {category.description}
                    </p>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      selectedCategory === category.name
                        ? 'bg-white/20 text-white'
                        : 'bg-pink-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
                    }`}>
                      {category.count} produk
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                  selectedCategory === category.name
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-pink-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                 {category.name}
                <span className="ml-1 text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {selectedCategory === 'All' ? 'Semua Produk' : selectedCategory}
              </h3>
              <span className="text-gray-600 dark:text-gray-300">
                {filteredProducts.length} produk ditemukan
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleProductClick(product)}
                  className={product.slug ? 'cursor-pointer' : ''}
                >
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Makeup;
