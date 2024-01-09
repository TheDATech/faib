import { Divider} from "@mui/material";
import React from "react";
import { CardBox } from "../Dashboard/CardBox";
import { CardBox1 } from "../Dashboard/CardBox1";
import { CardBox2 } from "../Dashboard/CardBox2";

export const ActiveMembership = () => {
  return (
    <>
      <div className="pgheading mt-3">
        <h4>Active Memberships</h4>
      </div>
      <CardBox heading="FAIB Training Provider"
        text="+£100 Registration fee (1st Year Only) You will also need to register a minimum of 1 trainer at a cost of £20 per trainer"
        price="£350"
        Validity="Validity: 1 Feb 2024"/>
      <div className="pgheading">
        <h4>Pending Memberships</h4>
      </div>
      <Divider
        sx={{
          borderWidth: "2",
          marginTop: "10px",
          marginBottom: "20px",
          borderColor: "#E5E5E5",
        }}
      />
      <CardBox1/>
      <div className="pgheading">
        <h4>Expired Memberships</h4>
      </div>
      <Divider
        sx={{
          borderWidth: "2",
          marginTop: "10px",
          marginBottom: "20px",
          borderColor: "#E5E5E5",
        }}
      />
      <CardBox2 heading="FAIB Training Provider"
        text="+£100 Registration fee (1st Year Only) You will also need to register a minimum of 1 trainer at a cost of £20 per trainer"
        price="£350"
        Validity="Validity: 1 Feb 2024"/>
    </>
  );
};
