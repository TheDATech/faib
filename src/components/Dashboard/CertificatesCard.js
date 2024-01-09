import React, { useEffect, useState } from "react";
import { Button, Divider, Typography,Grid } from "@mui/material";
import { Box } from "@mui/system";
import style from "./DashboardStyle.module.css";
import image from "../../assets/logoicon.png";
import axios from "axios";

export const CertificatesCard = () => {
  const [active,setActive]=useState([]);
  console.log("active",active);
  const activeMembership=async()=>{
    try{
      const user_id=localStorage.getItem('UserID')
      const id=parseInt(user_id)
     const res=await axios.get(`https://admin.faibnetwork.co.uk/api/user/certificates/${id}`);
     setActive(res.data[0]);
     console.log(res.data);
    }catch(err){
     console.log(err)
    }
  }

  const DownloadCertificate=(url)=>{
    const fileName=url.split("/").pop();
    const aTag=document.createElement("a");
    aTag.href=url;
    aTag.setAttribute("download",fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
}

  const ViewCertificate=async(id,user_id,plan_id)=>{
    const url = `https://admin.faibnetwork.co.uk/api/user/view-issued-certificate/${id}/${user_id}/${plan_id}`;
    window.open(url, '_blank');
  }

  useEffect(()=>{
    activeMembership()
  },[])

  return (
    <Box>
      <Box className={style.certificates_box}>
        <Typography style={{ fontWeight: "bold", fontSize: "20px" }} component="p">Certificates</Typography>
        <Divider />
      </Box>
      {active.length === 0 ? (
        <h1 className="m-5 text-center" style={{color:'#c0c0c0'}}>No certificates available.</h1>
      ) : (
        active.map((item) => {
          const { id, user_id, plan_id, certificate_no, date_of_approval, date_of_expiry, membership_name } = item;
          console.log("certificate_no", item.certificate_no);
          return (
            <Grid
              container
              spacing={2}
              sx={{
                background: 'white',
                boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                marginTop: '20px',
                padding: '25px',
              }}
              className={style.certificates_card_box}
              key={id + date_of_approval}
            >
          <Box sx={{ display: "flex" }}>
          <Box>
            <img src={image} alt="" width="35px" />
          </Box>
          <Box sx={{ paddingLeft: "20px" }}>
            <Typography component="h3" className={style.heading_text}>
              {membership_name} Certificate (Licence)
            </Typography>
            <Typography style={{ fontWeight: "300", fontSize: "15px", marginBottom: "12px" }} className={style.smalgray} component="p">Cert.No: {certificate_no}</Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box className={style.dateaprrove}>
                <Typography>Date of Approval</Typography>
                <Typography>Date of Expiry</Typography>
              </Box>
              <Box className={style.dateaprrove}>
                <Typography>{date_of_approval}</Typography>
                <Typography>{date_of_expiry}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box>
            <Button className={style.preview} variant="outlined" onClick={ViewCertificate(id, user_id, plan_id)}>
              Preview
            </Button>
          </Box>
          <Box>
            <Button variant="contained" className={style.download} onClick={DownloadCertificate(`https://admin.faibnetwork.co.uk/api/user/download_certificate/${id}/${user_id}/${plan_id}`)}>
              Download
            </Button>
          </Box>
        </Box>
            </Grid>
          );
        })
      )}
    </Box>
  );
};

