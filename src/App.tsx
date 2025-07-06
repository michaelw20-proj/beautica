import React from 'react';
import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext"; 
import { AnimatePresence, motion } from "framer-motion";
import ErrorBoundary from './components/ErrorBoundary';
import Index from "./pages/Index";
import About from "./pages/About";
import NewArrival from "./pages/NewArrival";
import BestSellersPage from "./pages/BestSellersPage";
import Makeup from "./pages/Makeup";
import NailPolish from "./pages/NailPolish";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";

import promo from "./data/promo.json";

const queryClient = new QueryClient();

const SlideText = () => {
  const { theme } = useTheme();  
  const title = promo[0].title;

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
        Welcome to BEAUTICA BEAUTY COLOUR Website | {title}
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
          <Route path="/products/:slug" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <SlideText />
              <AnimatedRoutes />
            </TooltipProvider>
            <Toaster />
          </QueryClientProvider>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
