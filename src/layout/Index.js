import { Box, CssBaseline } from "@mui/material";
import React from "react";
import Sidebar from "./sidebar/Index";
import Topbar from "./topbar/Index";
const drawerWidth = 240;
const Index = ({ children }) => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Topbar />
        <Sidebar />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            mt: 10,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
          className="main-container"
        >
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Index;
