import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ScoreboardRoundedIcon from "@mui/icons-material/ScoreboardRounded";
import footballFieldIconGray from "../../../images/football-field-gray.png";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
import { ProfileMenuItems } from "./HeaderBurgerProfileMenu";

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
        <Link to={"/players"} style={{ textDecoration: "none" }}>
          <MenuItem key={"players"} onClick={handleCloseNavMenu}>
            <ListItemIcon>
              <PersonRoundedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText sx={{ color: "black" }}>Players</ListItemText>
          </MenuItem>
        </Link>
        <Link to={"/match-results"} style={{ textDecoration: "none" }}>
          <MenuItem key={"match-results"} onClick={handleCloseNavMenu}>
            <ListItemIcon>
              <ScoreboardRoundedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText sx={{ color: "black" }}>Match results</ListItemText>
          </MenuItem>
        </Link>
        <Link to={"/shop"} style={{ textDecoration: "none" }}>
          <MenuItem key={"shop"} onClick={handleCloseNavMenu}>
            <ListItemIcon>
              <StoreRoundedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText sx={{ color: "black" }}>Shop</ListItemText>
          </MenuItem>
        </Link>
        <Link to={"/pre-match"} style={{ textDecoration: "none" }}>
          <MenuItem key={"pre-match"} onClick={handleCloseNavMenu}>
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
