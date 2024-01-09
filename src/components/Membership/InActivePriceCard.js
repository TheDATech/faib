import React,{useState,useEffect} from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

function InActivePriceCard({ width }) {
  const [active,setActive]=useState();
  
  const activeMembership=async()=>{
    try{
      const user_id=localStorage.getItem('UserID')
      const id=parseInt(user_id)
     const res=await axios.get(`https://admin.faibnetwork.co.uk/api/user/getmembershiprecord/${id}`);
     setActive(res.data);
    }catch(err){
     console.log(err)
    }
  }

  useEffect(()=>{
    activeMembership()
  },[])
  return (
    <div>
      <Box
        sx={{
          width: `${width}px !important`,
          textAlign: "center"
        }}
      >
       <Grid container spacing={5} className="pgheadinggg" sx={{
            justifyContent: "space-around",
            flexWrap: "wrap",
            alignItems: "center",
            }}>
        {active && active.map((curElem)=>{
      const {id,status,status_relate,membership_details,membership_name,membership_price}=curElem;
       console.log("membership_name",membership_name);
       return(
         <Grid item xs={12} sm={6} md={3} key={id+membership_name+membership_price}>
         {status==="approved" && status_relate==="ongoing"?<>
         <Link to={'/'+membership_name}>
         <Card
          sx={{
            borderRadius: "25px",
            border: "2px solid #3E3459",
            minHeight: "300px",
          }}
        >
          <Box
            component="div"
            sx={{
              backgroundColor: "#278A2A",
              textAlign: "center",
              p: 3,
              borderBottomLeftRadius: "25px",
              borderBottomRightRadius: "25px",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "30px",
              }}
            >
              £{membership_price}
            </Typography>
          </Box>

          <CardContent>
            <Typography
              component="h6"
              sx={{
                mt: 1,
                mb: 3,
                textAlign: "center",
                fontWeight: "600",
                fontSize: "14px",
                color: "#3e3459",
              }}
            >
              {membership_name}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "center",
                fontWeight: "500",
                fontSize: "14px",
                color: "#3e3459",
                lineHeight: "22px",
              }}
            >
              {membership_details}
            </Typography>
          </CardContent>
        </Card>
       </Link>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: "20px",
            mt: 1,
            color: "#278A2A",
          }}
        >
          Active
        </Typography>
         </>:""}
         {status==="pending" && status_relate==="ongoing"?<>
         <Link to={'/'+membership_name}>
           <Card
          sx={{
            borderRadius: "25px",
            border: "2px solid #3E3459",
            minHeight: "300px",
          }}
        >
          <Box
            component="div"
            sx={{
              backgroundColor: "#3e3459",
              textAlign: "center",
              p: 3,
              borderBottomLeftRadius: "25px",
              borderBottomRightRadius: "25px",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "30px",
              }}
            >
              £{membership_price}
            </Typography>
          </Box>

          <CardContent>
            <Typography
              component="h6"
              sx={{
                mt: 1,
                mb: 3,
                textAlign: "center",
                fontWeight: "600",
                fontSize: "14px",
                color: "#3e3459",
              }}
            >
              {membership_name}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "center",
                fontWeight: "500",
                fontSize: "14px",
                color: "#3e3459",
                lineHeight: "22px",
              }}
            >
              {membership_details}
            </Typography>
          </CardContent>
           </Card>
         </Link>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: "20px",
            mt: 1,
            color: "#3e3459",
          }}
        >
          Inactive
        </Typography>
         </>:""}
         {status==="pending" && status_relate==="expired"?<>
         <Card
          sx={{
            borderRadius: "25px",
            border: "2px solid #3E3459",
            minHeight: "300px",
          }}
        >
          <Box
            component="div"
            sx={{
              backgroundColor: "red",
              textAlign: "center",
              p: 3,
              borderBottomLeftRadius: "25px",
              borderBottomRightRadius: "25px",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "30px",
              }}
            >
              £{membership_price}+VAT
            </Typography>
          </Box>

          <CardContent>
            <Typography
              component="h6"
              sx={{
                mt: 1,
                mb: 3,
                textAlign: "center",
                fontWeight: "600",
                fontSize: "14px",
                color: "#3e3459",
              }}
            >
              {membership_name}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "center",
                fontWeight: "500",
                fontSize: "14px",
                color: "#3e3459",
                lineHeight: "22px",
              }}
            >
              {membership_details}
            </Typography>
          </CardContent>
        </Card>

        <Typography
          variant="subtitle1"
          sx={{
            fontSize: "20px",
            mt: 1,
            color: "red",
          }}
        >
           Expired
        </Typography>
         </>:""}
         </Grid>
       )
       })}
       </Grid>

      </Box>
    </div>
  );
}

export default InActivePriceCard;
