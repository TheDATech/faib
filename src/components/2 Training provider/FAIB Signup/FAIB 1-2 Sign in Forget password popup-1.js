import React, { useState } from 'react';
import { Box, Typography,IconButton,Dialog,DialogTitle, Button, DialogContent } from '@mui/material';
import { useFormik } from "formik";
import { ForgotPassSchema } from '../../Schemas';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import style from "./signupstyle.module.css";
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}


const initialValues = {
  email: "",
};

export const ForgetPasswordPopup = () => {
  const [open, setOpen] = useState(false);
  const [Accountopen, setAccountopen] = useState(false);
  const [Resetopen, setResetopen] = useState(false);
  const [error, setError] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const AccounthandleClose = () => {
    setAccountopen(false);
  };
  const AccounthandleOpen = () => {
    setAccountopen(true);
    setOpen(false);
  };
  const ResethandleClose = () => {
    setResetopen(false);
  };
  const ResethandleOpen = () => {
    setResetopen(true);
    setAccountopen(false);
  };
  const onSubmit = async (values) => {
    console.log("k");
    try{
      const response = await axios.post("https://admin.faibnetwork.co.uk/api/user/send_reset_password_email", values,{
        headers: {
          'Content-Type': 'application/json',
          // Include any required headers
        },
        withCredentials: true, // Enable CORS credentials (cookies, headers)
      });
      console.log("response", response.data);
      console.log("token",response.data.access_token)
      if (response.data.status === "success") {
          toast.success(response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          setAccountopen(true);
          setOpen(false);
          setError(null);
          formik.resetForm();
      }else{
        setError(response.data.message);
      }
    }catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues,
    validateOnBlur: true,
    onSubmit,
    validationSchema:ForgotPassSchema
  });


  return (
    <div>
    <ToastContainer/>
  <Typography
        component="p"
        className={style.forget_password}
        onClick={handleOpen}
      >
        Forget Password?
      </Typography>  
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      style={{ borderRadius:'0px !important'}}
    >
    <form onSubmit={formik.handleSubmit}>
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
         <h3 style={{textAlign:"center",color:"#3e3459"}}>Reset Password</h3>
      </BootstrapDialogTitle>
      <DialogContent style={{padding:"2rem"}}>
        <Typography gutterBottom style={{textAlign:"center"}}>
        Enter your email address and we will send you a code  to verify that this account belongs to you
        </Typography>
        <Box className={style.forget_email_container}>
            <p style={{ display: "flex" }}>Enter Your Email</p>            
            <input className={style.email_input} type="email" placeholder="Email"  name="email"
                          autoComplete='off' 
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur} />
                           {formik.errors.email && formik.touched.email ? (
                      <p className={style.errorp}>{formik.errors.email}</p>
                    ) : null}
          </Box>
          <div className={style.button_container}>
      <Button variant="contained" className={style.center_button} disabled={!formik.isValid} type="submit">
        Proceed
      </Button>
    </div>
      </DialogContent>
      </form>
    </BootstrapDialog>

    <BootstrapDialog
      onClose={AccounthandleClose}
      aria-labelledby="customized-dialog-title"
      open={Accountopen}
      style={{ borderRadius:'0px !important'}}
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={AccounthandleClose}>
         <h3 style={{textAlign:"center",color:"#3e3459"}}>Account Verification</h3>
      </BootstrapDialogTitle>
      <DialogContent style={{padding:"2rem"}}>
        <Typography gutterBottom style={{textAlign:"center"}}>
        Please enter the Verification code which sent to your <br />
            Email-address <span style={{color:"#3e3459"}}> (example@demo.com)</span>
        </Typography>
        <Box className={style.forget_email_container}>
            <p style={{ display: "flex" }}>Enter Verification Code</p>            
            <input className={style.email_input} type="text"  placeholder="######"  name="code"
                          autoComplete='off'/>
          </Box>
          <div className={style.button_container}>
      <Button variant="contained" onClick={ResethandleOpen} className={style.center_button}>
        Next
      </Button>
    </div>
      </DialogContent>
    </BootstrapDialog>

    <BootstrapDialog
      onClose={ResethandleClose}
      aria-labelledby="customized-dialog-title"
      open={Resetopen}
      style={{ borderRadius:'0px !important'}}
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={ResethandleClose}>
         <h3 style={{textAlign:"center",color:"#3e3459"}}>Reset Password</h3>
      </BootstrapDialogTitle>
      <DialogContent style={{padding:"3rem"}}>
        <Box className={style.forget_email_container} style={{margin:"10px 10px"}}>
            <p style={{ display: "flex" }}>Enter New Password</p>            
            <input className={style.email_input} type="password"  placeholder="Enter New Password"  name="pass"
                          autoComplete='off'/>
          </Box>
          <Box className={style.forget_email_container} style={{margin:"20px 10px"}}>
            <p style={{ display: "flex" }}>Re-enter New Password</p>            
            <input className={style.email_input} type="text"  placeholder="Re-enter New Password"  name="code"
                          autoComplete='off'/>
          </Box>
          <div className={style.button_container}>
      <Button variant="contained" onClick={ResethandleClose} className={style.resetcenter_button} style={{width:"50%"}} disabled={!formik.isValid} type="submit">
        Change Password
      </Button>
    </div>
      </DialogContent>
    </BootstrapDialog>
  </div>
  );
};
