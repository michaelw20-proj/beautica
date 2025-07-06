import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProductDetail from '../../components/ProductDetail';

const Eyelinermarble = () => {
  const productData = {
    id: 4,
    name: "BEAUTICA Marble Liquid Eyeliner",
    slug: "e-marble",
    category: "Eyeliner",
    images: [
      "/produk/Eyeliner/eyeliner-marble.png",
     
    ],
    description: `Dapatkan Cantik Bulu Matamu Dengan Beautica Eyeliner
    BEAUTICA Marble Liquid Eyeliner bersertifikat BPOM.
    NA11221200476`,
    
Keunggulan: [
      "1. Membuat kelentikan pada bulu mata",
      "2. Waterproof",
      "3. Long Lasting"
    ],
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

export default Eyelinermarble;
