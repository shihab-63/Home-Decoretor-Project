import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios("/furnitureData.json");
        setProducts(response.data);
      } catch (error) {
        setError(error.message || "Something went wrong fetching products!");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return { products, loading, error };
};

export default useProducts;
