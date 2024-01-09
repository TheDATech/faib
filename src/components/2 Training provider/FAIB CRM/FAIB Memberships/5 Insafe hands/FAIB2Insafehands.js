import React,{useEffect, useState} from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from "../2 Trainer Assessor/trainerAssessor.module.css"
import OptionPayModel from '../../../../Trainer/OptionPayModel';

export const FAIB2Insafehands = () => {
  const [files,setFiles] = useState([]);
  const [enabled, setEnabled] = useState(false);
  const [msg,setMsg]=useState(null);
  const plan_id=5;


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
  };

  // Reading the actual uploaded file as a data URL
  fileReader.readAsDataURL(file);
  
}

    // handle submit button for form file_reader.result
    const handleSubmit=async(e)=>{
      e.preventDefault();
      console.log("files 37",files);
      try{
        const userid=localStorage.getItem('UserID');
        const user_id=parseInt(userid)
        // Create a new FormData instance
        const formData = new FormData();
    
       // Append each file to the FormData object
        files.forEach((fileObj, index) => {
          console.log("fileObj.documentId",fileObj.documentId)
          formData.append("membership_document[]", fileObj.file);
          formData.append("field_id", fileObj.field_id);
          formData.append("user_id", user_id);
          formData.append("plan_id", plan_id);
          formData.append("document_id", fileObj.document_id);
        });
         const response=await axios.post("https://admin.faibnetwork.co.uk/api/user/membership_documents_upload",formData,{
          headers: {
            'Content-Type': 'multipart/form-data',
            // Include any required headers
          },
          withCredentials: true, // Enable CORS credentials (cookies, headers)
        });
        console.log("res",response.data.status);
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
        The “In Safe Hands Award”
        </Typography>

        {msg && <p style={{color:"red",textAlign:"center"}}>{msg?msg:""}</p>}

        <Box sx={{ marginTop: "30px" }}>
          <p style={{ display: "flex", fontWeight: "600" }}>
          Health & Safety Risk Assessment
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
          First Aid Risk Assessment
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
          First Aid Procedure Guide
          </p>
          <br/>
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
          List of Current Paediatric First Aiders
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
  )
}