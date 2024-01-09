import React,{useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from "./trainerAssessor.module.css";

export const TrainerAssessorDocumentsRequired1 = () => {

    const [files,setFiles] = useState({
        file1: null,
        file2: null,
        file3: null,
        file4: null,
        file5: null
      });
      const [enabled, setEnabled] = useState(false);
      console.log("files",files);
    
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
        if (files.file1 || files.file2 || files.file3 || files.file4 || files.file5) {
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
            Trainer/Assessor
          </Typography>
          <Box sx={{ marginTop: "30px" }}>
            <p style={{ display: "flex", fontWeight: "600" }}>
              Current First Aid at Work Certificate or Equivalent (e.g FPOS)
            </p>
            <input
                type="file"
                id={1}
                placeholder="Upload file"
                className={style.uploadbtn}
                onChange={(e) => handleFileChange(e, "file1")}/>
          </Box>
          <Box sx={{ marginTop: "30px" }}>
            <p style={{ display: "flex", fontWeight: "600" }}>
              Teaching/Assessing Qualification
            </p>
            <input
                type="file"
                id={2}
                placeholder="Upload file"
                className={style.uploadbtn}
                onChange={(e) => handleFileChange(e, "file2")}/>
          </Box>
          {/*  */}
          <Box sx={{ marginTop: "30px" }}>
            <p style={{ fontWeight: "600" }}>
              List of First Aid courses taught each year over the past 3 years
              <br />
              (FAW, EFAW, PFA & EPFA)
              <p style={{ fontSize: "12px" }}>
                Download template here
              </p>
              <a className={style.contact_form_link} href="https://faib.co.uk/wp-content/uploads/2023/08/NUMBER-OF-BLS-FIRST-AID-COURSE-PER-YEAR-FAIB-MASTER.docx">
              https://faib.co.uk/wp-content/uploads/2023/08/NUMBER-OF-BLS-FIRST-AID-COURSE-PER-YEAR-FAIB-MASTER.docx
              </a>
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
            <p style={{ display: "flex", fontWeight: "600" }}>
              Annual Monitoring
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
            <p style={{ display: "flex", fontWeight: "600" }}>
              Insurance Certificate (covering Professional Indemnity and Public
              Liability)
            </p>
            <input
                type="file"
                id={5}
                placeholder="Upload file"
                className={style.uploadbtn}
                onChange={(e) => handleFileChange(e, "file5")}
               />
          </Box>

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
