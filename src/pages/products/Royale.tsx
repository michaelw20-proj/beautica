import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProductDetail from '../../components/ProductDetail';

const Royale = () => {
  const productData = {
    id: 10,
    name: "Beauty Colour Royale Kiss Lip Serum",
    slug: "lip-royale",
    category: "Lips",
    images: [
      "/produk/Lips/royale-kiss-lip-serum.jpg",
      "/produk/Lips/Royale-kiss-lip-serum-vanilla.jpg",
      "/produk/Lips/Royale-kiss-lip-serum-strawberry.jpg",
    ],
    description: `Dapatkan warna bibir alami yang memukai dengan Lip Serum Color Changing
    Serum ini secara ajaib menyesuaikan diri dengan pH alami bibirmu
    Memberikan warna merah muda yang lembut dan segar

    Selain memberikan warna, serum ini juga melembapkan dan merawat bibirmu agar tetap sehat dan lembut

    Tersedia dalam 2 pilihan rasa.

    Beauty Colour Royale Kiss Lip Serum bersertifikat BPOM.
    Beauty Colour Royale Kiss Lip Serum - Vanilla
    NA11241300339
    Beauty Colour Royale Kiss Lip Serum - Strawberry
    NA11241300340`,
    
Keunggulan: [
      "#",
    ],
    colors: [
      { name: "Vanilla", value: "#FFFFFF", image: "/produk/Lips/Royale-kiss-lip-serum-vanilla.jpg" },
      { name: "Strawberry", value: "#FFFFFF", image: "/produk/Lips/Royale-kiss-lip-serum-strawberry.jpg" },
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

export default Royale;
