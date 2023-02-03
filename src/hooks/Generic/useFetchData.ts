import { useEffect, useState } from "react";
import { axiosInstance } from "../../constants/be-urls";

interface FetchDataResult<T> {
  data: T | null;
  isLoading: boolean;
}

const useFetchData = <T>(url: string): FetchDataResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .get<T>(url)
      .then((response) => response.data)
      .then((data) => {
        setData(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

  return { data, isLoading };
};

export default useFetchData;
