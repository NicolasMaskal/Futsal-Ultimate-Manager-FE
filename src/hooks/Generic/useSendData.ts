import { useCallback, useState } from "react";
import { AxiosRequestConfig, AxiosError } from "axios";
import { axiosInstance } from "../../constants/be-urls";
import {BeError} from "../../models";

interface SendDataResult<InputType, OutputType> {
  loading: boolean;
  error: AxiosError<BeError> | null;
  response: OutputType | null;
  sendData: (data: InputType, config?: AxiosRequestConfig) => void;
}

const useSendData = <InputType, OutputType>(
  url: string,
  method: "post" | "put" | "patch"
): SendDataResult<InputType, OutputType> => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError<BeError> | null>(null);
  const [response, setResponse] = useState<OutputType | null>(null);

  const sendData = useCallback(
    async (data: InputType, config?: AxiosRequestConfig) => {
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
      } catch (e: unknown) {
        if (e instanceof AxiosError<BeError>) {
          setError(e);
        }
        else{
          console.log(e)
        }
      } finally {
        setLoading(false);
      }
    },
    [url, method]
  );

  return { loading, error, response, sendData };
};

export default useSendData;
