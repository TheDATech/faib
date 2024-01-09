import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import logo from "../../../assets/FAIB LOGO.png";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { BiCaretDown } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import image from "../../../assets/FAIBLogin.jpeg";
import { Input } from "@mui/material";
import { ForgetPasswordPopup } from "./FAIB 1-2 Sign in Forget password popup-1";
import style from "./signupstyle.module.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SigninSchema } from "../../Schemas";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const initialValues={
  email:"",
  pass:"",
  }

export default function SigInPage() {
  const [error, setError] = useState();
  const [success,setSuccess]=useState(null);
  const navigate = useNavigate();

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onSubmit = async (values) => {
    try{
      const response = await axios.post('https://admin.faibnetwork.co.uk/api/user/loginuser', values, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true, // Enable CORS credentials (cookies, headers)
      });
      console.log("response", response);
      if (response.data.status === "success") {
          setSuccess(response.data.message);
          toast.success(response.data.message,{
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          navigate('/dashboard');
          localStorage.setItem('token',response.data.token)
          localStorage.setItem("UserID",response.data.user_id)
          setError(null);
          formik.resetForm();
      }
      else{
        setError(response.data.message);
        setSuccess(null);
      }
    }catch (err) {
      if(err.response.data.status==="Failed"){
        setError(err.response.data.message);
        setSuccess(null);
      }
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues,
    validateOnBlur: true,
    onSubmit,
    validationSchema:SigninSchema
  });

  

  return (
    <Box sx={{ flexGrow: 1 }}>
         <ToastContainer position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"/>
      <AppBar position="static" className={style.appContainer}>
        <Toolbar>
        <Box sx={{ maxWidth: "100%" }}>
          <img src={logo} alt="Company Logo" className={style.CompanyLogoImg} />
        </Box>
          <Typography
          variant="h6"
          component="div"
          className={style.welcome_note}
          sx={{
            flexGrow: 1,
            textAlign: "center",
            color: "#000 !important",
            fontWeight: "600"
          }}
        >
          Welcome to the FAIB Network
        </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <FaUserCircle className={style.user_svg} />
                <BiCaretDown className="down-angle" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              className={style.menu_appbar}
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
             <MenuItem onClick={handleCloseUserMenu}>
                  <Link to="/signuppage" className={style.linkmenu}><Typography textAlign="center">Sign up</Typography></Link>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                  <Link to="/" className={style.linkmenu}><Typography textAlign="center">Sign in</Typography></Link>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    <div className="signinbgimagediv mt-4">
     <div className="skewnow">
     <Box sx={{ width: "100%", position: "relative" }}>
      <Box className={style.sign_in_box}>
        <form onSubmit={formik.handleSubmit}>
          <Typography component="p" className={style.para_signin}>
          If you have previously registered with the  <span><strong>FAIB Network</strong></span>
            <br />
            Please enter your <span>Email</span> address and <span>Password</span> to
            continue.
            <br /> <br /> If you would like to join FAIB please <Link to="/signuppage" style={{fontSize:"1rem",color: '#3c3458',fontWeight:'800',textDecoration:"none"}}>Sign Up</Link> below.
          </Typography>
          <Typography component="h1" variant="h3" style={{fontSize:"2rem",color:"#3e3459",fontWeight:"600"}}>
            Sign in
          </Typography>
          {!success && <p style={{color:"red",fontSize:"1rem",textAlign:"center"}}>{error ? error : ""}</p>}
          {!error && <p style={{color:"green",fontSize:"1rem",textAlign:"center"}}>{success ? success : ""}</p>} 
          <Box
            className="form-box"
            component="form"
            noValidate
          >
            <Input name="email"
                          autoComplete='off' 
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                           placeholder="Enter you email*" className={style.input_field} />
                            {formik.errors.email && formik.touched.email ? (
                      <p style={{color:"red",textAlign:"left",marginLeft:"16px"}}>{formik.errors.email}</p>
                    ) : null}
            <Box>
              <Input
                type="password"
                placeholder="Enter you password*"
                className={style.input_field}
                name="pass"
                          autoComplete='off' 
                          value={formik.values.pass}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
              />
               {formik.errors.pass && formik.touched.pass ? (
                      <p style={{color:"red",textAlign:"left",marginLeft:"16px"}}>{formik.errors.pass}</p>
                    ) : null}
             <ForgetPasswordPopup/>
            </Box>
          </Box>
          <Box>
            {/* <a href="/dashboard" style={{ textDecoration: "none" }}><Button className="sign-in-btn">Sign in</Button></a> */}
            <div className={style.button_container}>
      <Button variant="contained" className={style.center_button} disabled={!formik.isValid} type="submit">
        Sign in
      </Button>
    </div>

            <Typography component="p" className="not-account">
              Don't have an account? <Link to="/signuppage" style={{ textDecoration: "none", color: "#3c3458" }}>Sign up</Link>
            </Typography>
          </Box>
          </form>
        </Box>
    </Box>
     </div>
     <div className="skewnow mt-2">
      <img src={image} alt="safty" className="skewnowimage"/>
     </div>
    </div>
    </Box>
  );
}
