import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React,{useState} from "react";
import userImage from "../../assets/profile picture.png";
import logoIcon from "../../assets/logoicon.png";
import editIcon from "../../assets/edit profile icon.png";
import style from "./ProfileStyle.module.css";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import { EditProfileSchema } from "../Schemas";

export const EditProfile = () => {
  const {Profile_list,ProfileLoading}=useAuthContext();
  const [files, setFiles] = useState({ file1: null});
  const [selectedImage, setSelectedImage] = useState(null);
  const [success,setSuccess]=useState();
   console.log('files',files);

  const initialValues={
    first_name:Profile_list.first_name,
    last_name:Profile_list.last_name,
    email:Profile_list.email,
    contact_no:Profile_list.contact_no,
    fake_membership:Profile_list.fake_membership,
    company_name:Profile_list.company_name,
    hereby:Profile_list.hereby,
    interedted_in:Profile_list.interedted_in,
    assign_lead_trainer:Profile_list.assign_lead_trainer,
    assign_lead_trainer_membership:Profile_list.assign_lead_trainer_membership,
    assign_lead_trainer_address:Profile_list.assign_lead_trainer_address,
    newsletter:Profile_list.newsletter,
    company_address_1:Profile_list.company_address_1,
    company_address_2:Profile_list.company_address_2,
    country:Profile_list.country,
    town:Profile_list.town
    }
  
  let navigate = useNavigate();

  const handleFileChange = (e, fileNumber) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = () => {
        setSelectedImage(reader.result); // Set the selected image as the preview source
      };

      reader.readAsDataURL(selectedFile); // Read the image as a data URL
    }
    setFiles((prevState) => ({
      ...prevState,
      [fileNumber]: selectedFile
    }));
  }

  const onSubmit = async (values) => {
    const token = localStorage.getItem('token');
  
    // Create a new FormData object
    const formData = new FormData();
  
     // Check if a photo was selected
     formData.append("photo", files.file1);
    // Append other form values to the FormData
    formData.append('first_name', values.first_name);
    formData.append('last_name', values.last_name);
    formData.append('email', values.email);
    formData.append('contact_no', values.contact_no);
    formData.append('fake_membership', values.fake_membership);
    formData.append('company_name', values.company_name);
    formData.append('hereby', values.hereby);
    formData.append('interedted_in', values.interedted_in);
    formData.append('assign_lead_trainer', values.assign_lead_trainer);
    formData.append('assign_lead_trainer_membership', values.assign_lead_trainer_membership);
    formData.append('assign_lead_trainer_address', values.assign_lead_trainer_address);
    formData.append('newsletter', values.newsletter);
    formData.append('company_address_1', values.company_address_1);
    formData.append('company_address_2', values.company_address_2);
    formData.append('country', values.country);
    formData.append('town', values.town);
    
    try {
      const res = await axios.post(
        'https://admin.faibnetwork.co.uk/api/user/update-profile',
        formData, // Use the FormData object as the request data
        {
          headers: {
            // Remove 'Content-Type' header to let Axios set it automatically
            Authorization: 'Bearer ' + token,
          },
        }
      );
      if (res.data.status === 'success') {
        setSuccess(res.data.message);
        setTimeout(() => navigate('/profile'), 3000);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues,
    validateOnBlur: true,
    onSubmit,
    validationSchema:EditProfileSchema
  });



  if(ProfileLoading){
    return(
      <div>Loading...</div>
    )
}

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "40px",
        }}
      >
        <Typography style={{ fontWeight: "bold", fontSize: "20px" }} component="p">Profile</Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Card
            sx={{
              width: "250px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <CardContent sx={{ position: "relative" }}>
              <img
                src={editIcon}
                alt="edit"
                width="30px"
                className={style.editImage}
              />
       <input
  type="file"
  name="photo"
  id="fileInput"
  className="profiledituserpix"
  onChange={(e) => handleFileChange(e, "file1")}
/>
{selectedImage && (
    <img
      src={selectedImage}
      alt=""
      width="130px"
      onClick={() => document.getElementById("fileInput").click()}
    />
  )}
  {/* If no selected image, show the default user image */}
  {!selectedImage && (
    <img
      src={userImage}
      alt=""
      width="130px"
      onClick={() => document.getElementById("fileInput").click()}
    />
  )}
              <Typography style={{ fontWeight: "600", marginTop: "8px" }} sx={{ mb: 1.5 }} color="text.secondary">
              {Profile_list?<span>{Profile_list.first_name} {Profile_list.last_name}</span>:""}
              </Typography>
              {Profile_list.fake_membership &&Profile_list.fake_membership?
              <Box>
                <Typography style={{ fontWeight: "500", marginLeft: "-35px", color: "gray", marginTop: "20px" }} variant="p">Active Memberships</Typography>
                <Typography
                  variant="p"
                  sx={{
                    marginTop: "10px",
                    display: "flex",
                    fontSize: "13px",
                  }}
                >
                  <img src={logoIcon} alt="" width="20px" />&nbsp; {Profile_list.fake_membership && Profile_list.fake_membership}
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    display: "flex",
                    fontSize: "13px",
                    marginTop: "10px"
                  }}
                >
                  <img src={logoIcon} alt="" width="20px" />&nbsp; FAIB Mental Health
                  Provider
                </Typography>
              </Box>:""}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={9}>
          <Card
          className={style.cardheight_profile}
            sx={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <CardContent
            >
             <form onSubmit={formik.handleSubmit}>
            {success && <p className="text-center" style={{ color: "green", fontSize: "1rem",marginTop:"10px"}}>{success ? success : ""}</p>}
              <Box className={style.profile_cardbox_input}>
                <Box>
                  <Typography>First Name</Typography>
                  <OutlinedInput
                    type="text"
                    name="first_name"
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={style.profile_cardbox_OutlinedInput}
                  />
                  {formik.errors.first_name && formik.touched.first_name ? (
                <p className="form-error">{formik.errors.first_name}</p>
              ) : null}
                </Box>
                <Box>
                  <Typography>Last Name</Typography>
                  <OutlinedInput
                    type="text"
                    name="last_name"
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={style.profile_cardbox_OutlinedInput}
                  />
                  {formik.errors.last_name && formik.touched.last_name ? (
                <p className="form-error">{formik.errors.last_name}</p>
              ) : null}
                </Box>
              </Box>
              <Box
               className={style.profile_cardbox_input}
                sx={{
                  marginTop: "30px",
                }}
              >
                <Box>
                  <Typography>Email</Typography>
                  <OutlinedInput
                    type="text"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={style.profile_cardbox_OutlinedInput}
                  />
                   {formik.errors.email && formik.touched.email ? (
                <p className="form-error">{formik.errors.email}</p>
              ) : null}
                </Box>
                <Box>
                  <Typography>Contact</Typography>
                  <OutlinedInput
                    type="text"
                    name="contact_no"
                    value={formik.values.contact_no}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={style.profile_cardbox_OutlinedInput}
                  />
                  {formik.errors.contact_no && formik.touched.contact_no ? (
                <p className="form-error">{formik.errors.contact_no}</p>        
              ) : null}
                </Box>
              </Box>
              <Box
               className={style.profile_cardbox_input}
                sx={{
                  marginTop: "30px",
                }}
              >
                <Box>
                  <Typography>Email</Typography>
                  <OutlinedInput
                    type="text"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={style.profile_cardbox_OutlinedInput}
                  />
                   {formik.errors.email && formik.touched.email ? (
                <p className="form-error">{formik.errors.email}</p>
              ) : null}
                </Box>
                <Box>
                  <Typography>Contact</Typography>
                  <OutlinedInput
                    type="text"
                    name="contact_no"
                    value={formik.values.contact_no}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={style.profile_cardbox_OutlinedInput}
                  />
                  {formik.errors.contact_no && formik.touched.contact_no ? (
                <p className="form-error">{formik.errors.contact_no}</p>        
              ) : null}
                </Box>
              </Box>
              <Box
               className={style.profile_cardbox_input}
                sx={{
                  marginTop: "30px",
                }}
              >
                <Box>
                  <Typography>Membership</Typography>
                  <OutlinedInput
                    type="text"
                    name="fake_membership"
                    value={formik.values.fake_membership}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={style.profile_cardbox_OutlinedInput}
                  />
                   {formik.errors.fake_membership && formik.touched.fake_membership ? (
                <p className="form-error">{formik.errors.fake_membership}</p>
              ) : null}
                </Box>
                <Box>
                  <Typography>Company Name</Typography>
                  <OutlinedInput
                    type="text"
                    name="company_name"
                    value={formik.values.company_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={style.profile_cardbox_OutlinedInput}
                  />
                  {formik.errors.company_name && formik.touched.company_name ? (
                <p className="form-error">{formik.errors.company_name}</p>        
              ) : null}
                </Box>
              </Box>
              <Box
               className={style.profile_cardbox_input}
                sx={{
                  marginTop: "30px",
                }}
              >
                <Box>
                  <Typography>Where did you hear about FAIB?</Typography>
                  <OutlinedInput
                    type="text"
                    name="hereby"
                    value={formik.values.hereby}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={style.profile_cardbox_OutlinedInput}
                  />
                   {formik.errors.hereby && formik.touched.hereby ? (
                <p className="form-error">{formik.errors.hereby}</p>
              ) : null}
                </Box>
                <Box>
                  <Typography>Which membership are you interested in?</Typography>
                  <OutlinedInput
                    type="text"
                    name="interedted_in"
                    value={formik.values.interedted_in}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={style.profile_cardbox_OutlinedInput}
                  />
                  {formik.errors.interedted_in && formik.touched.interedted_in ? (
                <p className="form-error">{formik.errors.interedted_in}</p>        
              ) : null}
                </Box>
              </Box>
              <Box
               className={style.profile_cardbox_input}
                sx={{
                  marginTop: "30px",
                }}
              >
                <Box>
                  <Typography>Lead Trainer</Typography>
                  <OutlinedInput
                    type="text"
                    name="assign_lead_trainer"
                    value={formik.values.assign_lead_trainer}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={style.profile_cardbox_OutlinedInput}
                  />
                   {formik.errors.assign_lead_trainer && formik.touched.assign_lead_trainer ? (
                <p className="form-error">{formik.errors.assign_lead_trainer}</p>
              ) : null}
                </Box>
                <Box>
                  <Typography>Lead Trainer Membership</Typography>
                  <OutlinedInput
                    type="text"
                    name="assign_lead_trainer_membership"
                    value={formik.values.assign_lead_trainer_membership}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={style.profile_cardbox_OutlinedInput}
                  />
                  {formik.errors.assign_lead_trainer_membership && formik.touched.assign_lead_trainer_membership ? (
                <p className="form-error">{formik.errors.assign_lead_trainer_membership}</p>        
              ) : null}
                </Box>
              </Box>
              <Box
               className={style.profile_cardbox_input}
                sx={{
                  marginTop: "30px",
                }}
              >
                <Box>
                  <Typography>Lead Trainer Address</Typography>
                  <OutlinedInput
                    type="text"
                    name="assign_lead_trainer_address"
                    value={formik.values.assign_lead_trainer_address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={style.profile_cardbox_OutlinedInput}
                  />
                   {formik.errors.assign_lead_trainer_address && formik.touched.assign_lead_trainer_address ? (
                <p className="form-error">{formik.errors.assign_lead_trainer_address}</p>
              ) : null}
                </Box>
                <Box>
                  <Typography>Newsletter</Typography>
                  <OutlinedInput
                    type="text"
                    name="newsletter"
                    value={formik.values.newsletter}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={style.profile_cardbox_OutlinedInput}
                  />
                  {formik.errors.newsletter && formik.touched.newsletter ? (
                <p className="form-error">{formik.errors.newsletter}</p>        
              ) : null}
                </Box>
              </Box>
              <Box
               className={style.profile_cardbox_input}
                sx={{
                  marginTop: "30px",
                }}
              >
                <Box>
                  <Typography>Company Address 1</Typography>
                  <OutlinedInput
                    type="text"
                    name="company_address_1"
                    value={formik.values.company_address_1}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={style.profile_cardbox_OutlinedInput}
                  />
                   {formik.errors.company_address_1 && formik.touched.company_address_1 ? (
                <p className="form-error">{formik.errors.company_address_1}</p>
              ) : null}
                </Box>
                <Box>
                  <Typography>Company Address 2</Typography>
                  <OutlinedInput
                    type="text"
                    name="company_address_2"
                    value={formik.values.company_address_2}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={style.profile_cardbox_OutlinedInput}
                  />
                  {formik.errors.company_address_2 && formik.touched.company_address_2 ? (
                <p className="form-error">{formik.errors.company_address_2}</p>        
              ) : null}
                </Box>
              </Box>
              <Box
               className={style.profile_cardbox_input}
                sx={{
                  marginTop: "30px",
                }}
              >
                <Box>
                  <Typography>Country</Typography>
                  <OutlinedInput
                    type="text"
                    name="country"
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={style.profile_cardbox_OutlinedInput}
                  />
                   {formik.errors.country && formik.touched.country ? (
                <p className="form-error">{formik.errors.country}</p>
              ) : null}
                </Box>
                <Box>
                  <Typography>Town</Typography>
                  <OutlinedInput
                    type="text"
                    name="town"
                    value={formik.values.town}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={style.profile_cardbox_OutlinedInput}
                  />
                  {formik.errors.town && formik.touched.town ? (
                <p className="form-error">{formik.errors.town}</p>        
              ) : null}
                </Box>
              </Box>
              <br />
              <div className={style.save_btn_contain}><Button disabled={!formik.isValid} type="submit" className={style.save_btn}>Save</Button></div>
            </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

/* function onFileUpload(event, fileId) {
    event.preventDefault();

    let id = fileId;
    console.log(id);
    const file = event.target.files[0];

    // Create an instance of FileReader API
    const fileReader = new FileReader();

    fileReader.onload = () => {
      // After uploading the file
      // Create a new File object from the data URL
      const convertedFile = new File(
        [fileReader.result],
        file.name,
        { type: file.type }
      );
      setSelectedImage({
        file: file,
        previewURL: fileReader.result,
      });
      // Append the converted file to the state array
      setFiles([...files, { file: convertedFile, field_id: id }]);
    };

    // Reading the actual uploaded file as a data URL
    fileReader.readAsDataURL(file);
  } */