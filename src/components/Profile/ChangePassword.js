import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import style from "./ProfileStyle.module.css";
import CloseIcon from "@mui/icons-material/Close";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import axios from "axios";
import { ChangePasswordSchema } from "../Schemas";

const initialValues = {
  old_password: "",
  new_password: "",
  confirm_new_password: ""
}

export default function ChangePassword() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [error, setError] = React.useState();
  const [success, setSuccess] = React.useState(null);

  const onSubmit = async (values) => {
    const {old_password,new_password,confirm_new_password}=values
    try {
      const token =localStorage.getItem('token')
      const response = await axios.post("https://admin.faibnetwork.co.uk/api/user/change/password", {old_password,new_password,confirm_new_password},{
        headers:{
          Authorization:"Bearer " + token
        }
      });
      console.log("response", response.data);
      if (response.data.status === "Success") {
        setSuccess(response.data.message);
        setError(null);
        setOpen(false);
        formik.resetForm();
      } else {
        setError(response.data.message);
        setSuccess(null);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues,
    validateOnBlur: true,
    onSubmit,
    validationSchema: ChangePasswordSchema
  });

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        className={style.change_password}
        sx={{ textTransform: "capitalize" }}
      >
        Change Password
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <form onSubmit={formik.handleSubmit}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingRight: "30px",
            }}
          >
            <DialogTitle style={{ fontWeight: "600", color: "#3e3459" }} id="responsive-dialog-title">
              Change Password
            </DialogTitle>
            <CloseIcon onClick={handleClose} sx={{ cursor: "pointer" }} />
          </Box>
          {!success && <p className="text-center" style={{color:"red",fontSize:"1rem"}}>{error ? error : ""}</p>}
          {!error && <p style={{color:"green",fontSize:"1rem"}}>{success ? success : ""}</p>} 

          <DialogContent>
            <FormControl sx={{ width: "100%", marginBottom: "10px" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Enter old password*
              </InputLabel>
              <OutlinedInput
                sx={{ height: "52px" }}
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                name="old_password"
                autoComplete='off'
                value={formik.values.old_password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              /> 
              {formik.errors.old_password && formik.touched.old_password ? (
                <p className={style.errorp}>{formik.errors.old_password}</p>
              ) : null}
            </FormControl>

            {/*  */}
            <FormControl sx={{ width: "100%", marginBottom: "10px" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Enter new password*
              </InputLabel>
              <OutlinedInput
                sx={{ height: "52px" }}
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                name="new_password"
                autoComplete='off'
                value={formik.values.new_password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
                {formik.errors.new_password && formik.touched.new_password ? (
                <p className={style.errorp}>{formik.errors.new_password}</p>
              ) : null}
            </FormControl>
            {/*  */}
            <FormControl sx={{ width: "100%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Enter new password*
              </InputLabel>
              <OutlinedInput
                sx={{ height: "52px" }}
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                name="confirm_new_password"
                autoComplete='off'
                value={formik.values.confirm_new_password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
                {formik.errors.confirm_new_password && formik.touched.confirm_new_password ? (
                <p className={style.errorp}>{formik.errors.confirm_new_password}</p>
              ) : null}
            </FormControl>
            {/*  */}
          </DialogContent>
          <DialogActions sx={{ justifyContent: "center" }}>
            <button
              autoFocus
              type="submit"
              className={style.update_password} disabled={!formik.isValid}>
              Update Password
            </button>
            <br />
          </DialogActions>
          <br />
        </form>
      </Dialog>
    </div>
  );
}
