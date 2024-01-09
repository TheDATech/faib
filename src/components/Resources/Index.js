import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BiLink } from "react-icons/bi";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from 'antd';
import "./resor.css";
import { Pagination } from 'antd';
import axios from "axios";
import style from "../OrderHistory/Style.module.css";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


export default function Index() {
  const [dropvalue,setDropValue]=React.useState();
  console.log("dropvalue",dropvalue)
  const [allResources,setAllResources]=React.useState();

  const DownloadFile=(url)=>{
      const fileName=url.split("/").pop();
      const aTag=document.createElement("a");
      aTag.href=url;
      aTag.setAttribute("download",fileName);
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
  } 
  const  getResource = async () => {
    const name=dropvalue
  try {
    const res = await axios.get(`https://admin.faibnetwork.co.uk/api/user/getresources/${name}`);
    const  resource=await res.data[0];
    setAllResources(resource);
    console.log("res",res);
  } catch (error) {
    console.log(error);
  }
  };

  const ViewResource=async(id)=>{
    const url = `https://admin.faibnetwork.co.uk/api/user/view-resource-file/${id}`;
    window.open(url, '_blank');
  }
  
  React.useEffect(() => {
    getResource(allResources);
  },[dropvalue])
  return (
    <>
      <Box
        sx={{
          display: "flex !important",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        <Typography style={{ fontWeight: "bold", fontSize: "20px" }} component="h3">Membership</Typography>
        {/* <TextField type="date"></TextField> */}
        <div className="sidesel">
        <select  className="lucyselect"  style={{ width: "100%" }}  value={dropvalue}
            onChange={(e)=>setDropValue(e.target.value)}>
            <option>Training Provider</option>
            <option>Trainer Assessor</option>
            <option>Mental Health Training Provider</option>
            <option>Mental Health Trainer Assessor</option>
            <option>In Safe Hands</option>
        </select>
        </div>
      </Box>

      <TableContainer
        component={Paper} className={style.tableContainer}
      >
      {allResources? <Table>
        <TableHead>
          <TableRow  sx={{
          alignItems: "center !important",
          borderTop: "2px solid #CCCCCC !important",
          borderBottom: "2px solid #CCCCCC !important",
          textAlign: "center !important",
          marginTop:"5px",
          marginBottom:"5px"
        }}>
            <TableCell>File Name</TableCell>
            <TableCell sx={{textAlign: "center !important"}}>File Link</TableCell>
            <TableCell sx={{textAlign: "center !important"}}>Membership</TableCell>
            <TableCell sx={{textAlign: "center !important"}}>Type</TableCell>
            <TableCell sx={{textAlign: "center !important"}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow className={style.ordertablerow}>
              <TableCell>{allResources.file_name}</TableCell>
              <TableCell sx={{textAlign: "center !important",color:'blue'}}>
                <BiLink />
                  {allResources.file_link}</TableCell>
              <TableCell sx={{textAlign: "center !important"}}>{allResources.membership}</TableCell>
              <TableCell><Button className="porclick">{allResources.type}</Button></TableCell>
              <TableCell sx={{textAlign: "center !important"}}><Button className={style.vuew} variant="outlined" onClick={()=>ViewResource(allResources.id)}>
              View
            </Button>
            <br/>
            <Button className={style.dunlod} variant="outlined" onClick={()=>{DownloadFile(`https://admin.faibnetwork.co.uk/api/user/download-resource-file/${allResources.id}`)}}>
              Download
            </Button>
            </TableCell>
            </TableRow>
        </TableBody>
      </Table>:""}
      </TableContainer>

      <div className="pgnition"><Pagination className="pgnitionn" defaultCurrent={1} total={50} /></div>
    </>
  );
}
