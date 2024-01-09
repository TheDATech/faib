import * as React from "react";
import "./membership.css";
import { ActiveMembership } from "./ActiveMembership";

import InActivePriceCard from "./InActivePriceCard";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
export default function Index() {
  return (
    <>
      <div className="pgheading">
        <div style={{display:"flex",justifyContent: "space-between",alignItems: "end", marginTop: "10px"}}>
        <h3 style={{ fontWeight: "bold", fontSize: "20px" }}>Membership</h3>
        <Button
            variant="contained"
            id="addbtnmembership"
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
              Apply for new membership
            </Link>
          </Button>
        </div>    
      </div>
      <ActiveMembership />
    </>
  );
}
