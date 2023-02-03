import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LoadingButton from "@mui/lab/LoadingButton";
import SmartToyTwoToneIcon from "@mui/icons-material/SmartToyTwoTone";
import InfoTooltip from "../Generic/InfoTooltip";

const SimulateMatchOptions: React.FC<{
  handleClick: React.MouseEventHandler;
  isLoading: boolean;
}> = ({ handleClick, isLoading }) => {
  const [value, setValue] = React.useState<
    number | string | Array<number | string>
  >(5);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: 200 }}>
        <Typography
          id="input-slider"
          className="font-bold"
          align="center"
          gutterBottom
        >
          CPU Difficulty Rating
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <InfoTooltip title="Higher difficulty ratings yield better rewards"/>
          </Grid>
          <Grid item>
            <SmartToyTwoToneIcon />
          </Grid>
          <Grid item xs>
            <Slider
              step={1}
              marks
              value={typeof value === "number" ? value : 0}
              onChange={handleSliderChange}
              min={1}
              max={10}
              disabled={isLoading}
            />
          </Grid>
          <Grid item>
            <Typography>{value as number}</Typography>
          </Grid>
        </Grid>
      </Box>
      <div className="flex justify-center">
        <LoadingButton
          color="primary"
          onClick={handleClick}
          loading={isLoading}
          loadingPosition="start"
          startIcon={<SportsEsportsIcon />}
          variant="contained"
        >
          <Typography>Simulate Match</Typography>
        </LoadingButton>
      </div>
      {/*</div>*/}
    </>
  );
};

export default SimulateMatchOptions;
