import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import style from "../Dashboard/DashboardStyle.module.css";
import  axios from "axios";
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  FormControl,
  Typography,
  FormControlLabel,
  Button,
} from "@mui/material";

import "./TrainerStyle.module.css";
import "./innertrainer.css";
import Radio from "@mui/material/Radio";
import { Box } from "@mui/system";
import AddTrainer from "./AddTrainer";
import { AiOutlineEdit } from "react-icons/ai";

const columns = [
  {
    id: 1,
    name: "L-trainer",
  },
  {
    id: 2,
    name: "Full Name",
  },
  {
    id: 3,
    name: "Email",
  },
  {
    id: 4,
    name: "Role",
  },
  {
    id: 5,
    name: "Expiry Date",
  },
  {
    id: 6,
    name: "Status",
  },
  {
    id: 7,
    name: "Membership",
  },
  {
    id: 8,
    name: "Action",
  },
];

export default function TrainerTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [trainerData,setTrainerData]=React.useState([]);
  const [value,setValue]=React.useState();

   console.log("trainerData",value);
 
  const getTrainers=async()=>{
    try{
      const user_id=localStorage.getItem('UserID')
      const id=parseInt(user_id)
     const res=await axios.get(`https://admin.faibnetwork.co.uk/api/user/get-trainer/${id}`);
     console.log(res.data);
     setTrainerData(res.data);
    }catch(error){
        console.log(error)
    }
  }
  const makeLeadTrainer=async(id,plan_id)=>{
    console.log("id",id,"plan_id",plan_id)
    try{
      const userId=localStorage.getItem('UserID')
      const user_id=parseInt(userId)
     const res=await axios.get(`https://admin.faibnetwork.co.uk/api/user/make-lead-trainer/${user_id}/${plan_id}/${id}`);
     console.log("res",res.data.Success)
     if(res.data.Success==="Assign Lead Trainer Successfully"){
        toast.success(res.data.Success, {
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
      console.log(err);
    }
  }

  React.useEffect(()=>{
    getTrainers();
  },[])

  return (
    <>
      <div className="trainheadi">
        <h3 style={{ fontWeight: "bold", fontSize: "20px" }}>Trainers</h3>
        <AiOutlineEdit className="editicon" />
      </div>

      <AddTrainer />


      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
        {trainerData && trainerData.length===0? <div  className="text-center">
      <h1 className="m-md-5" style={{color:'#c0c0c0'}}>No Trainers found :)</h1></div>:  
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            {trainerData && trainerData.map((curdata)=>{
              const {id,first_name,user_email,type,validate_till,status,plan_id,status_relate}=curdata;
              return(
                <TableBody>
              <TableCell>
                <FormControl>
                  <FormControlLabel defaultValue={type==="Lead trainer"?type:value} value={value} onChange={(e)=>setValue(e.target.value)} onClick={()=>makeLeadTrainer(id,plan_id)} control={<Radio value="Lead Trainer" />} />
                </FormControl>
              </TableCell>
              <TableCell>
                <Typography>{first_name}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{user_email}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{value?<>{value}</>:<>{type}</>}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{validate_till}</Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {status==="pending" && status_relate==="ongoing"?<Button className="hold" variant="contained">{status}</Button>:""}
                  {status==="approved" && status_relate==="ongoing"?<Button  className="domne" variant="contained">Accepted</Button>:""}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>{plan_id===0?"NILL":<>{plan_id===2?"Trainer Assessor":""}
                {plan_id===1?"Training Provider":""}
                {plan_id===3?"Mental Health Training Provider":""}
                {plan_id===4?"Mental Health Trainer Assessor":""}
                {plan_id===5?"In Safe Hands":""}</>}</Typography>
              </TableCell>
              <TableCell>
                <Box>
                  <Box>
                    <Button className={style.preview} variant="outlined">
                      Preview
                    </Button>
                  </Box>
                  <Box>
                    <Button variant="contained" className={style.download}>
                      Download
                    </Button>
                  </Box>
                  <Box>
                    <Button variant="contained" className={style.reNew}>
                      Renew
                    </Button>
                  </Box>
                </Box>
              </TableCell>
            </TableBody>
              )
            })}
          </Table>}
        </TableContainer>
      </Paper>
    </>
  );
}
