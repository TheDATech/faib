import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import style from "./DashboardStyle.module.css";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import { CardBox } from "./CardBox";

export const CardComponent = () => {
  return (
    <Box sx={{ background: "#F8FAFB" }}>
      <Box className={style.dashboard_container}>
        <Typography component="h4">Dashboard</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "end",
            justifyContent: "space-between",
            marginTop: "40px",
          }}
        >
          <Typography>Active Memberships</Typography>
          <Button
            variant="contained"
            sx={{
              background: "#3E3459",
              paddingLeft: "30px",
              paddingRight: "30px",
            }}
          >
            <Link
              to="/all-memberships"
              style={{ color: "white", textDecoration: "none" }}
            >
              All Memberships
            </Link>
          </Button>
        </Box>
      </Box>
      <Divider className={style.horizontal_line} />
      <CardBox/>
    </Box>
  );
};
