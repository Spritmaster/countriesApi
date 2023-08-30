import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);



  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const req = await fetch (url)
        if (req.status!==200) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        setData(data);
        setLoading(false);
        setError(null);
      } catch (err) {
        setLoading(false);
        setError(err);
        console.log(err);
      }
    };


    fetchData()
  }, [url]);

  return { data, loading, error};
};