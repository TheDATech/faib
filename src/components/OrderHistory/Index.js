import { TextField, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { OrderHistoryDetails } from "./OrderHistoryDetails";
import style from "./Style.module.css";
import axios from "axios";
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';



const Index = () => {
  const [order,setOrder]=useState("");
  const [userId,setUserid]=useState();
  const [selected_date,setSelected_date]=useState();
  console.log('selected_date',selected_date);
  const postData = {
    selected_date: selected_date,
};
  const getOrderHistory=async()=>{
    try{
      const user_id=localStorage.getItem('UserID')
      const id=parseInt(user_id)
      setUserid(id);
      const res=await axios.get(`https://admin.faibnetwork.co.uk/api/user/order_history/${id}`)
      setOrder(res.data)
    }catch(err){
      console.log(err)
    }
  }

  const DownloadTransactionHistory = (url, postData) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.style.display = "none"; // Hide the anchor element
    document.body.appendChild(aTag);

    // Create a form element and add the data to it
    const form = document.createElement("form");
    form.method = "POST";
    form.action = url;

    // Create hidden input fields for each key-value pair in postData
    for (const key in postData) {
        if (postData.hasOwnProperty(key)) {
            const input = document.createElement("input");
            input.type = "hidden";
            input.name = key;
            input.value = postData[key];
            form.appendChild(input);
        }
    }

    // Append the form to the document and submit it
    document.body.appendChild(form);
    form.submit();

    // Clean up by removing the form and the anchor element
    form.remove();
    aTag.remove();
}

const url=`https://admin.faibnetwork.co.uk/api/user/download-csv-orderhistory/${userId}`

  useEffect(()=>{
    getOrderHistory()
  },[])
  return (
    <div>
      <Typography style={{ fontWeight: "bold", fontSize: "20px" }} component="h3">Order History</Typography>
      <Typography>
      <TextField style={{ color: "gray", width: "25%", marginTop: "13px" }} type="date" value={selected_date} onChange={(e)=>setSelected_date(e.target.value)}></TextField>
        <Button className={style.alldwon} variant="outlined" onClick={()=>DownloadTransactionHistory(url,postData)}>
          Download CSV
        </Button>
      </Typography>
      {order.length===0?"":<TableContainer component={Paper} className={style.tableContainer}>
      <Table>
        <TableHead>
          <TableRow  sx={{
          alignItems: "center !important",
          borderTop: "2px solid #CCCCCC !important",
          borderBottom: "2px solid #CCCCCC !important",
          textAlign: "center !important",
          marginTop:"5px",
          marginBottom:"5px"
        }}>
            <TableCell>Reference ID</TableCell>
            <TableCell sx={{textAlign: "center !important"}}>Date</TableCell>
            <TableCell sx={{textAlign: "center !important"}}>Membership</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell sx={{textAlign: "center !important"}}>Status</TableCell>
            <TableCell sx={{textAlign: "center !important"}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <OrderHistoryDetails order={order}/>
        </TableBody>
      </Table>
    </TableContainer>}
    </div>
  );
};

export default Index;
