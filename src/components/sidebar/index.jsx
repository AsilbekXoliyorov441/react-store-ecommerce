import { useEffect } from "react";
import { useState } from "react";
import { useFilter } from "../filter-conext";

const SideBar = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    keyword,
    setKeyword,
  } = useFilter();

  const [categories, setCategories] = useState([]);

  const [keywords] = useState([
    "apple",
    "watch",
    "Fashion",
    "trend",
    "shoes",
    "shirt",
  ]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();

        const uniqueCategories = Array.from(
          new Set(data.products.map((product) => product.category))
        );

        setCategories(uniqueCategories);
      } catch (error) {
        console.log("error fetching", error);
      }
    };
    fetchCategories();
  }, []);

  const handleMinPriceChange = (e) => {
    const value = e.target.value;
    setMinPrice(value ? parseFloat(value) : undefined);
  };

  const handleMaxPriceChange = (e) => {
    const value = e.target.value;
    setMaxPrice(value);
  };

  const handleRadioChangeCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleKeywordKey = (keyword) => {
    setKeyword(keyword)
  }

  const handlerResetFilters = () => {
    setSearchQuery('')
    setSelectedCategory('')
    setMinPrice(undefined)
    setMaxPrice(undefined)
    setKeyword('')
  }

  return (
    <div className="w-64 p-5 h-screen">
      <h1 className="text-2xl font-bold mb-10 mt-4">React store</h1>

      <section>
        <input
          type="text"
          className="border-2 rounded px-2 sm:mb-1"
          placeholder="Search Product"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="flex justify-between items-center">
          <input
            type="text"
            className="border-2 mr-1 px-5 py-3 mb-3 w-full"
            placeholder="Min"
            value={minPrice}
            onChange={handleMinPriceChange}
          />
          <input
            type="text"
            className="border-2 mr-2 px-5 py-3 mb-3 w-full"
            placeholder="Max"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
        </div>

        {/*Categories */}
        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-3">Categories</h2>
        </div>
        {categories?.map((category, index) => (
          <label key={index} className="block mb-2 cursor-pointer">
            <input
              type="radio"
              name="category"
              value={category}
              onChange={() => handleRadioChangeCategory(category)}
              checked={selectedCategory === category}
              className="mr-2 w-[16px] h-[16px] cursor-pointer"
            />
            {category.toUpperCase()}
          </label>
        ))}
      </section>

      <div className="mb-5">
        <h2 className="text-xl font-semibold mb-3">Keywords</h2>
        {keywords.map((keyword, index) => (
          <button
            key={index}
            onClick={() => handleKeywordKey(keyword)}
            className="block mb-2 px-4 py-2 w-full text-left border rounded hover:bg-gray-200"
          >
            {keyword.toUpperCase()}
          </button>
        ))}
      </div>

      <button onClick={handlerResetFilters} className="w-full mb-[4rem] py-2 bg-black text-white rounded mt-5">
        Reset Filters
      </button>
    </div>
  );
};

export default SideBar;
