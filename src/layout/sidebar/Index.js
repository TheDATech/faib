import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import { NavLink } from "react-router-dom";

import {
  sidebarListItem,
  listItemButton,
  listItemText,
  sidebarNavWrapper,
  styledTemporaryDrawer,
  styledPermanentDrawer,
} from "./muiSidebarComponentStyle";
import { routesList } from "../AppRoutes";
import MyDropdownMenu from "./MyDropdownMenu";

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div>
      <Box component="nav" sx={sidebarNavWrapper} aria-label="sidebar-drawer">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={styledTemporaryDrawer}
        >
          <Box
            sx={{
              textAlign: { xs: "center", sm: "left" },
              mb: 2,
              mt: 2,
            }}
          >
            <Typography variant="h6" noWrap component="div">
              Get My Order
            </Typography>
          </Box>

          {routesList.map((page, index) => {
            return (
              <Box key={index}>
                <List disablePadding sx={{ padding: "5px" }}>
                  <ListItem
                    disablePadding
                    component={NavLink}
                    to={page.path}
                    sx={sidebarListItem}
                  >
                    <ListItemButton sx={listItemButton}>
                      <ListItemIcon
                        sx={{
                          color: "black",
                        }}
                      >
                        {page.icon}
                      </ListItemIcon>
                      <ListItemText disableTypography sx={listItemText}>
                        {page.name}
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>
            );
          })}
        </Drawer>
        
        <Drawer variant="permanent" sx={styledPermanentDrawer} open>
          {routesList.map((page, index) => {
            return (
              <Box key={index}>
                <List disablePadding sx={{ padding: "5px" }}>
                  <ListItem
                    disablePadding
                    component={NavLink}
                    to={page.path}
                    sx={sidebarListItem}
                  >
                    <ListItemButton sx={listItemButton}>
                      <ListItemIcon
                        sx={{
                          color: "#3E3459",
                        }}
                      >
                        {page.icon}
                      </ListItemIcon>
                      <ListItemText disableTypography sx={listItemText}>
                        {page.name}
                      </ListItemText>
                    </ListItemButton>                                      
                  </ListItem>
                </List>
              </Box>              
            );
          })}
        </Drawer>
        {/* <MyDropdownMenu/> */}

      </Box>
    </div>
  );
};

export default Sidebar;
