import React from 'react';
import ProductCard from './ProductCard';

const NewArrivals = () => {
  const newProducts = [
    {
      id: 1,
      name: "BEAUTICA Air Cushion",
      category: "Air Cushion",
      image: "produk/Cushion/cushion.png",
      description: "Air Cushion dari Beauty Colour punya coverage ringan tapi buildable, dengan hasil akhir natural yang bikin kulit keliatan sehat dan glowing seharian, ringan, praktis, dan cocok buat semua aktivitas.",
      slug: "beauty-colour-air-cushion",
      isNew: true
    },
    {
      id: 2,
      name: "BEAUTY COLOUR Royale kiss Lip Serum",
      category: "Lips",
      image: "Produk/Lips/royale-kiss-lip-serum.jpg",
      description: "",
      slug: "lip-royale",
      isNew: true
    },
    {
      id: 3,
      name: "BEAUTY COLOUR Nail Polish Maroon",
      category: "Nail Polish",
      image: "/Produk/Nail-Polish/OIl Nail Polish/Maroon-nail-polish.jpg",
      description: "",
      slug: "NP-maroon",
      isNew: true
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent dark:from-purple-300 dark:to-pink-300">
            New Arrivals
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our latest product
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-pink-400 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 dark:bg-pink-600 dark:hover:bg-pink-700">
            View All New Arrivals
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
