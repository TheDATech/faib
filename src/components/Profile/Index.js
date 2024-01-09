import React, { useEffect, useState } from "react";
import { Typography, Button, CardContent, Card, Grid } from "@mui/material/";
import { Box } from "@mui/system";
import style from "./ProfileStyle.module.css";
import userImage from "../../assets/profile picture.png";
import logoIcon from "../../assets/logoicon.png";
import { OutlinedInput } from "@mui/material";
import { Link } from "react-router-dom";
import ChangePassword from "./ChangePassword";
import { useAuthContext } from "../../Context/AuthContext";
import axios from "axios";

export default function Index() {
  const {ProfileLoading,Profile_list}=useAuthContext();
  console.log('Profile_list',Profile_list);

  if(ProfileLoading){
    return(
      <div>Loading....</div>
    )
  }

 
  
  return (
    <>
      <Box
      className={style.profile_topbox_card}>
        <Typography style={{ fontWeight: "bold", fontSize: "20px" }} component="p">Profile</Typography>
        <Box sx={{ display: "flex",flexWrap:"wrap",gap:"1rem" }}>
          <ChangePassword />
          <Button variant="outlined" className={style.edit_btn}>
            <Link style={{ textDecoration: "none", color: "#3e3441" }} to="/profile/profile-edit">Edit Profile</Link>
          </Button>
        </Box>
      </Box >

      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Card
            sx={{
              width: "250px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              height:"auto"
            }}
          >
            <CardContent>
              <img src={userImage} alt="" width="130px" />
              <Typography style={{ fontWeight: "600", marginTop: "8px" }} sx={{ mb: 1.5 }} color="text.secondary">
              {Profile_list?<span>{Profile_list.first_name} {Profile_list.last_name}</span>:""}
              </Typography>
              {Profile_list.fake_membership &&Profile_list.fake_membership?
              <Box>
                <Typography style={{ fontWeight: "500", marginLeft: "-35px", color: "gray", marginTop: "20px" }} variant="p">Active Memberships</Typography>
                <Typography
                  variant="p"
                  sx={{
                    marginTop: "10px",
                    display: "flex",
                    fontSize: "13px",
                  }}
                >
                  {Profile_list.photo && Profile_list.photo?<img src={Profile_list.photo} alt="iconphoto" width="20px" />: <img src={logoIcon} alt="icon" width="20px" />}
                 &nbsp; {Profile_list.fake_membership && Profile_list.fake_membership}
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    display: "flex",
                    fontSize: "13px",
                    marginTop: "10px"
                  }}
                >
                  <img src={logoIcon} alt="" width="20px" />&nbsp; FAIB Mental Health
                  Provider
                </Typography>
              </Box>:""}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={9}>
          <Card
            className={style.cardheight_profile}
          >
           {Profile_list?
            <CardContent>
              <Box className={style.profile_cardbox_input}>
                <Box>
                  <Typography>First Name</Typography>
                  <OutlinedInput
                    type="text"
                    value={Profile_list.first_name && Profile_list.first_name}
                    className={style.profile_cardbox_OutlinedInput}
                  />
                </Box>
                <Box>
                  <Typography>Last Name</Typography>
                  <OutlinedInput
                    type="text"
                    value={Profile_list.last_name && Profile_list.last_name}
                    className={style.profile_cardbox_OutlinedInput}
                  />
                </Box>
              </Box>
              <Box
                className={style.profile_cardbox_input}
                sx={{
                  marginTop: "30px",
                }}
              >
                <Box>
                  <Typography>Email</Typography>
                  <OutlinedInput
                    type="text"
                    value={Profile_list.email}
                    className={style.profile_cardbox_OutlinedInput}
                  />
                </Box>
                <Box>
                  <Typography>Contact</Typography>
                  <OutlinedInput
                    type="text"
                    value={Profile_list.contact_no}
                    className={style.profile_cardbox_OutlinedInput}
                  />
                </Box>
              </Box>
              <Box
                className={style.profile_cardbox_input}
                sx={{
                  marginTop: "30px",
                }}
              >
                <Box>
                  <Typography>Membership</Typography>
                  <OutlinedInput
                    type="text"
                    value={Profile_list.fake_membership}
                    className={style.profile_cardbox_OutlinedInput}
                  />
                </Box>
                <Box>
                  <Typography>Company Name</Typography>
                  <OutlinedInput
                    type="text"
                    value={Profile_list.company_name}
                    className={style.profile_cardbox_OutlinedInput}
                  />
                </Box>
              </Box>
              <Box
                className={style.profile_cardbox_input}
                sx={{
                  marginTop: "30px",
                }}
              >
                <Box>
                  <Typography>Where did you hear about FAIB?</Typography>
                  <OutlinedInput
                    type="text"
                    value={Profile_list.hereby}
                    className={style.profile_cardbox_OutlinedInput}
                  />
                </Box>
                <Box>
                  <Typography>Which membership are you interested in?</Typography>
                  <OutlinedInput
                    type="text"
                    value={Profile_list.interedted_in}
                    className={style.profile_cardbox_OutlinedInput}
                  />
                </Box>
              </Box>
              <Box
                className={style.profile_cardbox_input}
                sx={{
                  marginTop: "30px",
                }}
              >
                <Box>
                  <Typography>Lead Trainer</Typography>
                  <OutlinedInput
                    type="text"
                    value={Profile_list.assign_lead_trainer}
                    className={style.profile_cardbox_OutlinedInput}
                  />
                </Box>
                <Box>
                  <Typography>Lead Trainer Membership</Typography>
                  <OutlinedInput
                    type="text"
                    value={Profile_list.assign_lead_trainer_membership}
                    className={style.profile_cardbox_OutlinedInput}
                  />
                </Box>
              </Box>
              <Box
                className={style.profile_cardbox_input}
                sx={{
                  marginTop: "30px",
                }}
              >
                <Box>
                  <Typography>Lead Trainer Address</Typography>
                  <OutlinedInput
                    type="text"
                    value={Profile_list.assign_lead_trainer_address}
                    className={style.profile_cardbox_OutlinedInput}
                  />
                </Box>
                <Box>
                  <Typography>Newsletter</Typography>
                  <OutlinedInput
                    type="text"
                    value={Profile_list.newsletter}
                    className={style.profile_cardbox_OutlinedInput}
                  />
                </Box>
              </Box>
              <Box
                className={style.profile_cardbox_input}
                sx={{
                  marginTop: "30px",
                }}
              >
                <Box>
                  <Typography>Company Address 1</Typography>
                  <OutlinedInput
                    type="text"
                    value={Profile_list.company_address_1}
                    className={style.profile_cardbox_OutlinedInput}
                  />
                </Box>
                <Box>
                  <Typography>Company Address 2</Typography>
                  <OutlinedInput
                    type="text"
                    value={Profile_list.company_address_2}
                    className={style.profile_cardbox_OutlinedInput}
                  />
                </Box>
              </Box>
              <Box
                className={style.profile_cardbox_input}
                sx={{
                  marginTop: "30px",
                }}
              >
                <Box>
                  <Typography>Country</Typography>
                  <OutlinedInput
                    type="text"
                    value={Profile_list.country}
                    className={style.profile_cardbox_OutlinedInput}
                  />
                </Box>
                <Box>
                  <Typography>Town</Typography>
                  <OutlinedInput
                    type="text"
                    value={Profile_list.town}
                    className={style.profile_cardbox_OutlinedInput}
                  />
                </Box>
              </Box>
            </CardContent>:""}
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
