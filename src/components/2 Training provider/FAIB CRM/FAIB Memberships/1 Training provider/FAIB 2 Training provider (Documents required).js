import React,{useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from "../2 Trainer Assessor/trainerAssessor.module.css";
import OptionPayModel from "../../../../Trainer/OptionPayModel";

export const ContactFormDocumentsRequired2 = () => {
  const [files,setFiles] = useState([]);
  const [enabled, setEnabled] = useState(false);
  const [msg,setMsg]=useState(null);
  const plan_id=1;
  console.log('files',files);
 
  function onFileUpload(event, fileId) {
    event.preventDefault();
    // Get the file Id
    let id = fileId;
    console.log(id);
  const file = event.target.files[0];

  // Create an instance of FileReader API
  const fileReader = new FileReader();

  fileReader.onload = () => {
    // After uploading the file
    // Create a new File object from the data URL
    const convertedFile = new File([fileReader.result], file.name, { type: file.type });
    if (file instanceof File) {
      setFiles((prevFiles) => [...prevFiles, { file, field_id: id, document_id: id }]);
    } else {
      console.error('Invalid file selected');
    }
    // Append the converted file to the state array
    //setFiles([...files, { file: convertedFile, field_id: id, document_id: id }]);
  };

  // Reading the actual uploaded file as a data URL
  fileReader.readAsDataURL(file);
  
}

    // handle submit button for form file_reader.result
    const handleSubmit=async(e)=>{
      e.preventDefault();
      try{
        const userid=localStorage.getItem('UserID');
        const user_id=parseInt(userid)
        console.log('user_id',user_id);
        // Create a new FormData instance
        const formData = new FormData();
       // Append each file to the FormData object
        files.forEach((fileObj, index) => {
          formData.append("membership_document[]", fileObj.file);
          formData.append("field_id", fileObj.field_id);
          formData.append("user_id", user_id);
          formData.append("plan_id", plan_id);
          formData.append("document_id", fileObj.document_id);
          console.log("fileObj", fileObj);
          const membership_document=fileObj.file
          console.log("membership_document",membership_document);
        });
        console.log("formData before Axios request:", formData);
        axios.interceptors.response.use(
          (response) => {
            // Log the response
            console.log('Axios Response:', response);
            return response;
          },
          (error) => {
            // Log any errors
            console.error('Axios Error:', error);
            return Promise.reject(error);
          }
        );
         const response=await axios.post("https://admin.faibnetwork.co.uk/api/user/membership_documents_upload",formData,{
          headers: {
            'Content-Type': 'multipart/form-data',
            // Include any required headers
          },
          withCredentials: true, // Enable CORS credentials (cookies, headers)
        });
        if(response.data.status==="success"){
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
        }
      }catch(err){
        console.log(err.response.data.message);
        setMsg(err.response.data.message);
      }
    }
 

  useEffect(() => {
    if (files.length === 0) {
      setEnabled(false);
    } else {
      setEnabled(true);
    }
  }, [files]);
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
            Training Provider
          </Typography>
          {msg && <p style={{color:"red",textAlign:"center"}}>{msg?msg:""}</p>}

          <Box sx={{ marginTop: "30px" }}>
            <p style={{ display: "flex", fontWeight: "600" }}>
              Trainer Name (Name of Lead Trainer)
            </p>
            <br />
            <input
              className={style.form_input_full_width}
              type="text"
              placeholder="Name"/>
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
                onChange={(e) => onFileUpload(e, 1)}
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
                onChange={(e) => onFileUpload(e, 2)}
                required
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
              <a className={style.contact_form_link} target="_blank" href="https://faib.co.uk/wp-content/uploads/2023/08/NUMBER-OF-BLS-FIRST-AID-COURSE-PER-YEAR-FAIB-MASTER.docx">
              https://faib.co.uk/wp-content/uploads/2023/08/NUMBER-OF-BLS-FIRST-AID-COURSE-PER-YEAR-FAIB-MASTER.docx
              </a>
            </p>
            <input
                type="file"
                id={3}
                placeholder="Upload file"
                 className={style.uploadbtn}
                onChange={(e) => onFileUpload(e, 3)}
                required
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
                onChange={(e) => onFileUpload(e, 4)}
                required
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
                onChange={(e) => onFileUpload(e, 5)}
                required
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
                onChange={(e) => onFileUpload(e, 6)}
                required
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
                onChange={(e) => onFileUpload(e, 7)}
                required
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
                onChange={(e) => onFileUpload(e, 8)}
                required
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
                onChange={(e) => onFileUpload(e, 9)}
                required
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
                onChange={(e) => onFileUpload(e, 10)}
                required
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
                onChange={(e) => onFileUpload(e, 11)}
                required
              />
          </Box>
          <Box sx={{ marginTop: "30px" }}>
          {enabled ? (
            <OptionPayModel/>
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
