import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProductDetail from '../../components/ProductDetail';

const Nailpolishmahkota = () => {
  const productData = {
    id: 3,
    name: "BEAUTY COLOUR Nail Polish Mahkota",
    slug: "NP-Mahkota",
    category: "Nail Polish",
    images: [
      "/produk/Nail-Polish/OIl Nail Polish/beautica-mahkota.jpg",
     
    ],
    description: `BEAUTY COLOUR Nail Polish Mahkota bersertifikat BPOM.

    Cara Pemakaian:
    1. Oleskan Nail Polish dari pangkal hingga ujung kuku secukupnya dan merata agar hasil tidak menggumpal.
    2. Untuk hasil yang lebih maksimal berikan finishing coat atau dengan Nail Polish bening.
    3. Biarkan mengering selama beberapa menit.`,
    
Keunggulan: [],
      colors: [
        { name: "NA", value: "#7D1E2A", image: "" },
        { name: "NA", value: "#681E2C", image: "" },
        { name: "NA", value: "#9452A5", image: "" },
        { name: "NA", value: "#D11E62", image: "" },
        { name: "NA", value: "#35B5E6", image: "" },
        { name: "NA", value: "#009FAO", image: "" },
        { name: "NA", value: "#C6C6C66", image: "" },
        { name: "NA", value: "#1A237E", image: "" },
        { name: "NA", value: "#C70F25", image: "" },
        { name: "NA", value: "#D5232B", image: "" },
        { name: "NA", value: "#1457C5", image: "" },
        { name: "NA", value: "#D9D999", image: "" }
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

export default Nailpolishmahkota;
