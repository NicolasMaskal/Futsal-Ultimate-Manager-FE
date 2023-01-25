import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import logo from "../../futsal_logo.png";
import footballFieldIcon from "./football-field.png";
import ScoreboardRoundedIcon from "@mui/icons-material/ScoreboardRounded";
import HeaderButton from "./subComponents/HeaderButton";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import Grid from "@mui/material/Grid";
import AppName from "./subComponents/AppName";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import useMobileView from "../../hooks/useMobileView";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
const DesktopHeader = () => {
  return (
      <>
    <Grid container justifyContent="space-around" alignItems="center">
      <Grid item xs={0} md={1}>
        <Button component={Link} to="/" color="inherit">
          <Box
            component="img"
            sx={{
              maxHeight: 50,
              maxWidth: "100%",
              // display: { xs: "none", md: "flex" },
              mr: 2,
              ml: 2,
            }}
            alt="Logo"
            src={logo}
          />
        </Button>
      </Grid>
      <Grid item xs={0} md>
        <AppName />
      </Grid>
      <Grid item xs>
        <HeaderButton
          tooltipText="View players playing for your team"
          buttonText="Players"
          startIcon={<PersonRoundedIcon />}
          href="/players"
        />
      </Grid>
      <Grid item xs>
        <HeaderButton
          tooltipText="View match results of your team"
          buttonText="Match Results"
          startIcon={<ScoreboardRoundedIcon />}
          href="/match-results"
        />
      </Grid>
      <Grid item xs>
        <HeaderButton
          tooltipText="View all your team sheets"
          buttonText="Team Sheets"
          startIcon={
            <img
              src={footballFieldIcon}
              alt={"Football field icon"}
              style={{ height: 24 }}
            />
          }
          onClick={undefined}
          href="/my-team-sheets"
        />
      </Grid>
      <Grid item xs>
        <HeaderButton
          tooltipText="Visit the shop to buy packs and improve your team!"
          buttonText="Shop"
          startIcon={<StoreRoundedIcon />}
          href="/shop"
        />
      </Grid>
      <Grid item xs>
        <HeaderButton
          tooltipText="Click to logout"
          buttonText="Logout"
          startIcon={<LogoutRoundedIcon />}
          href={"/login"}
          onClick={console.log} // TODO
        />
      </Grid>
    </Grid>
    {/*<Grid container justifyContent="space-around" alignItems="center">*/}
    {/*    <Grid item xs={0} md>*/}
    {/*        <AppName />*/}
    {/*    </Grid>*/}
    {/*</Grid>*/}
    </>
  );
};

const MobileHeader = () => {
  return <></>;
};

const Header = () => {
  const mobileView = useMobileView();

  return (
    <AppBar>
      <Toolbar disableGutters>
        {mobileView ? <MobileHeader /> : <DesktopHeader />}
      </Toolbar>
    </AppBar>
  );
};
export default Header;
