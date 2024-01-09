import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import style from "./DashboardStyle.module.css";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import { CardBox } from "../../../Dashboard/CardBox";
import Certificate from "../../../../pages/certificate";

export const CardComponent = () => {
  return (
    <Box sx={{ background: "" }}>
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
          <Typography  className={style.heading_size}>Active Memberships</Typography>
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
      <CardBox  heading="FAIB Training Provider"
        text="+£100 Registration fee (1st Year Only) You will also need to register a minimum of 1 trainer at a cost of £20 per trainer"
        price="£350"
        Validity="Validity: 1 Feb 2024"/>

      <br />
      <Box className={style.dashboard_container}>
        <Certificate />
      </Box>
      <br />

    </Box >
  );
};
