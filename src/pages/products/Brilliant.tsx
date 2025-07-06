import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProductDetail from '../../components/ProductDetail';

const Brilliant = () => {
  const productData = {
    id: 2,
    name: "BEAUTICA Brilliant Eyes Magic Eyeliner",
    slug: "e-brill",
    category: "Eyeliner",
    images: [
      "/produk/Eyeliner/eyeliner-briliant.png",
     
    ],
    description: `Beautica Brilliant Eyes Magic Eyeliner merupakan eyeliner cair dengan bentuk spidol yang sangat mudah di aplikasikan, 
    lebih praktis dan mudah dibawa travelling.
    Produk ini akan memberikan hasil yang sempurna dan membuat efek yang lebih indah pada bagian mata.

BEAUTICA Brilliant Eyes Magic Eyeliner bersertifikat BPOM.
NA11201200087
`,
    
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

export default Brilliant;
