import React, { useEffect, useState } from "react";
import { Button, Typography,Grid } from "@mui/material";
import { Box } from "@mui/system";
import image from "../../assets/inactive membership.png";
import style from "./DashboardStyle.module.css";
import axios from "axios";
import {useAuthContext} from "../../Context/AuthContext";
import { Renew } from "../Membership/Renew";
import AddTrainer1 from "../Trainer/AddTrainer1";
import { useNavigate } from "react-router-dom";

export const CardBox1 = () => {
  const [active,setActive]=useState([]);
  const {CancelMemberShip}=useAuthContext()
  const navigate=useNavigate()
  
  const activeMembership=async()=>{
    try{
      const user_id=localStorage.getItem('UserID')
      const id=parseInt(user_id)
     const res=await axios.get(` https://admin.faibnetwork.co.uk/api/user/getmembershiprecord/${id}`);
     setActive(res.data);
    }catch(err){
     console.log(err)
    }
  }

  

  useEffect(()=>{
    activeMembership(active)
  },[])
  return (
    <>
    {active.length === 0 ? (
      <div  className="text-center">
      <h1 className="m-md-5" style={{color:'#c0c0c0'}}>No Pending membership found.</h1>
    </div>
      ) : (
<>{active && active.map((curElem)=>{
       const {id,status,plan_id,status_relate,membership_name,membership_price,validate_till}=curElem;
       return(
         <div key={membership_name+id}>
        {status==="pending" && status_relate==="ongoing"?   <Grid container space={2} sx={{
        background: "white",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        marginTop: "20px",
        alignItems: "center",
      }}>
      <Grid item xs={12} sm={6} md={3}>
      <Box sx={{ position: "relative" }} className={style.card_container}>
        <img src={image} alt="" className={style.cardbox_image_green}/>
        <Box
          sx={{
            position: "absolute",
            top: "48px",
            textAlign: "center",
            left: "33px",
          }}
        >
          <Typography component="h1">£ {membership_price}</Typography>
          <Typography component="p" style={{fontSize:'0.8rem'}}>Expiry Date : {validate_till}</Typography>
        </Box>
      </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={9}>
      <Typography className={style.heading_text} component="h3">
         {membership_name}
        </Typography>
        <Box
          className={style.cardbox_btn_grid}>
          <Button variant="contained" className={style.cancel_btn} onClick={()=>CancelMemberShip(plan_id)}>
            Cancel
          </Button>
          {membership_name==="First Aid Training Provider"?<Button variant="outlined" className={style.edit_btn} onClick={()=>navigate('/required-form2')}>
          amend application
        </Button>:""}
        {membership_name==="First Aid Trainer Assessor"?<Button variant="outlined" className={style.edit_btn} onClick={()=>navigate('/required-form2')}>
          amend application
        </Button>:""}
        {membership_name==="Mental Health Training Provider"?<Button variant="outlined" className={style.edit_btn} onClick={()=>navigate('/required-form2')}>
          amend application
        </Button>:""}
        {membership_name==="Mental Health Trainer Assessor"?<Button variant="outlined" className={style.edit_btn} onClick={()=>navigate('/required-form2')}>
          amend application
        </Button>:""}
        {membership_name==="In Safe Hands"?<Button variant="outlined" className={style.edit_btn} onClick={()=>navigate('/required-form2')}>
          amend application
        </Button>:""}
          
          <Renew plan_id={plan_id} membership_price={membership_price} membership_name={membership_name}/>
        </Box>
      </Grid>
    </Grid>:""}
        </div>
       )
    })}</>
      )}
    </>
  );
};
  /*<Typography
          component="p"
          sx={{
            fontSize: "18px",
            textAlign: "center",
            paddingTop: "10px",
            width: "70%",
            margin: "0 auto",
          }}
        >
          {membership_details}
        </Typography>
          <Grid container space={2} sx={{
        background: "white",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        marginTop: "20px",
        alignItems: "center",
      }}>
      <Grid item xs={12} sm={6} md={3}>
      <Box sx={{ position: "relative" }} className={style.card_container}>
        <img src={image} alt="" className={style.cardbox_image_green}/>
        <Box
          sx={{
            position: "absolute",
            top: "48px",
            textAlign: "center",
            left: "33px",
          }}
        >
          <Typography component="h1">£100</Typography>
          <Typography component="p">Expiry Date : 29-Aug-2023</Typography>
        </Box>
      </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={9}>
      <Typography className={style.heading_text} component="h3">
         membership_name
        </Typography>
        <Box
          className={style.cardbox_btn_grid}>
          <Button variant="contained" className={style.cancel_btn}>
            Cancel
          </Button>
          <Button variant="outlined" className={style.edit_btn}>
            Edit
        </Button>
        <AddTrainer1/>
          <Renew/>
        </Box>
      </Grid>
    </Grid>*/