import { useCallback, useState } from "react";
import { AxiosError, AxiosRequestConfig } from "axios";
import { axiosInstance } from "../../constants/be-urls";
import { BeError } from "../../utils/be-error-helpers";

interface SendDataResult<InputType, OutputType> {
  loading: boolean;
  error: any | null;
  resetError: () => void;
  response: OutputType | null;
  sendData: (data: InputType, config?: AxiosRequestConfig) => Promise<void>;
  resetSendData: () => void;
}

const useSendData = <InputType, OutputType>(
  url: string | null,
  method: "post" | "put" | "patch"
): SendDataResult<InputType, OutputType> => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any | null>(null);
  const [response, setResponse] = useState<OutputType | null>(null);

  const sendData = useCallback(
    async (data: InputType, config?: AxiosRequestConfig) => {
      setLoading(true);
      if (!url) {
        throw new Error("Invalid url!");
      }
      try {
        const response = await axiosInstance.request({
          url,
          method,
          data,
          withCredentials: true,
          ...config,
        });
        setResponse(response.data);
        setError(null);
      } catch (e: unknown) {
        if (e instanceof AxiosError<BeError>) {
          setError(e);
        } else {
          console.log(e);
        }
        throw e;
      } finally {
        setLoading(false);
      }
    },
    [url, method]
  );

  const resetSendData = () => {
    setError(null);
    setResponse(null);
  };

  const resetError = () => setError(null);

  return { loading, error, resetError, response, sendData, resetSendData };
};

export default useSendData;
