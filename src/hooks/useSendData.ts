import { useCallback, useState } from "react";
import { AxiosRequestConfig } from "axios";
import { axiosInstance } from "../constants/be-urls";

interface SendDataResult<T> {
  loading: boolean;
  error: Error | null;
  response: T | null;
  sendData: (data: any, config?: AxiosRequestConfig) => void;
}

const useSendData = <T>(
  url: string,
  method: "post" | "put" | "patch"
): SendDataResult<T> => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [response, setResponse] = useState<T | null>(null);

  const sendData = useCallback(
    async (data: any, config?: AxiosRequestConfig) => {
      setLoading(true);
      try {
        const response = await axiosInstance.request({
          url,
          method,
          data,
          withCredentials: true,
          ...config,
        });
        setResponse(response.data);
      } catch (e: any) {
        setError(e);
      } finally {
        setLoading(false);
      }
    },
    [url, method]
  );

  return { loading, error, response, sendData };
};

export default useSendData;
