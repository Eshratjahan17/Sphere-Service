import axios from 'axios';
import { useEffect, useState } from 'react';

const useProducts = () => {
  const [tools,setTools]=useState([]);
    const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    axios
      .get("https://sphere-service-server.onrender.com/products")
      .then((res) => {
            const reversed = res.data.reverse().slice(0, 6);
        setTools(reversed);
      })
     
  }, [tools]);
  return [tools, isLoading];
};

export default useProducts;