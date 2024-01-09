import React from "react";
import { Button, Typography,Grid } from "@mui/material";
import { Box } from "@mui/system";
import image from "../../../../assets/membershipbox background.png";
import style from "./DashboardStyle.module.css";

export const CardBox = ({ heading, text, price, Validity }) => {
  return (
    <>
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
          <Typography component="h1">{price}</Typography>
          <Typography component="p">{Validity}</Typography>
        </Box>
      </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={9}>
      <Typography className={style.heading_text} component="h3">
          {heading}
        </Typography>
        <Typography
          component="p"
          sx={{
            fontSize: "18px",
            textAlign: "center",
            paddingTop: "10px",
            width: "70%",
            margin: "0 auto",
          }}
        >
          {text}
        </Typography>
        <Box
          className={style.cardbox_btn_grid}>
          <Button variant="contained" className={style.cancel_btn}>
            Cancel
          </Button>
          <Button variant="outlined" className={style.edit_btn}>
            Edit
          </Button>
          <Button variant="outlined" className={style.trainer_btn}>
            Add a Trainer
          </Button>
          <Button variant="contained" className={style.renew_btn}>
            Renew
          </Button>
        </Box>
      </Grid>
    </Grid>
    </>
  );
};
