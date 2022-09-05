import axios from 'axios';
import { useEffect, useState } from 'react';

const useProducts = () => {
  const [tools,setTools]=useState([]);
    const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => {
            const reversed = res.data.reverse().slice(0, 6);
        setTools(reversed);
      })
     
  }, [tools]);
  return [tools, isLoading];
};

export default useProducts;