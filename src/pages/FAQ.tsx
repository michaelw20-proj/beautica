import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState('general');
  const [bouncedQuery, setBouncedQuery] = useState('');

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const categories = [
    { id: 'general', name: 'General' },
    { id: 'products', name: 'Products' },
  ];

  const faqData = {
    general: [
      {
        question: "Apakah produk Beautica dan Beauty Colour sudah BPOM?",
        answer: "Ya! Semua produk kami sudah terdaftar BPOM dan aman digunakan. Namun, jika kamu memiliki kulit sensitif atau alergi tertentu, disarankan untuk melakukan patch test terlebih dahulu."
      },
      {
        question: "Apakah bisa mengajukan request collab atau jadi Brand Ambassador?",
        answer: "Bisa dong! Kami selalu terbuka untuk kolaborasi seru. Kamu bisa menghubungi kami melalui sosial media ataupun email resmi kami."
      },
      {
        question: "Bagaimana jika saya menerima produk rusak atau salah kirim?",
        answer: "Tenang! Hubungi tim customer service kami maksimal 3x24 jam setelah produk diterima, sertakan foto/video unboxing, dan kami akan bantu proses retur atau penggantinya."
      },
    ],
    products: [
      {
        question: "Apakah produk Beautica dan Beauty Colour bisa digunakan untuk remaja?",
        answer: "Bisa banget! Formula kami aman dan ringan, cocok untuk pemula maupun kamu yang baru mulai explore dunia makeup."
      },
      {
        question: "Di mana saya bisa membeli produk Beauty Colour?",
        answer: "Kamu bisa membeli produk kami di marketplace official store (Shopee, Tokopedia, dsb.), serta di beberapa toko offline pilihan. <br> Cek halaman 'Where to Buy' untuk info lengkapnya."
      },
    ],
  };

  const filteredFAQs = faqData[activeCategory as keyof typeof faqData].filter(faq =>
    faq.question.toLowerCase().includes(bouncedQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(bouncedQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100">
      <Navbar />

      {/* Header */}
      <div className="relative flex items-center justify-center bg-gradient-to-br from-pink-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 h-64 sm:h-72 md:h-80 text-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100">FAQ</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 opacity-90">
            Find answers to your questions quickly and easily
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-16 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Sidebar - Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-colors flex items-center space-x-3 font-medium
                      ${activeCategory === category.id
                        ? 'bg-pink-100 dark:bg-pink-900 text-black dark:text-white border-l-4 border-pink-500'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200'}
                    `}
                  >
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">
                {categories.find(cat => cat.id === activeCategory)?.name} Questions
              </h2>

              {filteredFAQs.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <p className="text-lg">No questions found matching your search.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredFAQs.map((item, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 dark:border-gray-600 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(index)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        <h3 className="text-lg font-medium pr-4">{item.question}</h3>
                        {openItems.includes(index) ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>
                      {openItems.includes(index) && (
                        <div
                          className="px-6 pb-4 leading-relaxed border-t border-gray-100 dark:border-gray-600"
                          dangerouslySetInnerHTML={{ __html: item.answer }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;
