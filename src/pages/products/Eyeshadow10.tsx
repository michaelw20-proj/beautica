import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProductDetail from '../../components/ProductDetail';

const Eyeshadow10 = () => {
  const productData = {
    id: 1,
    name: "BEAUTICA Eyeshadow Palette + Blush 10 ",
    slug: "es-10mix",
    category: "Eyeshadow",
    images: [
      "/produk/Eyeshadow/10-mix-eyeshadow.png",
    ],
    description: `Digunakan untuk merias mata dan memberikan kesan cerah pada wajah.
    Produk ini dilengkapi dengan kuas, sehingga mudah untuk dibawa kemana saja

    BEAUTICA Eyeshadow Palette + Blush 10 bersertifikat BPOM.
    Eyeshadow = NA11201200211
    Blush on = NA11201200210`,
    
Keunggulan: [
      "#"
    ],
    varian: [
      { name: "Nude", image: "#" },
      { name: "Bright", image: "#" },
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Navbar />
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ProductDetail product={productData} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Eyeshadow10;
