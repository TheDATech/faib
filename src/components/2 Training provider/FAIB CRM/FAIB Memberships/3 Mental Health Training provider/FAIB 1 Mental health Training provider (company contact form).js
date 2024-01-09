import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useNavigate} from  "react-router-dom";
import style from "../2 Trainer Assessor/trainerAssessor.module.css";
import { useAuthContext } from "../../../../../Context/AuthContext";

export const MentalHealthForm = () => {
  const {UserData,userdataLoad}=useAuthContext();
  
  let navigate = useNavigate();

 
const getRmoveLink=()=>{
  navigate('/mental-health-required1');
}
if(userdataLoad){
  return(
    <div>Laoding....</div>
  )
}

  return (
    <div>
      <Box className={style.contact_form_box}>
        <Typography className={style.form_heading}>Company Contact Info</Typography>
        <form>
        <Box className={style.contact_form}>
        <Typography component="h1" variant="h5">
            Mental Health Training Provider
          </Typography>
          <Box
            className="new-password"
            sx={{ display: "flex", justifyContent: "space-between",flexWrap:"wrap" }}
          >
            <Box>
              <p style={{ display: "flex", fontWeight: "600" }}>First Name</p>
              <br />
              <input className={style.form_input} type="text" autoComplete="off" name="first_name" value={UserData.first_name}/>
            </Box>
            <Box>
              <p style={{ display: "flex", fontWeight: "600" }}>Last Name</p>
              <br />
              <input className={style.form_input} type="text" name="last_name" autoComplete='off' value={UserData.last_name}/>
            </Box>
          </Box>
          <Box sx={{ marginTop: "30px" }}>
            <p style={{ display: "flex", fontWeight: "600" }}>Company Name</p>
            <br />
            <input className={style.form_input_full_width} type="text" autoComplete='off' name="company_name" value={UserData.company_name}/>
          </Box>
          <Box sx={{ marginTop: "30px" }}>
            <p style={{ display: "flex", fontWeight: "600" }}>
              Company Address 1
            </p>
            <br />
            <input className={style.form_input_full_width} type="text" autoComplete='off' name="company_address_1" value={UserData.company_address_1}/>
               
          </Box>
          <Box sx={{ marginTop: "30px" }}>
            <p style={{ display: "flex", fontWeight: "600" }}>
              Company Address 2
            </p>
            <br />
            <input className={style.form_input_full_width} type="text" autoComplete='off' name="company_address_2" value={UserData.company_address_2}/>
          </Box>
          <Box
            className="new-password"
            sx={{ display: "flex", justifyContent: "space-between",flexWrap:"wrap" }}
          >
            <Box>
              <p style={{ display: "flex", fontWeight: "600" }}>Town / City</p>
              <br />
              <input className={style.form_input} type="text" autoComplete="off" name="town" value={UserData.town}/>
            </Box>
            <Box>
              <p style={{ display: "flex", fontWeight: "600" }}>
                Company Postcode
              </p>
              <br />
              <input className={style.form_input} type="text" autoComplete="off" name="post_code" value={UserData.post_code}/>
            
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
              value={UserData.country}
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
            </Box>
            <Box>
              <p style={{ display: "flex", fontWeight: "600" }}>
                Email Address
              </p>
              <br />
              <input className={style.form_input} type="text" name="email"
                autoComplete='off'
                value={UserData.email}
               />
               
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
              <input className={style.form_input} type="text" name="contact_no" autoComplete='off'  value={UserData.contact_no}/>
               
            </Box>
            <Box>
              <p style={{ display: "flex", fontWeight: "600" }}>
                Secondary Contact Number
              </p>
              <br />
              <input className={style.form_input} type="text" name="second_contact_no" autoComplete='off' value={UserData.second_contact_no}/>
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
                  (If you would like this linked to FAIB Website)
                </span>
              </p>
              <br />
              <input className={style.form_input} type="text" autoComplete="off" name="url" value={UserData.url}/>
                
            </Box>
            <Box>
              <p style={{ display: "flex", fontWeight: "600" }}>
                Tax/Registration Number{" "}
              </p>
              <br />
              <input className={style.form_input} type="text" name="tax" value={UserData.tax}/>
            </Box>
          </Box>
          <Box
            className="new-password"
            sx={{ display: "flex", justifyContent: "space-between",flexWrap:"wrap" }}
          >
            <Box>
              <p style={{ display: "flex", fontWeight: "600" }}>County</p>
              <br />
              <input className={style.form_input} type="text" name="country" value={UserData.country}/>
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
            <select
              style={{ marginTop: "14px", marginBottom: "20px" }}
              className={style.form_input}
              name="country_two"
              value={UserData.country_two}>
              <option>Select County</option>
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
          </Box>

          <Button className={style.continue_btn} type="submit" onClick={getRmoveLink}>Continue</Button>
        </Box>
        </form>
      </Box>
    </div>
  );
};

