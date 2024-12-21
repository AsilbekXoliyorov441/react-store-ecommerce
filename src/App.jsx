import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SideBar from './components/sidebar/index';
import MainContent from "./components/main-content";
import ProductPage from "./components/product";
import TopSellers from './components/top-sellers/index';
import PopularBlogs from "./components/popular-blogs";

export default function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <SideBar />
        <div className="rounded w-full flex justify-between flex-wrap">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>

          <div>
            <TopSellers/>
            <PopularBlogs/>
          </div>
        </div>
      </div>
    </Router>
  );
}
