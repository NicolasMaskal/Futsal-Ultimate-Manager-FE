import {AxiosError} from "axios";
import {BeError} from "../models";

export const getFirstErrorMessage = (
    beError: AxiosError<BeError>,
    defaultText: string = "Error"
) => {
    console.log(beError.response?.data.extra.fields);
    console.log(beError.response?.data.extra.fields[0]);
    if (beError.response?.data.extra?.fields) {
        return Object.values(beError.response?.data.extra?.fields)[0][0]
    }
    return defaultText;
};