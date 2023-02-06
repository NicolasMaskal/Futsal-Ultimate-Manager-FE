import { useParams } from "react-router";
import useFetchData from "../hooks/Generic/useFetchData";
import { createEmailActivateUrl } from "../utils/url-helpers";
import LoadingFullPage from "../components/Generic/LoadingFullPage";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { INDEX_URL } from "../constants/urls";
import { useSnackbar } from "notistack";
import { useAppDispatch } from "../hooks/Generic/hooks";
import { refreshUserInfoThunk } from "../store/user-actions";

const EmailActivationPage = () => {
  let { uid, token } = useParams();
  const { data, error } = useFetchData<{ message: string }>(
    createEmailActivateUrl(uid!, token!)
  );
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      enqueueSnackbar("Email successfully verified!", { variant: "success" });
      dispatch(refreshUserInfoThunk())
        .then(() => navigate(INDEX_URL))
        .catch();
    }
  }, [data, dispatch, enqueueSnackbar, navigate]);

  if (error) {
    throw Error();
  }
  return <LoadingFullPage />;
};

export default EmailActivationPage;
