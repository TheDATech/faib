import React,{useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from "../2 Trainer Assessor/trainerAssessor.module.css"

export  const MentalHealthTrainerAssessorDocumentsRequired1 = () => {
    const [files,setFiles] = useState({
        file1: null,
        file2: null,
        file3: null,
        file4: null,
        file5: null,
        file6: null
      });
      const [enabled, setEnabled] = useState(false);
      
    
       // handle submit button for form file_reader.result
       const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
          const userid=localStorage.getItem('UserID');
          const user_id=parseInt(userid)
    
          // Create a new FormData instance
          const formData = new FormData();
          formData.append("membership_document", files.file1);
          formData.append("membership_document", files.file2);
          formData.append("membership_document", files.file3);
          formData.append("membership_document", files.file4);
          formData.append("membership_document", files.file5);
          formData.append("membership_document", files.file6);

           const response=await axios.post(`https://admin.faibnetwork.co.uk/api/user/upload-rejected-document/${user_id}`,formData,{
            headers: {
              'Content-Type': 'application/json',
              // Include any required headers
            },
            withCredentials: true, // Enable CORS credentials (cookies, headers)
          });
          console.log("response",response.data.success)
           if(response.data.success==="Document Uploaded"){
            toast.success(response.data.success, {
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
        }catch(err){
          console.log(err.response.data.message);
        }
      }
    
    
      useEffect(() => {
        if (files.file1 || files.file2 || files.file3 || files.file4 || files.file5 || files.file6) {
          setEnabled(true);
        } else {
          setEnabled(false);
        }
      }, [files]);
    
      const handleFileChange = (e, fileNumber) => {
        const selectedFile = e.target.files[0];
        setFiles((prevState) => ({
          ...prevState,
          [fileNumber]: selectedFile
        }));
      }
  return (
    <div>
     <ToastContainer />
      <Box className={style.contact_form_box}>
        <Typography className={style.form_heading}>
          Documents Required for FAIB Membership
        </Typography>
        <form onSubmit={handleSubmit}>
        <Box className={style.contact_form}>
          <Typography component="h1" variant="h5">
          Mental Health Trainer/Assessor
          </Typography>

          <Box sx={{ marginTop: "30px" }}>
            <p style={{ display: "flex", fontWeight: "600" }}>
              Mental Health Train the Trainer Certificate issued by FAIB
            </p>
          <input
                type="file"
                id={1}
                placeholder="Upload file"
                className={style.uploadbtn}
                onChange={(e) => handleFileChange(e, "file1")}
              />
          </Box>
          <Box sx={{ marginTop: "30px" }}>
            <p style={{ display: "flex", fontWeight: "600" }}>
              Current Mental Health Trainer certificate
            </p>
          <input
                type="file"
                id={2}
               className={style.uploadbtn}
               onChange={(e) => handleFileChange(e, "file2")}
              />
          </Box>
          <Box sx={{ marginTop: "30px" }}>
            <p style={{ display: "flex", fontWeight: "600" }}>
              Teaching/Assessing Qualification
            </p>
          <input
                type="file"
                id={3}
                placeholder="Upload file"
               className={style.uploadbtn}
               onChange={(e) => handleFileChange(e, "file3")}
              />
          </Box>
          {/*  */}
          <Box sx={{ marginTop: "30px" }}>
            <p style={{ fontWeight: "600" }}>
              List of Mental Health courses taught each year over the past 3
              years Should be a minimum of 3 courses.
            </p>
          <input
                type="file"
                id={4}
                placeholder="Upload file"
               className={style.uploadbtn}
               onChange={(e) => handleFileChange(e, "file4")}
              />
          </Box>
          {/*  */}
          <Box sx={{ marginTop: "30px" }}>
            <p style={{ display: "block", fontWeight: "600" }}>
              Annual Monitoring
              <br />
              <span
                style={{
                  fontSize: "12px",
                  color: "#B7B7B7",
                }}
              >
                (If a new trainer show evidence of up to 4 verifications of
                Mental Health Training)
              </span>
            </p>
          <input
                type="file"
                id={5}
                placeholder="Upload file"
               className={style.uploadbtn}
               onChange={(e) => handleFileChange(e, "file5")}
              />
          </Box>
          {/*  */}
          <Box sx={{ marginTop: "30px" }}>
            <p style={{ display: "flex", fontWeight: "600" }}>
              Insurance Certificate (Covering Professional Indemnity and Public
              Liability)
            </p>
          <input
                type="file"
                id={6}
                placeholder="Upload file"
               className={style.uploadbtn}
               onChange={(e) => handleFileChange(e, "file6")}
              />
          </Box>
          {/*  */}
          <Box sx={{ marginTop: "30px" }}>
          {enabled ? (
            <Button className={style.continue_btn} type="submit">Continue</Button> 
      ) : (
        <Button className={style.continue_btn} type="submit" disabled>Continue</Button> 
      )}
          
          </Box>  
        </Box>
        </form>
      </Box>
    </div>
  );
};
