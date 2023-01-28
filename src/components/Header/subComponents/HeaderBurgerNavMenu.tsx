import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ScoreboardRoundedIcon from "@mui/icons-material/ScoreboardRounded";
import footballFieldIconGray from "../../../images/football-field-gray.png";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
import { ProfileMenuItems } from "./HeaderBurgerProfileMenu";
import {
  matchCenterUrl,
  matchResultsUrl,
  playersUrl,
  shopUrl,
} from "../../../constants/urls";

const HeaderBurgerNavMenu: React.FC<{
  anchorElNav: null | HTMLElement;
  handleOpenNavMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleCloseNavMenu: () => void;
}> = ({ anchorElNav, handleOpenNavMenu, handleCloseNavMenu }) => {
  return (
    <div className="flex flex-grow justify-center">
      <IconButton
        size="large"
        aria-label="Navigation menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        color="inherit"
        disableScrollLock={true}
      >
        <Link to={playersUrl} style={{ textDecoration: "none" }}>
          <MenuItem key={"players"} onClick={handleCloseNavMenu}>
            <ListItemIcon>
              <PersonRoundedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText sx={{ color: "black" }}>Players</ListItemText>
          </MenuItem>
        </Link>
        <Link to={matchResultsUrl} style={{ textDecoration: "none" }}>
          <MenuItem key={"match-results"} onClick={handleCloseNavMenu}>
            <ListItemIcon>
              <ScoreboardRoundedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText sx={{ color: "black" }}>Match results</ListItemText>
          </MenuItem>
        </Link>
        <Link to={shopUrl} style={{ textDecoration: "none" }}>
          <MenuItem key={"shop"} onClick={handleCloseNavMenu}>
            <ListItemIcon>
              <StoreRoundedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText sx={{ color: "black" }}>Shop</ListItemText>
          </MenuItem>
        </Link>
        <Link to={matchCenterUrl} style={{ textDecoration: "none" }}>
          <MenuItem key={"match-center"} onClick={handleCloseNavMenu}>
            <ListItemIcon>
              <img
                src={footballFieldIconGray}
                alt={"Football field icon"}
                style={{ height: 20 }}
              />
            </ListItemIcon>
            <ListItemText sx={{ color: "black" }}>Match Center</ListItemText>
          </MenuItem>
        </Link>
        <ProfileMenuItems handleCloseNavMenu={handleCloseNavMenu} />
      </Menu>
    </div>
  );
};

export default HeaderBurgerNavMenu;
