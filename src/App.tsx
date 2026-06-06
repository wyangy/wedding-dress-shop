import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import RequestFittingPage from "./pages/RequestFittingPage";
import ScrollToHash from "./components/ScrollToHash";

function App() {
  return (
    <>
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/dresses/:id" element={<ProductDetailPage />} />
        <Route path="/request-fitting/:id" element={<RequestFittingPage />} />
      </Routes>
    </>
  );
}

export default App;
