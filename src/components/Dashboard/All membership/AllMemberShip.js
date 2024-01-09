import { Divider, Grid, Typography,Button} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import style from "../DashboardStyle.module.css";
import "./membership.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const API="https://admin.faibnetwork.co.uk/api/user/getmembership";

export const AllMemberShip = () => {
  const [allmembership,setAllmembership]=useState();
  const [membershipeValue,setMembershipValue]=useState(null); 
  console.log('membershipeValue',membershipeValue)
  const [enabled, setEnabled] = useState(false);
  localStorage.setItem("membershipeValue",membershipeValue);
  const navigate = useNavigate();

  const  getALLMEMBERSHIP = async (url) => {
  try {
    const res = await axios.get(url);
    const  memberShip=await res.data;
    setAllmembership(memberShip);
  } catch (error) {
    console.log(error);
  }
  };

  const getContactForm=()=>{
    navigate("/contact-form")
  }

  useEffect(() => {
    getALLMEMBERSHIP(API);
    if (membershipeValue) {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  },[membershipeValue])
  return (
    <>
      <div className="pgheadig">
        <h3 style={{ fontWeight: "bold", fontSize: "20px" }}>Dashboard</h3>
        <h6>All Memberships</h6>
      </div>
      <Box
        sx={{
          background: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Divider className={style.horizontal_line} />
        <h3 style={{ fontWeight: "bold", fontSize: "30px", textAlign: "center", marginTop: "-35px", marginBottom: "40px" }}>Memberships</h3>    
        <Grid
          container
          spacing={2}
          className="grid_allmembership_abcd"
          flexGrow={1}
          sx={{ justifyContent: "space-around", flexWrap: "wrap" }}
        >
            {allmembership && allmembership.slice(0,3).map((curElement)=>{
          return(
            <Grid item xs={12} sm={6} md={3} key={curElement.id} className="grid-allmembership">
            {/* <PriceCard width="280" /> */}
              <div className="form">
                <div className="allmembership-form-input">
                  <input type="radio" name="membershipSelection" id={curElement.membership_name}
                    value={curElement.id} onChange={() => setMembershipValue(curElement.id)} checked={membershipeValue === curElement.id} />
                  <label htmlFor={curElement.membership_name}>
                    <div style={{textAlign: "center"}}>
                      <div className="price">£{curElement.membership_price}</div>
                      <div className="price1">£{curElement.membership_price}+VAT</div>
                      <div className="title">{curElement.membership_name}</div>
                      <div className="selectlable" onClick={getContactForm}><p>Selected</p></div>
                      <Typography
              variant="subtitle1"
              sx={{
                textAlign: "center",
                color: "#3E3459"
              }}
              id="subtitle"
            >
             {curElement.membership_details}
            </Typography>
                    </div>
                  </label>
                </div>
              </div>
            <div>

      <Box
        sx={{
          width: `${280}px !important`,
          textAlign: "center",
        }}
      >

        
        {/* <Typography
          variant="subtitle1"
          sx={{
            fontSize: "22px",
            mt: 1,
            color: "#278A2A",
          }}
        >
          Active
        </Typography> */}
      </Box>
    </div>
          </Grid>
          )
        })}
        </Grid>

        <Grid
          container
          spacing={2}
          className="grid_allmembership_abcd"
          sx={{
            justifyContent: "space-around",
            flexWrap: "wrap",
            marginTop: "80px",
            alignItems: "center",
          }}
        >
          {allmembership && allmembership.slice(3).map((curElement)=>{
          return(
            <Grid item xs={12} sm={6} md={3} key={curElement.id}>
            {/* <PriceCard width="280" /> */}
            <div className="form">
                <div className="allmembership-form-input">
                  <input type="radio" name="membershipSelection" id={curElement.membership_name}
                    value={curElement.id} onChange={() => setMembershipValue(curElement.id)} checked={membershipeValue === curElement.id}/>
                  <label htmlFor={curElement.membership_name}>
                    <div style={{textAlign: "center"}}>
                      <div className="price">£{curElement.membership_price}</div>
                      <div className="price1">£{curElement.membership_price}+VAT</div>
                      <div className="title">{curElement.membership_name}</div>
                      <div className="selectlable" onClick={getContactForm}><p>Select</p></div>
                      <Typography
              variant="subtitle1"
              sx={{
                textAlign: "center",
                color: "#3E3459"
              }}
              id="subtitle"
            >
             {curElement.membership_details}
            </Typography>
                    </div>
                  </label>
                </div>
              </div>
            <div></div>
          </Grid>
          )
        })}
        </Grid>
        {enabled ? (
          <Button className={style.continue_btn} onClick={getContactForm}>Continue</Button>
      ) : (
        <Button className={style.continue_btn} disabled={true}>Continue</Button> 
      )}
        
      </Box>
    </>
  );
};
