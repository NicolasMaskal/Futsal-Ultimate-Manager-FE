import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";

const useMobileView = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down("md"));
};

export default useMobileView;
