import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import footballFieldIconWhite from "../../images/football-field-white.png";
import ScoreboardRoundedIcon from "@mui/icons-material/ScoreboardRounded";
import HeaderButton from "./subComponents/HeaderButton";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import Grid from "@mui/material/Grid";
import AppName from "./subComponents/AppName";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
import useMobileView from "../../hooks/Generic/useMobileView";
import LogoButtonHeader from "./subComponents/LogoButtonHeader";
import SubHeader from "./SubHeader";
import HeaderBurgerNavMenu from "./subComponents/HeaderBurgerNavMenu";
import HeaderBurgerProfileMenu from "./subComponents/HeaderBurgerProfileMenu";
import {
  MATCH_CENTER_URL,
  MATCH_RESULTS_URL,
  PLAYERS_URL,
  SHOP_URL,
} from "../../constants/urls";
import { useSelector } from "react-redux";
import { getUser } from "../../selectors/user";

const DesktopHeader = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const user = useSelector(getUser);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <Grid item xs={0} md={1}>
        <LogoButtonHeader />
      </Grid>
      <Grid item xs={0} md>
        <AppName />
      </Grid>
      <Grid item xs>
        {user?.email_verified && (
          <HeaderButton
            tooltipText="View players playing for your team"
            buttonText="Players"
            startIcon={<PersonRoundedIcon />}
            href={PLAYERS_URL}
          />
        )}
      </Grid>
      <Grid item xs>
        {user?.email_verified && (
          <HeaderButton
            tooltipText="View match results of your team."
            buttonText="Match Results"
            startIcon={<ScoreboardRoundedIcon />}
            href={MATCH_RESULTS_URL}
          />
        )}
      </Grid>
      <Grid item xs>
        {user?.email_verified && (
          <HeaderButton
            tooltipText="Visit the shop to buy packs and improve your team."
            buttonText="Shop"
            startIcon={<StoreRoundedIcon />}
            href={SHOP_URL}
          />
        )}
      </Grid>
      <Grid item xs>
        {user?.email_verified && (
          <HeaderButton
            tooltipText="Adjust your lineup and start a match."
            buttonText="Match Center"
            startIcon={
              <img
                src={footballFieldIconWhite}
                alt={"Football field icon"}
                style={{ height: 24 }}
              />
            }
            onClick={undefined}
            href={MATCH_CENTER_URL}
          />
        )}
      </Grid>
      <Grid item xs>
        {user && (
          <HeaderBurgerProfileMenu
            anchorElNav={anchorElUser}
            handleOpenNavMenu={handleOpenUserMenu}
            handleCloseNavMenu={handleCloseUserMenu}
          />
        )}
      </Grid>
    </>
  );
};

const MobileHeader = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const user = useSelector(getUser);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Grid item xs>
        <LogoButtonHeader />
      </Grid>
      <Grid item xs>
        <AppName />
      </Grid>
      <Grid item xs>
        {user?.email_verified ? (
          <HeaderBurgerNavMenu
            anchorElNav={anchorElNav}
            handleOpenNavMenu={handleOpenNavMenu}
            handleCloseNavMenu={handleCloseNavMenu}
          />
        ) : (
          user && (
            <HeaderBurgerProfileMenu
              anchorElNav={anchorElNav}
              handleOpenNavMenu={handleOpenNavMenu}
              handleCloseNavMenu={handleCloseNavMenu}
            />
          )
        )}
      </Grid>
    </>
  );
};

const Header = () => {
  const mobileView = useMobileView();
  return (
    <AppBar>
      <Toolbar disableGutters>
        <div className="flex-row flex-grow">
          <Grid container justifyContent="space-around" alignItems="center">
            {mobileView ? <MobileHeader /> : <DesktopHeader />}
          </Grid>
          <SubHeader />
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
