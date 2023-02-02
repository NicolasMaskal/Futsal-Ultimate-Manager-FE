import { useEffect, useState } from "react";
import { axiosInstance } from "../constants/be-urls";

interface FetchDataResult<T> {
  data: T | null;
  error: Error | null;
  loading: boolean;
}

const useFetchData = <T>(url: string): FetchDataResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log("HERE Fetch data")
    setIsLoading(true);
    axiosInstance
      .get<T>(url)
      .then((response) => response.request.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [url]);

  return { data, error, loading: isLoading };
};

export default useFetchData;
