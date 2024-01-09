import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BsBellFill } from "react-icons/bs";
import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import { routesList } from "../AppRoutes";
import {
  appbarLogoWrapper,
  appbarRoutes,
  appbarTemporaryDrawer,
  appbarTemporaryLogo,
  appbarUserDetails,
  appbarUserDetailsWrapper,
  styledToolbar,
} from "./muiTopbarComponentStyle";
import {
  listItemButton,
  listItemText,
  sidebarListItem,
} from "../sidebar/muiSidebarComponentStyle";
import HeaderLogo from "../../assets/FAIB LOGO.png";
import { FaBars } from "react-icons/fa";
import axios from "axios";
import { useAuthContext } from "../../Context/AuthContext";



function Topbar() {
  const navigate = useNavigate();
  const { setUser } = useAuthContext();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const user = JSON.parse(localStorage.getItem("userDetails"));
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const getLogout = async() => {
    try{
        const token=localStorage.getItem('token')
       const res=await axios.post(' https://admin.faibnetwork.co.uk/api/user/logout',{},{
        headers:{
          Authorization:"Bearer " + token
        }
       })
       if(res.data.status==='Success'){
        localStorage.removeItem('token');
        setUser(localStorage.clear());
        navigate("/")
       }
       console.log(res.data.status)
    }catch(err){
      console.log(err);
    }
  };

  const getProfile=()=>{
    navigate("/profile")
  }
  const getDashboard=()=>{
    navigate("/dashboard")
  }
  const getAccount=()=>{
    navigate("/dashboard")
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        style={{backgroundColor:"#fff !important"}}
        sx={{
          paddingTop: "10px",
          paddingBottom: "10px",
          backgroundColor:"#fff !important"
        }}
        
      >
        <Toolbar sx={styledToolbar}>
          <IconButton
            color="#3E3459"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box component="div" sx={appbarLogoWrapper}>
            <Box
              component="img"
              sx={{
                mr: 1.4,
                p: { xs: 1, sm: 0 },
                cursor: "pointer",
                width: "150px",
              }}
              alt="logo"
              src={HeaderLogo}
            />
          </Box>
          <Box sx={appbarRoutes} className="drawer-box">
            <Typography variant="h6">
              <FaBars />   {/* menu icon place *********** */}
            </Typography>
          </Box>
          <Box sx={appbarRoutes}>
            <Typography variant="h6" className="welcome-note">
              Welcome to First Aid Industry Body (FAIB)
            </Typography>
          </Box>

          <Box sx={appbarUserDetailsWrapper}>
            <BsBellFill style={{ display: "none" }} className="bell-icon" />

            <IconButton>
              <Avatar
                sx={{ bgcolor: "#3E3459" }}
                src={user?.avatar}
                alt={user?.name}
              />
            </IconButton>
            <Typography sx={appbarUserDetails}>{user?.email}</Typography>
            <IconButton onClick={handleClick}>
              <KeyboardArrowDownOutlinedIcon
                sx={{
                  color: "#3E3459",
                }}
              />
            </IconButton>
            <Menu
              id="positioned-menu"
              aria-labelledby="positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              sx={{
                mt: 6,
              }}
            >
            <MenuItem>
                <button style={{ textDecoration: "none", color: "gray",border:"none",background:"white" }} onClick={getProfile}><ListItemText primary="Profile" /></button>
            </MenuItem>
            <MenuItem>
                <button style={{ textDecoration: "none", color: "gray",border:"none",background:"white" }} onClick={getAccount}><ListItemText primary="Account" /></button>
            </MenuItem>
            <MenuItem>
                <button style={{ textDecoration: "none", color: "gray",border:"none",background:"white" }} onClick={getDashboard}><ListItemText primary="Dashboard" /></button>
            </MenuItem>
              <MenuItem>
                <button style={{ textDecoration: "none", color: "gray",border:"none",background:"white" }} onClick={getLogout}><ListItemText primary="Logout" /></button>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Temporary Drawer */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={appbarTemporaryDrawer}
        >
          <Box onClick={handleDrawerToggle}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              textAlign="center"
              sx={appbarTemporaryLogo}
            >
              FAIB
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
                    onClick={handleDrawerToggle}
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
      </Box>
    </div>
  );
}

export default Topbar;
