import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useNavigate} from  "react-router-dom";
import { useFormik } from "formik";
import { TrainerProviderSchema } from "../../../../Schemas";
import style from "../2 Trainer Assessor/trainerAssessor.module.css";
import { useAuthContext } from "../../../../../Context/AuthContext";


export const CompanyContactForm1 = () => {
  const {Profile_list,setUser}=useAuthContext();
  const value=localStorage.getItem('membershipeValue')
  const memberValue=parseInt(value)
  console.log("value",memberValue);
  let navigate = useNavigate();

  const initialValues = {
    first_name: Profile_list.first_name,
    last_name: Profile_list.last_name,
    email: Profile_list.email,
    company_name: "",
    company_address_1: "",
    company_address_2: "",
    town:Profile_list.city,
    post_code: "",
    country:Profile_list.country,
    contact_no: Profile_list.contact_no,
    second_contact_no:"",
    url: "",
    tax: "",
    country_two:""
  }
  const onSubmit = async (values) => {
    console.log('values',values)
    setUser(values)
    const value=localStorage.getItem('membershipeValue')
    if(value==="1"){
      navigate('/required-form');
      formik.resetForm();
    }
    else if(value==="2"){
      navigate('/trainer-accessor2');
      formik.resetForm();
    }
    else if(value==="3"){
      navigate('/mental-health-required');
      formik.resetForm();
    }
    else if(value==="4"){
      navigate('/Mentail-Heath-Trainer-Assessor-DocumentsRequired');
      formik.resetForm();
    }
    else if(value==="5"){
      navigate('/In-Safe-Hands-DocumentsRequired');
      formik.resetForm();
    }
    else{
      formik.resetForm();
    }
  }


  const formik = useFormik({
    initialValues,
    validationSchema: TrainerProviderSchema,
    validateOnBlur: true,
    onSubmit,
  });
  

  return (
    <div>
      <Box className={style.contact_form_box}>
        <Typography className={style.form_heading}>Company Contact Info</Typography>
        <form onSubmit={formik.handleSubmit}>
        <Box className={style.contact_form}>
          {memberValue===1?<Typography component="h1" variant="h5">
          First Aid Training Provider
          </Typography>:""}
          {memberValue===2?<Typography component="h1" variant="h5">
          First Aid Trainer/Assessor
          </Typography>:""}
          {memberValue===3?<Typography component="h1" variant="h5">
           Mental Health Training Provider
          </Typography>:""}
          {memberValue===4?<Typography component="h1" variant="h5">
          Mental Health Trainer/Assessor
          </Typography>:""}
          {memberValue===5?<Typography component="h1" variant="h5">
          The “In Safe Hands Award”
          </Typography>:""}
          <Box
            className="new-password"
            sx={{ display: "flex", justifyContent: "space-between",flexWrap:"wrap" }}
          >
            <Box>
              <p style={{ display: "flex", fontWeight: "600" }}>First Name</p>
              <br />
              <input className={style.form_input} type="text" autoComplete="off" name="first_name" value={formik.values.first_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
                {formik.errors.first_name && formik.touched.first_name ? (
                <p className={style.form_error}>{formik.errors.first_name}</p>
              ) : null}
            </Box>
            <Box>
              <p style={{ display: "flex", fontWeight: "600" }}>Last Name</p>
              <br />
              <input className={style.form_input} type="text" name="last_name" autoComplete='off' value={formik.values.last_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
                {formik.errors.last_name && formik.touched.last_name ? (
                <p className={style.form_error}>{formik.errors.last_name}</p>
              ) : null}
            </Box>
          </Box>
          <Box sx={{ marginTop: "30px" }}>
            <p style={{ display: "flex", fontWeight: "600" }}>Company Name</p>
            <br />
            <input className={style.form_input_full_width} type="text" autoComplete='off' name="company_name" value={formik.values.company_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
            {formik.errors.company_name && formik.touched.company_name ? (
                <p className={style.form_error}>{formik.errors.company_name}</p>
              ) : null}
          </Box>
          <Box sx={{ marginTop: "30px" }}>
            <p style={{ display: "flex", fontWeight: "600" }}>
              Company Address 1
            </p>
            <br />
            <input className={style.form_input_full_width} type="text" autoComplete='off' name="company_address_1" value={formik.values.company_address_1}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
                {formik.errors.company_address_1 && formik.touched.company_address_1 ? (
                <p className={style.form_error}>{formik.errors.company_address_1}</p>
              ) : null}
          </Box>
          <Box sx={{ marginTop: "30px" }}>
            <p style={{ display: "flex", fontWeight: "600" }}>
              Company Address 2 (Optional)
            </p>
            <br />
            <input className={style.form_input_full_width} type="text" autoComplete='off' name="company_address_2" value={formik.values.company_address_2}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} />
          </Box>
          <Box
            className="new-password"
            sx={{ display: "flex", justifyContent: "space-between",flexWrap:"wrap" }}
          >
            <Box>
              <p style={{ display: "flex", fontWeight: "600" }}>Town / City</p>
              <br />
              <input className={style.form_input} type="text" autoComplete="off" name="town" value={formik.values.town}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} />
                 {formik.errors.town && formik.touched.town ? (
                <p className={style.form_error}>{formik.errors.town}</p>
              ) : null}
            </Box>
            <Box>
              <p style={{ display: "flex", fontWeight: "600" }}>
                Company Postcode
              </p>
              <br />
              <input className={style.form_input} type="text" autoComplete="off" name="post_code" value={formik.values.post_code}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
                 {formik.errors.post_code && formik.touched.post_code ? (
                <p className={style.form_error}>{formik.errors.post_code}</p>
              ) : null}
            </Box>
          </Box>
          <Box
            className="new-password"
            sx={{ display: "flex", justifyContent: "space-between",flexWrap:"wrap" }}
          >
            <Box>
              <p style={{ display: "flex", fontWeight: "600" }}>Country</p>
              <br />
              <select
              style={{ marginTop: "-8px", marginBottom: "20px" }}
              className={style.form_input}
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option>Select</option>
              <option>Afghanistan</option>
              <option>Albania</option>
              <option>Algeria</option>
              <option>Andorra</option>
              <option>Angola</option>
              <option>Antigua and Barbuda</option>
              <option>Argentina</option>
              <option>Armenia</option>
              <option>Australia</option>
              <option>Austria</option>
              <option>Azerbaijan</option>
              <option>Bahamas</option>
              <option>Bahrain</option>
              <option>Bangladesh</option>
              <option>Barbados</option>
              <option>Belarus</option>
              <option>Belgium</option>
              <option>Belize</option>
              <option>Benin</option>
              <option>Bhutan</option>
              <option>Bolivia</option>
              <option>Bosnia and Herzegovina</option>
              <option>Botswana</option>
              <option>Brazil</option>
              <option>Brunei</option>
              <option>Bulgaria</option>
              <option>Burkina Faso</option>
              <option>Burundi</option>
              <option>Côte d'Ivoire</option>
              <option>Cabo Verde</option>
              <option>Cambodia</option>
              <option>Cameroon</option>
              <option>Canada</option>
              <option>Central African Republic</option>
              <option>Chad</option>
              <option>Chile</option>
              <option>China</option>
              <option>Colombia</option>
              <option>Comoros</option>
              <option>Congo (Congo-Brazzaville)</option>
              <option>Costa Rica</option>
              <option>Croatia</option>
              <option>Cuba</option>
              <option>Cyprus</option>
              <option>Czechia (Czech Republic)</option>
              <option>Democratic Republic of the Congo</option>
              <option>Denmark</option>
              <option>Djibouti</option>
              <option>Dominica</option>
              <option>Dominican Republic</option>
              <option>Ecuador</option>
              <option>Egypt</option>
              <option>El Salvador</option>
              <option>Equatorial Guinea</option>
              <option>Eritrea</option>
              <option>Estonia</option>
              <option>Eswatini (fmr. "Swaziland")</option>
              <option>Ethiopia</option>
              <option>Fiji</option>
              <option>Finland</option>
              <option>France</option>
              <option>Gabon</option>
              <option>Gambia</option>
              <option>Georgia</option>
              <option>Germany</option>
              <option>Ghana</option>
              <option>Greece</option>
              <option>Grenada</option>
              <option>Guatemala</option>
              <option>Guinea</option>
              <option>Guinea-Bissau</option>
              <option>Guyana</option>
              <option>Haiti</option>
              <option>Holy See</option>
              <option>Honduras</option>
              <option>Hungary</option>
              <option>Iceland</option>
              <option>India</option>
              <option>Indonesia</option>
              <option>Iran</option>
              <option>Iraq</option>
              <option>Ireland</option>
              <option>Israel</option>
              <option>Italy</option>
              <option>Jamaica</option>
              <option>Japan</option>
              <option>Jordan</option>
              <option>Kazakhstan</option>
              <option>Kenya</option>
              <option>Kiribati</option>
              <option>Kuwait</option>
              <option>Kyrgyzstan</option>
              <option>Laos</option>
              <option>Latvia</option>
              <option>Lebanon</option>
              <option>Lesotho</option>
              <option>Liberia</option>
              <option>Libya</option>
              <option>Liechtenstein</option>
              <option>Lithuania</option>
              <option>Luxembourg</option>
              <option>Madagascar</option>
              <option>Malawi</option>
              <option>Malaysia</option>
              <option>Maldives</option>
              <option>Mali</option>
              <option>Malta</option>
              <option>Marshall Islands</option>
              <option>Mauritania</option>
              <option>Mauritius</option>
              <option>Mexico</option>
              <option>Micronesia</option>
              <option>Moldova</option>
              <option>Monaco</option>
              <option>Mongolia</option>
              <option>Montenegro</option>
              <option>Morocco</option>
              <option>Mozambique</option>
              <option>Myanmar (formerly Burma)</option>
              <option>Namibia</option>
              <option>Nauru</option>
              <option>Nepal</option>
              <option>Kenya</option>
              <option>Netherlands</option>
              <option>New Zealand</option>
              <option>Nicaragua</option>
              <option>Niger</option>
              <option>Nigeria</option>
              <option>North Korea</option>
              <option>North Macedonia</option>
              <option>Norway</option>
              <option>Oman</option>
              <option>Pakistan</option>
              <option>Palau</option>
              <option>Palestine State</option>
              <option>Panama</option>
              <option>Papua New Guinea</option>
              <option>Paraguay</option>
              <option>Peru</option>
              <option>Philippines</option>
              <option>Poland</option>
              <option>Portugal</option>
              <option>Qatar</option>
              <option>Romania</option>
              <option>Russia</option>
              <option>Rwanda</option>
              <option>Saint Kitts and Nevis</option>
              <option>Saint Lucia</option>
              <option>Saint Vincent and the Grenadines</option>
              <option>Samoa</option>
              <option>San Marino</option>
              <option>Sao Tome and Principe</option>
              <option>Saudi Arabia</option>
              <option>Senegal</option>
              <option>Serbia</option>
              <option>Seychelles</option>
              <option>Sierra Leone</option>
              <option>Singapore</option>
              <option>Slovakia</option>
              <option>Solomon Islands</option>
              <option>Somalia</option>
              <option>South Africa</option>
              <option>South Korea</option>
              <option>South Sudan</option>
              <option>Spain</option>
              <option>Sri Lanka</option>
              <option>Sudan</option>
              <option>Suriname</option>
              <option>Sweden</option>
              <option>Switzerland</option>
              <option>Syria</option>
              <option>Tajikistan</option>
              <option>Tanzania</option>
              <option>Thailand</option>
              <option>Timor-Leste</option>
              <option>Togo</option>
              <option>Tonga</option>
              <option>Trinidad and Tobago</option>
              <option>Tunisia</option>
              <option>Turkey</option>
              <option>Turkmenistan</option>
              <option>Tuvalu</option>
              <option>Uganda</option>
              <option>Ukraine</option>
              <option>United Arab Emirates</option>
              <option>United Kingdom</option>
              <option>United States of America</option>
              <option>Uruguay</option>
              <option>Uzbekistan</option>
              <option>Vanuatu</option>
              <option>Venezuela</option>
              <option>Vietnam</option>
              <option>Yemen</option>
              <option>Zambia</option>
              <option>Zimbabwe</option>
            </select>
            {formik.errors.country && formik.touched.country ? (
                <p className={style.form_error}>{formik.errors.country}</p>
              ) : null}
            </Box>
            <Box>
              <p style={{ display: "flex", fontWeight: "600" }}>
                Email Address
              </p>
              <br />
              <input className={style.form_input} type="text" name="email"
                autoComplete='off'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
                {formik.errors.email && formik.touched.email ? (
                <p className={style.form_error}>{formik.errors.email}</p>
              ) : null}
            </Box>
          </Box>
          <Box
            className="new-password"
            sx={{ display: "flex", justifyContent: "space-between",flexWrap:"wrap" }}
          >
            <Box>
              <p style={{ display: "flex", fontWeight: "600" }}>
                Contact Number
              </p>
              <br />
              <input className={style.form_input} type="text" name="contact_no" autoComplete='off' value={formik.values.contact_no}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
                {formik.errors.contact_no && formik.touched.contact_no ? (
                <p className={style.form_error}>{formik.errors.contact_no}</p>        
              ) : null}
            </Box>
            <Box>
              <p style={{ display: "flex", fontWeight: "600" }}>
                Secondary Contact Number <br/>
                (Optional)
              </p>
              <br />
              <input className={style.form_input} type="text" name="second_contact_no" autoComplete='off' value={formik.values.second_contact_no}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} />
            </Box>
          </Box>
          <Box
            className="new-password"
            sx={{ display: "flex", justifyContent: "space-between",flexWrap:"wrap" }}
          >
            <Box>
              <p
                style={{
                  display: "flex",
                  fontWeight: "600",
                  alignItems: "center",
                }}
              >
                URL{" "}
                <span style={{ fontSize: "10px" }}>
                  ( If you would like this linked to FAIB Website )
                </span>
              </p>
              <br />
              <input className={style.form_input} type="text" autoComplete="off" name="url" value={formik.values.url}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
                 {formik.errors.url && formik.touched.url ? (
                <p className={style.form_error}>{formik.errors.url}</p>
              ) : null}
            </Box>
            <Box>
              <p style={{ display: "flex", fontWeight: "600" }}>
                Tax/Registration Number (Optional)
              </p>
              <br />
              <input className={style.form_input} type="text" name="tax" value={formik.values.tax}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
                {formik.errors.tax && formik.touched.tax ? (
                <p className={style.form_error}>{formik.errors.tax}</p>
              ) : null}
            </Box>
          </Box>
          <Box>
            <Typography
              component="p"
              sx={{
                paddingTop: "20px",
                fontWeight: "700",
                fontSize: "15px",
              }}
            >
              Which county would you like the company to be listed under on the
              <br />
              FAIB Website (Only 1 Allowed)
            </Typography>
            <Box
            className="new-password"
            sx={{ display: "flex", justifyContent: "space-between",flexWrap:"wrap" }}
          >
            <Box>
              <p style={{ display: "flex", fontWeight: "600" }}>County</p>
              <br />
              <input className={style.form_input} type="text"  name="country_two"
              value={formik.values.country_two}  onChange={formik.handleChange}
              onBlur={formik.handleBlur}/>
            </Box>
          </Box>
            {formik.errors.country_two && formik.touched.country_two ? (
                <p className={style.form_error}>{formik.errors.country_two}</p>
              ) : null}
          </Box>
          <div className="mt-4">
          <Button className={style.continue_btn} disabled={!formik.isValid} type="submit">Continue</Button>
          </div>
        </Box>
        </form>
      </Box>
    </div>
  );
};

