import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProductDetail from '../../components/ProductDetail';

const Mascara2in1 = () => {
  const productData = {
    id: 11,
    name: "BEAUTICA 2in1 Liquid Mascara and Eyeliner",
    slug: "m-2in1",
    category: "Mascara",
    images: [
      "/produk/2in 1 eyeliner mascara.png",
     
    ],
    description: `BEAUTICA 2in1 Liquid Mascara and Eyeliner bersertifikat BPOM.
    Mascara NA11221200477
    Eyeliner NA11221200476`,
    
Keunggulan: [
      "Mascara",
      "1. Melentikkan dan Menebalkan bulu mata",
      "2. Warna Hitam Pekat",
      "3. Tahan Lama",

      "Eyeliner",
      "1. Mudah diaplikasikan",
      "2. Warna Hitam Pekat",
      "3. Smudgeproof",
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

export default Mascara2in1;
