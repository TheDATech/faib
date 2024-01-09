import React, { useState } from 'react';
import { Modal,Input, Row, Col } from 'antd';
import successfull from "../../assets/successfull.png";
import { PaymentStrip } from "../Schemas";
import { useFormik } from "formik";
import oops from "../../assets/oops.png";
import card from "../../assets/card.png";
import master from "../../assets/master.png";
import direct_debit from "../../assets/direct debit.png";
import paypal from "../../assets/paypal.png";
import tok_visa from "../../assets/visa card.png";
import axios from 'axios';
import { Button, Checkbox, FormControlLabel} from "@mui/material";
import style from "../Dashboard/DashboardStyle.module.css";

const initialValues = {
    user_id: "",
    card_number: "",
    card_cvc: "",
    card_expiry_month: "",
    source:"",
    amount:"",
    membership_name:"",
    currency:"",
    user_id_get:""
  }


export const Renew = ({id,plan_id,membership_name,membership_price}) => {
    console.log("membership_price",membership_price,"membership_name",membership_name,"plan_id",plan_id)
    const [pdisModalOpen, pdsetIsModalOpen] = useState(false);
    const [tickboxisModalOpen, tickboxsetIsModalOpen] = useState(false);
    const [directDebitModalOpen, directDebitsetIsModalOpen] = useState(false);
    const [ooisModalOpen, oosetooisModalOpen] = useState(false);
    const [source,setSource]=useState();

    const pdshowModal = () => {
        pdsetIsModalOpen(true);
        tickboxsetIsModalOpen(false);
      }
      const pdhandleOk = () => {
        pdsetIsModalOpen(false);
      };
    
      const pdhandleCancel = () => {
        pdsetIsModalOpen(false);
      };
      const tickboxshowModal = () => {
        tickboxsetIsModalOpen(true);
      }
      const tickboxhandleOk = () => {
        tickboxsetIsModalOpen(false);
      };
    
      const tickboxhandleCancel = () => {
        tickboxsetIsModalOpen(false);
      };

      const [tyisModalOpen, settyisModalOpen] = useState(false);

  const tyhandleOk = () => {
    settyisModalOpen(false);
  };

  const tyhandleCancel = () => {
    settyisModalOpen(false);
  };

  const directDebitshowModal = () => {
    directDebitsetIsModalOpen(true);
    oosetooisModalOpen(false);
    pdsetIsModalOpen(false);
  };
  
  const directDebithandleOk = () => {
    directDebitsetIsModalOpen(false);
  };
  
  const directDebithandleCancel = () => {
    directDebitsetIsModalOpen(false);
  };


  const oohandleOk = () => {
    oosetooisModalOpen(false);
  };

  const oohandleCancel = () => {
    oosetooisModalOpen(false);
  };

  const OnBankTransfer=async(plan_id)=>{
    const membership_id=plan_id;
    const payment_method="Bank Transfer";
    try{
      const user_id=localStorage.getItem('UserID')
      const user_email=localStorage.getItem('user_email')
      const res=await axios.post("https://admin.faibnetwork.co.uk/api/user/apply_on_membership",{user_id,membership_id,user_email,payment_method})
      console.log(res.data[0]);
      if(res.data[0]==='Appied Successfully'){
        settyisModalOpen(true);
        pdsetIsModalOpen(false);
      }
    }catch(err){
      console.log(err);
    }
   }
   const [tyddisModalOpen, settyddisModalOpen] = useState(false);


  const tyddhandleOk = () => {
    settyisModalOpen(false);
  };

  const tyddhandleCancel = () => {
    settyddisModalOpen(false);
  };

  const onSubmit = async (values) => {
    console.log(values);
    const user=localStorage.getItem('UserID');
    values.user_id_get=user;
    values.source=source;
    values.amount=membership_price;
    values.membership_name=membership_name;
    values.currency="GBP";
    try{
      const res=await axios.post(`https://admin.faibnetwork.co.uk/api/user/renew-membership/${id}/${plan_id}`,values)
      if(res.data.success===true){
         settyddisModalOpen(true);
         directDebitsetIsModalOpen(false);
         formik.resetForm();
      }
      else{
        oosetooisModalOpen(true);
        directDebitsetIsModalOpen(false);
        formik.resetForm();
      }
      console.log(res.data);
    }
    catch(err){
      console.log(err);
    }

  };

  const formik = useFormik({
    initialValues,
    validationSchema: PaymentStrip,
    validateOnBlur: true,
    onSubmit
  });


  return (
    <>
    <Button variant="contained" className={style.renew_btn} onClick={tickboxshowModal}>Renew</Button>

      <Modal className="pdmodalwidth" open={tickboxisModalOpen} onOk={tickboxhandleOk} onCancel={tickboxhandleCancel} footer={null}>
    <div className={style.parahow}>
    <FormControlLabel required control={<Checkbox onClick={pdshowModal}/>} label="I confirm I still hold up to date copies of all relevant documentation" />
    </div>
 </Modal>
        
        <Modal className="pdmodalwidth" open={pdisModalOpen} onOk={pdhandleOk} onCancel={pdhandleCancel} footer={null}>
    <div className={style.parahow}>
       <h1 className='text-center' style={{fontSize:"1rem"}}>Payment Option</h1>
       <p className='text-center'>Payment Method</p>
    </div>
   <div className={style.row_btn}>
     <button className={style.continue_btn} onClick={directDebitshowModal}>Card/Pay Pal</button>
     <button className={style.continue_btn} onClick={directDebitshowModal}>Direct Debit</button>
     <button className={style.continue_btn} onClick={()=>OnBankTransfer(plan_id)}>Bank Transfer</button>
   </div>
 </Modal>

 <Modal open={tyisModalOpen} onOk={tyhandleOk} onCancel={tyhandleCancel} footer={null}>
        <div className="oppsdata">
          <img src={successfull} alt="" />
          <h4>Thankyou</h4>
          <p>Please transfer the total amount in the following details:</p>
          <p> Account Title: FAIB</p>
          <p>Account Number: 0123456789123</p>
        </div>
        <div className="addtrainclickarea">
          <Button className="addtrainclick" onClick={tyhandleCancel}>close</Button>
        </div>
      </Modal>

      <Modal className="pdmodalwidth" title="Payment Details" open={directDebitModalOpen} onOk={directDebithandleOk} onCancel={directDebithandleCancel} footer={null}>
<form onSubmit={formik.handleSubmit}>
  <Row>
    <Col span={12} style={{marginTop:"30px"}}>
    <div className="cardimgs_input_container">
    <div className="cardimgs_input">
          <input type="radio" name="master_card" id="master_card" value="master_card" onChange={(e)=>setSource(e.target.value)} />
          <label htmlFor="master_card">
          <div className="cardimgs">
               <img src={master} alt="" />
           </div>
          </label>
         </div>
         <div className="cardimgs_input">
          <input type="radio" name="direct_debit" id="direct_debit" value="direct_debit" onChange={(e)=>setSource(e.target.value)} />
          <label htmlFor="direct_debit">
          <div className="cardimgs">
               <img src={direct_debit} alt="" />
           </div>
          </label>
         </div>
         <div className="cardimgs_input">
          <input type="radio" name="paypal" id="paypal" value="paypal" onChange={(e)=>setSource(e.target.value)} />
          <label htmlFor="paypal">
          <div className="cardimgs">
               <img src={paypal} alt="" />
           </div>
          </label>
         </div>
         <div className="cardimgs_input">
          <input type="radio" name="tok_visa" id="tok_visa" value="tok_visa" onChange={(e)=>setSource(e.target.value)} />
          <label htmlFor="tok_visa">
          <div className="cardimgs">
               <img src={tok_visa} alt="" />
           </div>
          </label>
         </div>
    </div>
     
      <div className="addtraindata">
        <label>Card Holder</label>
        <Input placeholder="Enter your name" name="user_id" value={formik.values.user_id}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} />
          {formik.errors.user_id && formik.touched.user_id ? (
          <p className="form-error">{formik.errors.user_id}</p>
        ) : null}
        <label>Card Number</label>
        <Input placeholder="Enter your card number" name="card_number" value={formik.values.card_number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}/>
{formik.errors.card_number && formik.touched.card_number ? (
          <p className="form-error">{formik.errors.card_number}</p>
        ) : null}
        <div className="tainmid">
          <div className="addtraindata">
            <label>Card Number</label>
            <Input placeholder="Enter your CVV number" name="card_cvc" value={formik.values.card_cvc}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}/>
            {formik.errors.card_cvc && formik.touched.card_cvc ? (
          <p className="form-error">{formik.errors.card_cvc}</p>
        ) : null}
          </div>
          <div className="addtraindata">
            <label>Expire date</label>
            <Input placeholder="Enter the expiry date of the card" name="card_expiry_month" value={formik.values.card_expiry_month}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}/> 
          {formik.errors.card_expiry_month && formik.touched.card_expiry_month ? (
          <p className="form-error">{formik.errors.card_expiry_month}</p>
        ) : null}

          </div>
        </div>
      </div>
      <div className="addtrainclickarea">
        <Button className="addtrainclick" disabled={!formik.isValid} type="submit">Pay Now</Button>
      </div>
    </Col>
    <Col span={12}>
      <div className="amountdata">
        <img src={card} alt="" id="amountdatacard"/>
        <p style={{marginTop: "70px"}}>Membership <span>{membership_name}</span></p>
        <p>Duration <span> 1 Year</span></p>
        <p>Amount <span> £ {membership_price}</span></p>
        <p>You have to pay</p>
        <h6>£ {membership_price}</h6>
      </div>
    </Col>
  </Row>
  </form>
</Modal>

<Modal open={ooisModalOpen} onOk={oohandleOk} onCancel={oohandleCancel} footer={null}>
  <div className="oppsdata">
    <img src={oops} alt="" />
    <h4>Oops!</h4>
    <p>Your transaction has not been processed. Please retry with a different
      card or try again later.</p>
  </div>

  <div className="addtrainclickarea">
    <Button className="addtrainclick rety" onClick={directDebitshowModal}>Retry</Button>
    <Button className="addtrainclick" onClick={oohandleCancel}>Close</Button>
  </div>
</Modal>

<Modal open={tyddisModalOpen} onOk={tyddhandleOk} onCancel={tyddhandleCancel} footer={null}>
  <div className="oppsdata">
    <img src={successfull} alt="" />
    <h4>Thankyou</h4>
    <p>Your transaction has been processed successfully. We are reviewing your
      documents and notify you within 24 to 48 hours via email.</p>
  </div>
  <div className="addtrainclickarea">
    <Button className="addtrainclick" onClick={tyddhandleCancel}>close</Button>
  </div>
</Modal>
    </>
  
  )
}
