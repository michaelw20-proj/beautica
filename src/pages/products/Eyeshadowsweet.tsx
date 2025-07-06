import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProductDetail from '../../components/ProductDetail';

const Eyeshadowsweet = () => {
  const productData = {
    id: 8,
    name: "BEAUTICA Sweet Eyeshadow & Blush Palette ",
    slug: "es-sweet",
    category: "Eyeshadow",
    images: [
      "/produk/Eyeshadow/10-mix-eyeshadow.png",
    ],
    description: `Digunakan untuk merias mata dan memberikan kesan cerah pada wajah.
    Produk ini dilengkapi dengan kuas, sehingga mudah untuk dibawa kemana saja

    BEAUTICA Sweet Eyeshadow & Blush Palette bersertifikat BPOM.
    Eyeshadow = NA11201200526
    Blush = NA11201200542
    NKIT230000924`,
    
Keunggulan: [
      "#"
    ],
    varian: [
      { name: "1", image: "#" },
      { name: "2", image: "#" },
      { name: "3", image: "#"}
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

export default Eyeshadowsweet;
