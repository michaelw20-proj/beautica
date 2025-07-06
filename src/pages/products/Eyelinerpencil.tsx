import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProductDetail from '../../components/ProductDetail';

const Eyelinerpencil = () => {
  const productData = {
    id: 5,
    name: "BEAUTICA Eyeliner Pencil",
    slug: "e-pencil",
    category: "Eyeliner",
    images: [
      "/produk/Eyeliner/eyeliner-pencil.png",
     
    ],
    description: `#

BEAUTICA Eyeliner Pencil bersertifikat BPOM.
NA 

 Cara Pemakaian:
#`,
    
Keunggulan: [
      "#",
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

export default Eyelinerpencil;
