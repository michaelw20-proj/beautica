import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProductDetail from '../../components/ProductDetail';

const Nailpolishclear = () => {
  const productData = {
    id: 6,
    name: "BEAUTY COLOUR Nail Polish Clear Edition",
    slug: "NP-Transparant",
    category: "Nail Polish",
    images: [
      "/produk/Nail-Polish/OIl Nail Polish/Oilnailpolish.png",
     
    ],
    description: ` BEAUTY COLOUR Nail Polish Clear Edition bersertifikat BPOM.
    NA 

    Cara Pemakaian:
    1. Oleskan Nail Polish dari pangkal hingga ujung kuku secukupnya dan merata agar hasil tidak menggumpal.
    2. Untuk hasil yang lebih maksimal berikan finishing coat atau dengan Nail Polish bening.
    3. Biarkan mengering selama beberapa menit.`,
    
Keunggulan: [],
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

export default Nailpolishclear;
