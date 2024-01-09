import React,{useState,useEffect} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import style from "../2 Trainer Assessor/trainerAssessor.module.css";
import axios from "axios";
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactFormDocumentsRequired3 = () => {

  const [files,setFiles] = useState({
    file1: null,
    file2: null,
    file3: null,
    file4: null,
    file5: null,
    file6: null,
    file7: null,
    file8: null,
    file9: null,
    file10: null,
    file11: null
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
      formData.append("membership_document", files.file6);
      formData.append("membership_document", files.file7);
      formData.append("membership_document", files.file8);
      formData.append("membership_document", files.file9);
      formData.append("membership_document", files.file10);
      formData.append("membership_document", files.file11);
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
    if (files.file1 || files.file2 || files.file3 || files.file4 || files.file5 || files.file6 || files.file7 || files.file8 || files.file9 || files.file10 || files.file11) {
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
      <ToastContainer/>
      <Box className="contact-form-box">
        <Typography className="form-heading">
          Documents  for FAIB Membership
        </Typography>
        <form onSubmit={handleSubmit}>
        <Box className="sign-up-box contact-form">
          <Typography component="h1" variant="h5">
            Training Provider
          </Typography>

          <Box sx={{ marginTop: "30px" }}>
            <p style={{ display: "flex", fontWeight: "600" }}>
              Trainer Name (Name of Lead Trainer)
            </p>
            <br />
            <input
              className="form-input full-width"
              type="text"
              placeholder="Charlie Chaplin"
            />
          </Box>
          <Box sx={{ marginTop: "30px" }}>
            <p style={{ display: "flex", fontWeight: "600" }}>
              Current First Aid at Work Certificate or Equivalent (e.g FPOS)
            </p>
            <input
                type="file"
                id={1}
                placeholder="Upload file"
                className={style.uploadbtn}
                onChange={(e) => handleFileChange(e, "file1")}
                required
              />
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
                onChange={(e) => handleFileChange(e, "file2")}        
              />
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
              <a className={style.contact_form_link} href="https://faib.co.uk/wp-content/uploads/2023/08/NUMBER-OF-BLS-FIRST-AID-COURSE-PER-YEAR-FAIB-MASTER.docx" target="_blank">
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
          <Box>
            <Typography
              component="p"
              sx={{
                textAlign: "center",
                fontWeight: "600",
                paddingTop: "40px",
                paddingBottom: "5px",
              }}
            >
              Quality Assurance Documents
            </Typography>
            <Typography
              component="p"
              sx={{
                textAlign: "center",
                fontWeight: "600",
                fontSize: "14px",
                paddingBottom: "30px",
              }}
            >
              Please note FAIB have examples that you can use of all these
              documents on the FAIB
              <br /> Website here (https://faib.co.uk/)
            </Typography>
          </Box>
          {/*  */}
          <Box sx={{ marginTop: "30px" }}>
            <p style={{ display: "flex", fontWeight: "600" }}>
              End of Course Student Evaluation Form
            </p>
            <input
                type="file"
                id={6}
                placeholder="Upload file"
                className={style.uploadbtn}
                onChange={(e) => handleFileChange(e, "file6")}
                
              />
          </Box>
          <Box sx={{ marginTop: "30px" }}>
            <p style={{ display: "flex", fontWeight: "600" }}>
              Complaints Procedure
            </p>
            <input
                type="file"
                id={7}
                placeholder="Upload file"
                className={style.uploadbtn}
                onChange={(e) => handleFileChange(e, "file7")}
                
              />
          </Box>
          <Box sx={{ marginTop: "30px" }}>
            <p style={{ display: "flex", fontWeight: "600" }}>
              Procedure for maintenance of equipment
            </p>
            <input
                type="file"
                id={8}
                placeholder="Upload file"
                className={style.uploadbtn}
                onChange={(e) => handleFileChange(e, "file8")}
                
              />
          </Box>
          <Box sx={{ marginTop: "30px" }}>
            <p style={{ display: "flex", fontWeight: "600" }}>
              Specification for a training room
            </p>
            <input
                type="file"
                id={9}
                placeholder="Upload file"
                className={style.uploadbtn}
                onChange={(e) => handleFileChange(e, "file9")}
                
              />
          </Box>
          <Box sx={{ marginTop: "30px" }}>
            <p style={{ display: "flex", fontWeight: "600" }}>
              Annual monitoring of Trainer(s)/Assessor(s)
            </p>
            <input
                type="file"
                id={10}
                placeholder="Upload file"
                className={style.uploadbtn}
                onChange={(e) => handleFileChange(e, "file10")}
                
              />
          </Box>
          <Box sx={{ marginTop: "30px" }}>
            <p style={{ display: "flex", fontWeight: "600" }}>
              Responsible person for quality assurance
            </p>
            <input
                type="file"
                id={11}
                placeholder="Upload file"
                className={style.uploadbtn}
                onChange={(e) => handleFileChange(e, "file11")}
                
              />
          </Box>
          <Box sx={{ marginTop: "30px" }}>
          {enabled ? (
            <Button className="continue_btn" type="submit">Continue</Button>
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