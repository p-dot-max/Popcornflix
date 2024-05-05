import React from "react";
import { AppBar, colors, useAutocomplete } from "@mui/material";

// import { Menu } from "@mui/material";

import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";

import { Menu } from '@mui/icons-material';
import { styled, alpha } from "@mui/material/styles";

import { Theme } from "@emotion/react";

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  height: "70px",
  display: "flex",
  justifyContent: "space-between",
  marginLeft: "240px",
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    flexWrap: "wrap",
  },
}));

const CustomIconButton = styled(IconButton)(({theme}) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  },
}))

const NavBar = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <CustomToolbar>
          {isMobile && (
            <CustomIconButton
              color="inherit"
              edge="start"
              style={ { outline: 'none' } }
              onClick={ () => {} }
            >
              <Menu />
            </CustomIconButton>
          )}
        </CustomToolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
