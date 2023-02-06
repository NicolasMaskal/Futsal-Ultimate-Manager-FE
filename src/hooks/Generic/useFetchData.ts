import { useCallback, useEffect, useState } from "react";
import { axiosInstance } from "../../constants/be-urls";

interface FetchDataResult<T> {
  data: T | null;
  error: boolean;
  isLoading: boolean;
  fetchData: () => void;
}

const useFetchData = <T>(url: string): FetchDataResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const fetchData = useCallback(() => {
    setError(false);
    setIsLoading(true);
    axiosInstance
      .get<T>(url)
      .then((response) => response.data)
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, isLoading, fetchData };
};

export default useFetchData;
