import { useCallback, useEffect, useState } from "react";
import { axiosInstance } from "../../constants/be-urls";

interface FetchDataResult<T> {
  data: T | null;
  isLoading: boolean;
  fetchData: () => void;
}

const useFetchData = <T>(url: string): FetchDataResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = useCallback(() => {
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

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, fetchData };
};

export default useFetchData;
