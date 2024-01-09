import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Input } from "@mui/material";
import { CloseOutlined, Label } from "@mui/icons-material";
import { MdOutlineClose } from "react-icons/md";
import ForgetNewPassword from "./FAIB 1-4 Sign in Forget password popup-1";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function PasswordVerificationPopup() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button className="proceed-btn" onClick={handleOpen}>
        Proceed
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="forget-popup-box"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h1">
            Verification Account
          </Typography>

          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            component="p"
            className="note"
          >
            Please enter the Verification code which sent to your <br />
            Email-address <span> (example@demo.com)</span>
          </Typography>
          <Box sx={{ display: "block", width: "420px", margin: "0 auto" }}>
            <p style={{ display: "flex" }}>Enter Verification Code</p>            
            <input
              className=" password-input"
              type="email"
              placeholder="######"
            />
          </Box>
          <Box sx={{ marginTop: "50px" }}>
            <ForgetNewPassword />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
