import { AxiosError } from "axios";

export type BeError = { message: string; extra: { fields: any[] } };

export const getFirstErrorMessage = (e: any, defaultText: string = "Error") => {
  if (e instanceof AxiosError<BeError> && e.response?.data.extra?.fields) {
    const fields_with_errors = Object.values(e.response.data.extra.fields)[0];
    if (Array.isArray(fields_with_errors) && fields_with_errors.length > 0) {
      return fields_with_errors[0] as string;
    } else {
      return fields_with_errors as string;
    }
  }
  return defaultText;
};
