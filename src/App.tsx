import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext"; 
import { AnimatePresence, motion } from "framer-motion";
import Index from "./pages/Index";
import About from "./pages/About";
import NewArrival from "./pages/NewArrival";
import BestSellersPage from "./pages/BestSellersPage";
import Makeup from "./pages/Makeup";
import NailPolish from "./pages/NailPolish";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import Beautyme from "./pages/products/Beautyme";
import Brilliant from "./pages/products/Brilliant";
import Cushion from "./pages/products/Cushion";
import Eyelinerkuning from "./pages/products/Eyelinerkuning"
import Eyelinermarble from "./pages/products/Eyelinermarble"
import Eyelinerpencil from "./pages/products/Eyelinerpencil"
import Eyeshadow10 from "./pages/products/Eyeshadow10"
import Eyeshadowsweet from "./pages/products/Eyeshadowsweet"
import Eyeshadowbestofme from "./pages/products/Eyeshadowbestofme"
import Royale from "./pages/products/Royale";
import Lipcreamfeelme from "./pages/products/Lipcreamfeelme";
import Mascara2in1 from "./pages/products/Mascara2in1";
import Mascaramarble from "./pages/products/Mascaramarble";
import Mascarakuning from "./pages/products/Mascarakuning";
import Nailpolish588cb from "./pages/products/Nailpolish588cb";
import Nailpolishgepeng from "./pages/products/Nailpolishgepeng";
import Nailpolishmahkota from "./pages/products/Nailpolishmahkota";
import Nailpolishmaroon from "./pages/products/Nailpolishmaroon";
import Nailpolishred from "./pages/products/Nailpolishred";
import Nailpolishclear from "./pages/products/Nailpolishclear";
import Nailpolishblack from "./pages/products/Nailpolishblack";
import ProductDetail from "./components/ProductDetail";


const queryClient = new QueryClient();

const SlideText = () => {
  const { theme } = useTheme();  

  return (
    <div
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        backgroundColor: "transparent",
        padding: "6px 12px",
        borderBottom: "1px solid #ddd",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <motion.div
        style={{
          display: "inline-block",
          fontWeight: 500,
          fontSize: "0.95rem",
          color: theme === "dark" ? "#fff" : "#555",
        }}
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        }}
      >
        Welcome to BEAUTICA BEAUTY COLOUR Website | Cantik Engga Harus Mahal | Where Beauty Begins with Your Colours
      </motion.div>
    </div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.0, ease: "easeInOut" }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/new-arrival" element={<NewArrival />} />
          <Route path="/best-sellers" element={<BestSellersPage />} />
          <Route path="/makeup" element={<Makeup />} />
          <Route path="/nail-polish" element={<NailPolish />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/products/beautyme" element={<Beautyme />} />
          <Route path="/products/brilliant" element={<Brilliant />} />
          <Route path="/products/eyelinerkuning" element={<Eyelinerkuning />} />
          <Route path="/products/eyelinermarble" element={<Eyelinermarble />} />
          <Route path="/products/eyelinerpencil" element={<Eyelinerpencil />} />
          <Route path="/products/eyeshadow10" element={<Eyeshadow10 />} />
          <Route path="/products/eyeshadowsweet" element={<Eyeshadowsweet />} />
          <Route path="/products/eyeshadowbestofme" element={<Eyeshadowbestofme />} />
          <Route path="/products/cushion" element={<Cushion />} />
          <Route path="/products/royale" element={<Royale />} />
          <Route path="/products/lipcreamfeelme" element={<Lipcreamfeelme />} />
          <Route path="/products/mascara2in1" element={<Mascara2in1 />} />
          <Route path="/products/mascaramarble" element={<Mascaramarble />} />
          <Route path="/products/mascarakuning" element={<Mascarakuning />} />
          <Route path="/products/nailpolish588cb" element={<Nailpolish588cb />} />
          <Route path="/products/nailpolishgepeng" element={<Nailpolishgepeng />} />
          <Route path="/products/nailpolishmahkota" element={<Nailpolishmahkota />} />
          <Route path="/products/nailpolishmaroon" element={<Nailpolishmaroon />} />
          <Route path="/products/nailpolishred" element={<Nailpolishred />} />
          <Route path="/products/nailpolishclear" element={<Nailpolishclear />} />
          <Route path="/products/nailpolishblack" element={<Nailpolishblack />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <SlideText />
          <AnimatedRoutes />
        </TooltipProvider>
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
