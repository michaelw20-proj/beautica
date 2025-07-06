
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion, easeInOut } from "framer-motion";
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
import Eyelinerkuning from "./pages/products/Eyelinerkuning";
import Eyelinermarble from "./pages/products/Eyelinermarble";
import Eyeshadow10 from "./pages/products/Eyeshadow10";
import Eyeshadowsweet from "./pages/products/Eyeshadowsweet";
import Eyeshadowbestofme from "./pages/products/Eyeshadowbestofme";
import Royale from "./pages/products/Royale";
import Lipcreamfeelme from "./pages/products/Lipcreamfeelme";
import Mascaramarble from "./pages/products/Mascaramarble";
import Mascarakuning from "./pages/products/Mascarakuning";
import Mascara2in1 from "./pages/products/Mascara2in1";
import Nailpolish588cb from "./pages/products/Nailpolish588cb"; 
import Nailpolishgepeng from "./pages/products/Nailpolishgepeng";
import Nailpolishmahkota from "./pages/products/Nailpolishmahkota";
import Nailpolishmaroon from "./pages/products/Nailpolishmaroon";
import Nailpolishred from "./pages/products/Nailpolishred";
import Nailpolishclear from "./pages/products/Nailpolishclear";
import Nailpolishblack from "./pages/products/Nailpolishblack";
import ProductDetail from "./components/ProductDetail";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const pageTransition = {
  duration: 0.4,
  ease: easeInOut, 
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              key="index"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <Index />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              key="about"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/new-arrival"
          element={
            <motion.div
              key="new-arrival"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <NewArrival />
            </motion.div>
          }
        />
        <Route
          path="/best-sellers"
          element={
            <motion.div
              key="best-sellers"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <BestSellersPage />
            </motion.div>
          }
        />
        <Route
          path="/makeup"
          element={
            <motion.div
              key="makeup"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <Makeup />
            </motion.div>
          }
        />
        <Route
          path="/nail-polish"
          element={
            <motion.div
              key="nail-polish"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <NailPolish />
            </motion.div>
          }
        />
        <Route
          path="/faq"
          element={
            <motion.div
              key="faq"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <FAQ />
            </motion.div>
          }
        />
         <Route
          path="/products/Beautyme"
          element={
            <motion.div
              key="Beautyme"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <Beautyme />
            </motion.div>
          }
        />
        <Route
          path="/products/Brilliant"
          element={
            <motion.div
              key="Brilliant"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <Brilliant />
            </motion.div>
          }
        />
        <Route
          path="/products/Cushion"
          element={
            <motion.div
              key="Cushion"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <Cushion />
            </motion.div>
          }
        />
        <Route
          path="/products/Eyeshadow10"
          element={
            <motion.div
              key="Eyeshadow10"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <Eyeshadow10 />
            </motion.div>
          }
        />
        <Route
          path="/products/Eyelinerkuning"
          element={
            <motion.div
              key="Eyelinerkuning"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <Eyelinerkuning />
            </motion.div>
          }
        />
        <Route
          path="/products/Eyelinermarble"
          element={
            <motion.div
              key="Eyelinermarble"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <Eyelinermarble />
            </motion.div>
          }
        />
        <Route
          path="/products/Royale"
          element={
            <motion.div
              key="Royale"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <Royale />
            </motion.div>
          }
        />
        <Route
          path="/products/Lipcreamfeelme"
          element={
            <motion.div
              key="Lipcreamfeelme"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <Lipcreamfeelme />
            </motion.div>
          }
        />
        <Route
          path="/products/Eyeshadowsweet"
          element={
            <motion.div
              key="Eyeshadowsweet"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <Eyeshadowsweet />
            </motion.div>
          }
        />
        <Route
          path="/products/Eyeshadowbestofme"
          element={
            <motion.div
              key="Eyeshadowbestofme"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <Eyeshadowbestofme />
            </motion.div>
          }
        />
        <Route
          path="/products/Mascaramarble"
          element={
            <motion.div
              key="Mascaramarble"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <Mascaramarble />
            </motion.div>
          }
        />
        <Route
          path="/products/Mascarakuning"
          element={
            <motion.div
              key="Mascarakuning"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <Mascarakuning />
            </motion.div>
          }
        />
        <Route
          path="/products/Mascara2in1"
          element={
            <motion.div
              key="Mascara2in1"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <Mascara2in1 />
            </motion.div>
          }
        />
        <Route
          path="/products/Nailpolish588cb"
          element={
            <motion.div
              key="Nailpolish588cb"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <Nailpolish588cb />
            </motion.div>
          }
        />
        <Route
          path="/products/Nailpolishgepeng"
          element={
            <motion.div
              key="Nailpolishgepeng"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <Nailpolishgepeng />
            </motion.div>
          }
        />
        <Route
          path="/products/Nailpolishmahkota"
          element={
            <motion.div
              key="Nailpolishmahkota"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <Nailpolishmahkota />
            </motion.div>
          }
        />
        <Route
          path="/products/Nailpolishmaroon"
          element={
            <motion.div
              key="Nailpolishmaroon"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <Nailpolishmaroon />
            </motion.div>
          }
        />
        <Route
          path="/products/Nailpolishred"
          element={
            <motion.div
              key="Nailpolishred"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <Nailpolishred />
            </motion.div>
          }
        />
        <Route
          path="/products/Nailpolishclear"
          element={
            <motion.div
              key="Nailpolishclear"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <Nailpolishclear />
            </motion.div>
          }
        />
        <Route
          path="/products/Nailpolishblack"
          element={
            <motion.div
              key="Nailpolishblack"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <Nailpolishblack />
            </motion.div>
          }
        />
        <Route
          path="/products/:slug"
          element={
            <motion.div
              key="product-detail"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <ProductDetail />
            </motion.div>
          }
        />
        <Route
          path="*"
          element={
            <motion.div
              key="not-found"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <NotFound />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
