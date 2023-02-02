import Grid from "@mui/material/Grid";
import SubHeaderButton from "./subComponents/SubHeaderButton";
import ShieldIcon from "@mui/icons-material/Shield";
import SavingsIcon from "@mui/icons-material/Savings";
import React from "react";
import { useSelector } from "react-redux";
import { getTeam } from "../../selectors/user";

const SubHeader = () => {
  const team = useSelector(getTeam);
  if (!team) {
    return <React.Fragment />;
  }
  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="center"
      className="bg-gray-100"
    >
      <Grid item xs>
        <SubHeaderButton
          startIcon={<ShieldIcon sx={{ color: "primary.main" }} />}
          buttonText={team.name}
          href={"/match-results"}
        />
      </Grid>
      <Grid item xs>
        <SubHeaderButton
          startIcon={<SavingsIcon sx={{ color: "primary.main" }} />}
          buttonText={`Coins: ${team.coins}`}
          tooltipText={null}
          href="/shop"
        />
      </Grid>
    </Grid>
  );
};

export default SubHeader;
