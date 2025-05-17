import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  NavbarContainer,
  NavLinks,
  NavButton,
  MobileMenu,
} from "./styles";
import { PhoneIcon } from "../../icons/index";
import Logo from '../../../assets/logo';
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <MobileMenu>
      <List>
        <PhoneIcon></PhoneIcon>
      </List>
    </MobileMenu>
  );

  return (
    <NavbarContainer>
     
      <Box sx={{ height: 40 }} >
      <Logo></Logo>
      </Box>
      <NavLinks>
        <IconButton
          color="secondary"
          type="button"
          sx={{
            border: "1px solid",
            borderRadius: "4px",
            borderColor: "secondary.main",
            "&:hover": {
              borderColor: "primary.dark",
              backgroundColor: "transparent",
            },
          }}
        >
          <PhoneIcon />
        </IconButton>
      </NavLinks>

      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            backgroundColor: "background.paper",
          },
        }}
      >
        {drawer}
      </Drawer>
    </NavbarContainer>
  );
};

export default Navbar;
