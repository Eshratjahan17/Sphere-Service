import { useEffect, useState } from "react";

const useUser = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetch("https://sphere-service-server.onrender.com/user", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem(`accessToken`)}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }, [users]);

  return [users, isLoading];
};

export default useUser;
