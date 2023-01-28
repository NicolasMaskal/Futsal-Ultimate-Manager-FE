import React from "react";
import IconButton from "@mui/material/IconButton";
import {
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { loginUrl } from "../../../constants/urls";

export const ProfileMenuItems: React.FC<{
  handleCloseNavMenu: () => void;
}> = ({ handleCloseNavMenu }) => {
  return (
    <>
      <Link to={"/profile"} style={{ textDecoration: "none" }}>
        <MenuItem key={"profile"} onClick={handleCloseNavMenu}>
          <ListItemIcon>
            <ManageAccountsRoundedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText sx={{ color: "black" }}>User settings</ListItemText>
        </MenuItem>
      </Link>
      <Divider />
      <Link to={loginUrl} style={{ textDecoration: "none" }}>
        <MenuItem key={"logout"} onClick={handleCloseNavMenu}>
          <ListItemIcon>
            <LogoutRoundedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText sx={{ color: "black" }}>Logout</ListItemText>
        </MenuItem>
      </Link>
    </>
  );
};
const HeaderBurgerProfileMenu: React.FC<{
  anchorElNav: null | HTMLElement;
  handleOpenNavMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleCloseNavMenu: () => void;
}> = ({ anchorElNav, handleOpenNavMenu, handleCloseNavMenu }) => {
  return (
    <div className="flex flex-grow justify-center">
      <IconButton
        size="large"
        aria-label="Profile menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <AccountCircleRoundedIcon />
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
        <ProfileMenuItems handleCloseNavMenu={handleCloseNavMenu} />
      </Menu>
    </div>
  );
};
export default HeaderBurgerProfileMenu;
