import * as React from "react";
import { useState } from 'react';
import Button from "@mui/material/Button";
import style from "./TrainerStyle.module.css";
import { Modal,Input, Row, Col } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./TrainerStyle.module.css";
import ContinueMember from "./ContinueMember";
import successfull from "../../assets/successfull.png";
import axios from "axios";
import master from "../../assets/master.png";
import direct_debit from "../../assets/direct debit.png";
import paypal from "../../assets/paypal.png";
import tok_visa from "../../assets/visa card.png";
import { useFormik } from "formik";
import { PaymentStrip } from "../Schemas";
import oops from "../../assets/oops.png";
import card from "../../assets/card.png";
import "./innertrainer.css";
import { useAuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

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

export default function OptionPayModel() {
  
  const [pdisModalOpen, pdsetIsModalOpen] = useState(false);
  const [directDebitModalOpen, directDebitsetIsModalOpen] = useState(false);
  const [membershipeRecode,setMembershipeRecode]=useState();
  const [payment,setPayment]=useState();
  console.log("payment",payment);
  const {memberShip,user}=useAuthContext();
  const value=localStorage.getItem('membershipeValue')
  const id=parseInt(value)
  console.log("memberShip",id,"membershipeValue",membershipeRecode,"user",user)
  const {first_name,last_name,company_name,company_address_1,company_address_2,contact_no,country,country_two,post_code,second_contact_no,tax,url,town}=user;
  const navigate=useNavigate();
  const pdshowModal = () => {
    if(id===memberShip[0].id){
        pdsetIsModalOpen(true)
        setMembershipeRecode(memberShip[0])
    }
    else if(id===memberShip[1].id){
      pdsetIsModalOpen(true)
      setMembershipeRecode(memberShip[1])
  }else if(id===memberShip[2].id){
    pdsetIsModalOpen(true)
    setMembershipeRecode(memberShip[2])
}else if(id===memberShip[3].id){
  pdsetIsModalOpen(true)
  setMembershipeRecode(memberShip[3])
}else if(id===memberShip[4].id){
  pdsetIsModalOpen(true)
  setMembershipeRecode(memberShip[4])
}
  };

  const pdhandleOk = () => {
    pdsetIsModalOpen(false);
  };

  const pdhandleCancel = () => {
    pdsetIsModalOpen(false);
  };
  

  const [tyisModalOpen, settyisModalOpen] = useState(false);

  const tyhandleOk = () => {
    settyisModalOpen(false);
  };

  const tyhandleCancel = () => {
    settyisModalOpen(false);
  };

 const OnBankTransfer=async()=>{
  const membership_id=membershipeRecode.id;
   const payment_method="Bank transfer"
  try{
    const user_id=localStorage.getItem('UserID')
    const user_email=localStorage.getItem('user_email')
    console.log("user_email",typeof(user_email));
   const res=await axios.post("/api/user/apply_on_membership",{user_id,membership_id,user_email,payment_method,first_name,last_name,company_name,company_address_1,company_address_2,contact_no,country,country_two,post_code,second_contact_no,tax,url,town})
    console.log(res.data[0]);
    if(res.data[0]==='Appied Successfully'){
      settyisModalOpen(true);
      pdsetIsModalOpen(false);
      setPayment("");
    }
  }catch(err){
    console.log(err);
  }
 }
 const [ooisModalOpen, oosetooisModalOpen] = useState(false);

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

const ooshowModal = () => {
    oosetooisModalOpen(true);
  };

  const oohandleOk = () => {
    oosetooisModalOpen(false);
  };

  const oohandleCancel = () => {
    oosetooisModalOpen(false);
  };
  const [source,setSource]=useState();

  const [tyddisModalOpen, settyddisModalOpen] = useState(false);


  const tyddhandleOk = () => {
    settyisModalOpen(false);
  };

  const tyddhandleCancel = () => {
    settyddisModalOpen(false);
    navigate('/membership');
  };

  const onSubmit = async (values) => {
    console.log(values);
    const user_id=localStorage.getItem('UserID')
    values.user_id_get=user_id;
    values.source=source;
    values.amount=membershipeRecode.membership_price;
    values.membership_name=membershipeRecode.membership_name;
    values.currency="GBP";
    const payment_method="direct debit"
    const membership_id=membershipeRecode.id
    try{
      const user_email=localStorage.getItem('user_email')
      console.log("user_email",typeof(user_email));
      const response=await axios.post("https://admin.faibnetwork.co.uk/api/user/apply_on_membership",{user_id,membership_id,user_email,payment_method,user})
      console.log(response.data[0]);
      const res=await axios.post(' https://admin.faibnetwork.co.uk/api/user/payment',values)
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
    <div>
      <Button className={style.continue_btn1} type="submit" onClick={pdshowModal}>Continue</Button>
      <Modal className="pdmodalwidth" open={pdisModalOpen} onOk={pdhandleOk} onCancel={pdhandleCancel} footer={null}>
         <div className={style.parahow}>
            <h1 style={{fontSize:"1rem"}}>Payment Option</h1>
            <p>Payment Method</p>
         </div>
        <div className={style.row_btn}>
          <Button className={style.continue_btn} onClick={directDebitshowModal}>Card/Pay Pal</Button>
          <Button className={style.continue_btn} onClick={directDebitshowModal}>Direct Debit</Button>
          <Button className={style.continue_btn} onClick={OnBankTransfer}>Bank Transfer</Button>
        </div>
      </Modal>
        
      <Modal open={tyisModalOpen} onOk={tyhandleOk} onCancel={tyhandleCancel} footer={null}>
        <div className="oppsdata">
          <img src={successfull} alt="" />
          <h4>Thankyou</h4>
          <p>Please transfer the total amount in the following details:</p>
          <p>Bank Account Name: The First Aid Industry Body 2018 Limited</p>
          <p>Bank: CO-OP BANK</p>
          <p>Sort Code: 08-92-50</p>
          <p>Account Number: 68715939</p>
        </div>
        <div className="addtrainclickarea">
          <Button className="addtrainclick" onClick={tyhandleCancel}>close</Button>
        </div>
      </Modal>

    </div>
    <div>

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
        <label>Card Holder Name</label>
        <Input name="user_id" value={formik.values.user_id}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} />
          {formik.errors.user_id && formik.touched.user_id ? (
          <p className="form-error">{formik.errors.user_id}</p>
        ) : null}
        <label>Card Number</label>
        <Input name="card_number" value={formik.values.card_number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} placeholder="e.g: 4242424242424242" />
{formik.errors.card_number && formik.touched.card_number ? (
          <p className="form-error">{formik.errors.card_number}</p>
        ) : null}
        <div className="tainmid">
          <div className="addtraindata">
            <label>Card Number CVV</label>
            <Input name="card_cvc" value={formik.values.card_cvc}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} placeholder="e.g: 456"/>
            {formik.errors.card_cvc && formik.touched.card_cvc ? (
          <p className="form-error">{formik.errors.card_cvc}</p>
        ) : null}
          </div>
          <div className="addtraindata">
            <label>Expire Date</label>
            <Input name="card_expiry_month" value={formik.values.card_expiry_month}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} placeholder="e.g: 12/34"/> 
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
        <p style={{marginTop: "70px"}}>Membership <span>{membershipeRecode && membershipeRecode.membership_name}</span></p>
        <p>Duration <span> 1 Year</span></p>
        <p>Amount <span> £{membershipeRecode && membershipeRecode.membership_price}+ VAT Total £420</span></p>
        <p>You have to pay</p>
        <h6>£{membershipeRecode && membershipeRecode.membership_price}</h6>
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

</div>
</>
  );
}
