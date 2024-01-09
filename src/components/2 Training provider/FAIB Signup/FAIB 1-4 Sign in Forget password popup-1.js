import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Input } from "@mui/material";
import { CloseOutlined, Label } from "@mui/icons-material";
import { MdOutlineClose } from "react-icons/md";

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

export default function ForgetNewPassword() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button className="proceed-btn" onClick={handleOpen}>
        Next
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
            Reset Password
          </Typography>

          <Box sx={{ display: "block", width: "420px", margin: "0 auto" }}>
            <p style={{ display: "flex" }}>Enter New Password</p>
            <input
              className=" email-input"
              type="password"
              placeholder="Enter New Password"
            />
          </Box>
          <Box
            className="new-password"
            sx={{ display: "block", width: "420px", margin: "0 auto" }}
          >
            <p style={{ display: "flex" }}>Re-enter New Password</p>
            <input
              className="email-input "
              type="password"
              placeholder="Re-enter New Password"
            />
          </Box>
          <Box sx={{ marginTop: "35px" }}>
            <a style={{ textDecoration: "none" }} href="/"><Button className="change-btn" onChange={handleClose}>
              Change Password
            </Button></a>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
