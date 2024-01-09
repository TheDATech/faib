import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import logo from "../../../assets/FAIB LOGO.png";
import Menu from "@mui/material/Menu";
import {FormControl,FormControlLabel,Grid,TextField,InputLabel,Select,Checkbox} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { BiCaretDown } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { useFormik } from "formik";
import axios from "axios";
import { SignupSchema } from "../../Schemas";
import { Link, useNavigate } from "react-router-dom";
import style from "./signupstyle.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  cemail: "",
  contact_no: "",
  pass: "",
  cpass: "",
  hereby: "",
  interedted_in: "",
  like_more_information: "",
}

export const SignupPage = () => {
  let navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [newsletter, setNewsletter] = useState("off");
  const [like_more_information, setLike_more_information] = useState(" ");

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onSubmit = async (values) => {
    console.log("K");
    values.like_more_information = like_more_information;
    values.newsletter = newsletter;
    console.log('values',values);
    const { ...data } = values;
    try {
      const response = await axios.post("https://admin.faibnetwork.co.uk/api/user/adduser", data,{
        headers: {
          'Content-Type': 'application/json'
          // Include any required headers
        },
        withCredentials: true, // Enable CORS credentials (cookies, headers)
      });
      if (response.status === 200) {
        console.log("response", response.data.message);
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
        localStorage.setItem("token", response.data.access_token);
        navigate('/')
        formik.resetForm();
      } else {
        toast.error(response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    } catch (err) {
      if(err.response.status===422){
        toast.error(err.response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
      console.log(err);
    }
  };


  const change_newsletter = ()=>{
    if (newsletter === 'on') {
      setNewsletter('off');
    }
    else { 
      setNewsletter('on');
    }
  };

  const change_Information=()=>{
    if (like_more_information === 'More More Information') {
      setLike_more_information("")    
    }
    else{
      setLike_more_information('More More Information')
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema: SignupSchema,
    validateOnBlur: true,
    onSubmit,
  });

  return (
    <div>
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
              id="menu-appbar"
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
      <Box sx={{ flexGrow: 1 }} className={style.sign_up_box}>
            <form onSubmit={formik.handleSubmit}>
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
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography component="h1" variant="h5" align="center" style={{fontSize:"2rem",color:"#3e3459",fontWeight:"600"}}>
              Sign up
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              name="first_name"
                autoComplete="off"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              name="last_name"
                        autoComplete="off"
                        value={formik.values.last_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email Address"
              name="email"
                        autoComplete="off"
                        value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Confirm Email Address"
              name="cemail"
              autoComplete="off"
              value={formik.values.cemail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}/>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Contact Number"
              name="contact_no"
              autoComplete="off"
              value={formik.values.contact_no}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}/>
                </Grid>
                <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Where did you hear about FAIB?</InputLabel>
              <Select name="hereby" value={formik.values.hereby} onChange={formik.handleChange}
                onBlur={formik.handleBlur} label="Where did you hear about FAIB?">
                <MenuItem value="Search Engine">Search Engine</MenuItem>
                <MenuItem value="LinkedIn">LinkedIn</MenuItem>
                <MenuItem value="Facebook">Facebook</MenuItem>
                <MenuItem value="Instagram">Instagram</MenuItem>
                <MenuItem value="X">X</MenuItem>
                <MenuItem value="Word of Mouth">Word of Mouth</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
                    </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              name="pass"
              type="password"
                        autoComplete="off"
                        value={formik.values.pass}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Confirm Password"
              name="cpass"
              type="password"
                        autoComplete="off"
                        value={formik.values.cpass}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                    />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Which membership are you interested in?</InputLabel>
              <Select name="interedted_in" value={formik.values.interedted_in} onChange={formik.handleChange}
                onBlur={formik.handleBlur} label="Which membership are you interested in?">
                <MenuItem value="First Aid Training Provider">First Aid Training Provider</MenuItem>
                <MenuItem value="First Aid Trainer/Assessor">First Aid Trainer/Assessor</MenuItem>
                <MenuItem value="Mental Health Training Provider">Mental Health Training Provider</MenuItem>
                <MenuItem value="Mental Health Trainer/Assessor">Mental Health Trainer/Assessor</MenuItem>
                <MenuItem value="In Safe Hands Award (Childcare Facilities)">In Safe Hands Award (Childcare Facilities)</MenuItem>
              </Select>
            </FormControl>    
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" sx={{ fontWeight: 500,color:"#3e3459" }}>
            I would also like to know more about:
            </Typography>
              <FormControlLabel              
              control={<Checkbox onChange={change_Information}/>}
              label="FAIB First Aid Memberships"/>
                    <br/>
            <FormControlLabel
              control={<Checkbox onChange={change_Information}/>}
              label="FAIB Mental Health Memberships"/>
                     <br/>
            <FormControlLabel
              control={<Checkbox onChange={change_Information}/>}
              label="The In Safe Hands Award"/>
          </Grid>
          <Grid item xs={12}>
            <hr />
          </Grid>
          <Grid item xs={12}>
                        <FormControlLabel
                            name="newsletter"
                        
              control={<Checkbox  onChange={change_newsletter}/>}
              label="I would like to receive relevant information, newsletters and offers from FAIB via email"
                        />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox />}
              label={
                <>
                  I agree with FAIB{' '}
                  <a
                    href="www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none',color:"#3e3459" }}
                  >
                    terms & conditions
                  </a>
                </>
              }
            />
          </Grid>
          <Grid item xs={12}>
          {formik.errors.first_name && formik.touched.first_name ? (
                <p className={style.errorp}>{formik.errors.first_name}</p>
              ) : null}
                  {formik.errors.last_name && formik.touched.last_name ? (
                <p className={style.errorp}>{formik.errors.last_name}</p>
              ) : null}
                  {formik.errors.email && formik.touched.email ? (
                <p className={style.errorp}>{formik.errors.email}</p>
              ) : null}
              {formik.errors.cemail && formik.touched.cemail ? (
                <p className={style.errorp}>{formik.errors.cemail}</p>
              ) : null}
              {formik.errors.contact_no && formik.touched.contact_no ? (
                <p className={style.errorp}>{formik.errors.contact_no}</p>        
              ) : null}
                 {formik.errors.hereby && formik.touched.hereby ? (
                <p className={style.errorp}>{formik.errors.hereby}</p>
              ) : null}
                  {formik.errors.pass && formik.touched.pass ? (
                <p className={style.errorp}>{formik.errors.pass}</p>
              ) : null}
                 {formik.errors.cpass && formik.touched.cpass ? (
                <p className={style.errorp}>{formik.errors.cpass}</p>
              ) : null}
                 {formik.errors.interedted_in && formik.touched.interedted_in ? (
                <p className={style.errorp}>{formik.errors.interedted_in}</p>
              ) : null} 
          <div className={style.button_container}>
      <Button variant="contained" className={style.center_button} disabled={!formik.isValid} type="submit">
        Sign up
      </Button>
    </div>

          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" align="center">
              Already have an account?{' '}
              <Link to="/" style={{ color: '#3c3458', textDecoration: 'none' }}>
                Sign in
              </Link>
            </Typography>
          </Grid>
                </Grid>
                </form>
      </Box>
    </div>
  );
};
