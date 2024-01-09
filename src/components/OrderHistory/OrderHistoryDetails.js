import { Button,TableRow, TableCell } from "@mui/material";
import React from "react";
import style from "./Style.module.css";

export const OrderHistoryDetails = ({order}) => {
  console.log("8 order ka data",order);
  
  const DownloadOrderRecipt=(url)=>{
    const fileName=url.split("/").pop();
    const aTag=document.createElement("a");
    aTag.href=url;
    aTag.setAttribute("download",fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
} 


  const ViewOrderRecipt=async(id)=>{
    try{
      const url = `https://admin.faibnetwork.co.uk/api/user/view-order-recipt/${id}`;
      window.open(url, '_blank');
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <>
    {order && order.map((curOrder)=>{
      const {id,memberhip,ref_id,status,date,ammount}=curOrder;
return(
  <TableRow className={style.ordertablerow}>
              <TableCell>{ref_id}</TableCell>
              <TableCell sx={{textAlign: "center !important"}}>{date}</TableCell>
              <TableCell sx={{textAlign: "center !important"}}>{memberhip}</TableCell>
              <TableCell>£{ammount}</TableCell>
              <TableCell sx={{textAlign: "center !important"}}>{status==="Successfull"?<Button className={style.reNew}>{status}</Button>:<Button className={style.reNeww}>{status}</Button>}</TableCell>
              <TableCell sx={{textAlign: "center !important"}}><Button className={style.vuew} variant="outlined" onClick={()=>ViewOrderRecipt(id)}>
              View
            </Button>
            <br/>
            <Button className={style.dunlod} variant="outlined" onClick={()=>DownloadOrderRecipt(`https://admin.faibnetwork.co.uk/api/user/download-transaction-recipt/${id}`)}>
              Download
            </Button>
            </TableCell>
            </TableRow>
)
    })}
   
    </>
  );
};