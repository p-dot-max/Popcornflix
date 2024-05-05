import {
  Divider,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
} from "@mui/material";

import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const SideBar = ({ setMobileOpen }: any) => {
  const theme = useTheme();

  const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
  const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

  return (
    <>
      <Link to="/" className="flex justify-center py-10 px-0">
        <img
          className="w-3/4"
          src={theme.palette.mode === "light" ? redLogo : blueLogo}
          alt="MovieDump"
        />
      </Link>
    </>
  );
};

export default SideBar;
