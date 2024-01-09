import * as React from "react";
import { useState } from 'react';
import Button from "@mui/material/Button";
import style from "./TrainerStyle.module.css";
import { Modal, Input,Row, Col } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./TrainerStyle.module.css";
import oops from "../../assets/oops.png";
import successfull from "../../assets/successfull.png";
import master from "../../assets/master.png";
import axios from "axios";
import { useFormik } from "formik";
import { PaymentStrip } from "../Schemas";
import direct_debit from "../../assets/direct debit.png";
import paypal from "../../assets/paypal.png";
import card from "../../assets/card.png";
import tok_visa from "../../assets/visa card.png";
import "./innertrainer.css";
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

export default function AddTrainer1({membership_name,membership_price,membership_id,trainer_btn}) {
  const [first_name,setfirst_name]=useState();
  const [last_name,setlast_name]=useState();
  const [email,setemail]=useState();
  const [trainer_address,setTrainer_address]=useState();
  const [source,setSource]=useState(null);
  const [type,settype]=useState();
  const [payment_method,setPayment_method]=useState();
  const [add_by,setAdd_by]=useState();

  console.log("first_name",first_name,"last_name",last_name,"email",email);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [success,setSuccess]=useState();
  const [error,setError]=useState();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  ///////////
  
  const [pay_model,setpay_model]=useState(false);

  const PaymentOptionhandleOk = () => {
    setpay_model(false);
  };

  const PaymentOptionhandleCancel = () => {
    setpay_model(false);
  };
  ///////////////////////
  const [pdisModalOpen, pdsetIsModalOpen] = useState(false);


  const pdshowModal = () => {
    pdsetIsModalOpen(true);
    setpay_model(false);
  };

  const pdhandleOk = () => {
    pdsetIsModalOpen(false);
  };

  const pdhandleCancel = () => {
    pdsetIsModalOpen(false);
  };
  /////////////////////////
  const [ooisModalOpen, oosetooisModalOpen] = useState(false);

  const ooshowModal = () => {
    oosetooisModalOpen(true);
  };

  const oohandleOk = () => {
    oosetooisModalOpen(false);
  };

  const oohandleCancel = () => {
    oosetooisModalOpen(false);
  };
  //////////////////////////
  const [tyisModalOpen, settyisModalOpen] = useState(false);
  const [istraineroptionModalOpen,setistraineroptionModalOpen]=useState(false);


  const tyhandleOk = () => {
    settyisModalOpen(false);
    pdsetIsModalOpen(true);
  };

  const tyhandleCancel = () => {
    settyisModalOpen(false);
    setistraineroptionModalOpen(true);
  };

  const MovePaymentCard=async(e)=>{
    e.preventDefault()
    if(!first_name && !last_name && !email && !trainer_address){
       return setError("ALL fields Require!")
    }else if(!first_name){
      return setError("Please enter your first name!")
    }else if(!last_name){
      return setError("Please enter your last name!")
    }else if(!email){
      setError("Please enter your email address!")
    }else if(!trainer_address){
      return setError("Please enter trainer address!")
    }
    else{
     setError("")
     setpay_model(true)
     setIsModalOpen(false);
    }
  }
//////////////////////////////////
  const [tyouisModalOpen,settyouisModalOpen]=useState(false);

  const tyouhandleOk = () => {
    settyouisModalOpen(false);
  };

  const ishandleShowOk = () => {
    setistraineroptionModalOpen(true);
    settyouisModalOpen(false);
  };

  const ishandleOk = () => {
    setistraineroptionModalOpen(false);
  };

  const ishandleCancel = () => {
    setistraineroptionModalOpen(false);
  };

  const tyouhandleCancel = () => {
    settyouisModalOpen(false);
  };

  const OnBankTransfer=async()=>{
    const payment_method="Bank Transfer"
    try{
      if(payment_method){
        settyouisModalOpen(true);
        setpay_model(false);
        setPayment_method("Bank Transfer");
      }
    }catch(err){
      console.log(err);
    }
   }

   //paymentstrip

   const onSubmit = async (values) => {
    console.log(values);
    const user=localStorage.getItem('UserID');
    values.user_id_get=user;
    values.source=source;
    values.amount=membership_price;
    values.membership_name=membership_name;
    values.currency="GBP";
    try{
      const res=await axios.post('https://admin.faibnetwork.co.uk/api/user/payment',values)
      if(res.data.success===true){
         settyisModalOpen(true);
         pdsetIsModalOpen(false);
         setPayment_method("Direct debit");
         setAdd_by(values.user_id);
         formik.resetForm();
      }
      else{
        oosetooisModalOpen(true);
        pdsetIsModalOpen(false);
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

  const postAddTrainer=async(e)=>{
    e.preventDefault();
    if(!type){
      setError("Please select role of trainer!")
    }else{
      try{
        const user_id=localStorage.getItem('UserID');
        const res=await axios.post('https://admin.faibnetwork.co.uk/api/user/add-trainer',{first_name,last_name,email,add_by,type,user_id,membership_id,payment_method,trainer_address});
        console.log("res res.data.succes",res); 
        if(res.data.status==="success"){
           toast.success(res.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
           setfirst_name("");
           setlast_name("");
           setemail("");
           setSource("");
           settype("");
           setPayment_method("");
           setAdd_by("");
           setistraineroptionModalOpen(false);
        }
      }catch(err){
        if(err.response.status===422){
          setError(err.response.data.message);
          setistraineroptionModalOpen(false);
          setIsModalOpen(true);
        }
        console.log("res",err.response.data); 
      }
    }

  }



  return (
    <div>
     <ToastContainer />
     <Button className={trainer_btn} type="primary" onClick={showModal}>
        Add A Trainer
      </Button>
      <Modal title="Add Trainer" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <form onSubmit={MovePaymentCard}>
        {!success && <p className="text-center" style={{ color: "red", fontSize: "1rem" }}>{error ? error : ""}</p>}
        <div className="addtraindata">
          <label>Membership</label>
          <Input placeholder="membership name" name="membership_name"
                autoComplete='off'
                value={membership_name}/>
          <label>Trainer Address</label>
          <Input placeholder="Trainer Address" name="trainer_address"
                autoComplete='off' value={trainer_address}
                onChange={(e)=>setTrainer_address(e.target.value)}/>
          <div className="tainmid">
            <div className="addtraindata">
              <label>First Name</label>
              <Input placeholder="First Name" name="first_name" autoComplete='off' value={first_name}
                onChange={(e)=>setfirst_name(e.target.value)}/>
            </div>
            <div className="addtraindata">
              <label>Last Name</label>
              <Input placeholder="Last Name" name="last_name" autoComplete='off' value={last_name}
                onChange={(e)=>setlast_name(e.target.value)}/>
            </div>
          </div>
          <label>Email</label>
          <Input placeholder="Basic usage" name="email"
                autoComplete='off'
                value={email}
                onChange={(e)=>setemail(e.target.value)}/>
                
        </div>
        <div className="addtrainclickarea">
          <Button className="addtrainclick" type="submit">Next</Button>
        </div>
        </form>
      </Modal>

      <Modal className="pdmodalwidth" open={pay_model} onOk={PaymentOptionhandleOk} onCancel={PaymentOptionhandleCancel} footer={null}>
         <div className={style.parahow}>
            <h1 style={{fontSize:"1rem"}}>Payment Option</h1>
            <p>Payment Method</p>
         </div>
        <div className={style.row_btn}>
          <Button className={style.continue_btn} onClick={pdshowModal}></Button>
          <Button className={style.continue_btn} onClick={pdshowModal}>Direct Debit</Button>
          <Button className={style.continue_btn} onClick={OnBankTransfer}>Bank Transfer</Button>
        </div>
      </Modal>
      <Modal className="pdmodalwidth" title="Payment Details" open={pdisModalOpen} onOk={pdhandleOk} onCancel={pdhandleCancel} footer={null}>
      <form onSubmit={formik.handleSubmit}>
        <Row>
          <Col span={12}>
          <div className="cardimgs_input_container">
          <div className="cardimgs_input">
            <input
              type="radio"
              name="paymentOption"
              id="master_card"
              value="master_card"
              onChange={() => setSource("master_card")}
              checked={source === "master_card"}
            />
            <label htmlFor="master_card">
              <div className="cardimgs">
                <img src={master} alt="" />
              </div>
            </label>
          </div>
          <div className="cardimgs_input">
            <input
              type="radio"
              name="paymentOption"
              id="direct_debit"
              value="direct_debit"
              onChange={() => setSource("direct_debit")}
              checked={source === "direct_debit"}
            />
            <label htmlFor="direct_debit">
              <div className="cardimgs">
                <img src={direct_debit} alt="" />
              </div>
            </label>
          </div>
          <div className="cardimgs_input">
            <input
              type="radio"
              name="paymentOption"
              id="paypal"
              value="paypal"
              onChange={() => setSource("paypal")}
              checked={source === "paypal"}
            />
            <label htmlFor="paypal">
              <div className="cardimgs">
                <img src={paypal} alt="" />
              </div>
            </label>
          </div>
          <div className="cardimgs_input">
            <input
              type="radio"
              name="paymentOption"
              id="tok_visa"
              value="tok_visa"
              onChange={() => setSource("tok_visa")}
              checked={source === "tok_visa"}
            />
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
        <label>Card Holder Name</label>
        <Input placeholder="Enter your card number" name="card_number" value={formik.values.card_number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}/>
{formik.errors.card_number && formik.touched.card_number ? (
          <p className="form-error">{formik.errors.card_number}</p>
        ) : null}
        <div className="tainmid">
          <div className="addtraindata">
            <label>Card Number CVV</label>
            <Input placeholder="Enter your CVV number" name="card_cvc" value={formik.values.card_cvc}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}/>
            {formik.errors.card_cvc && formik.touched.card_cvc ? (
          <p className="form-error">{formik.errors.card_cvc}</p>
        ) : null}
          </div>
          <div className="addtraindata">
            <label>Expiry Date</label>
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
              <p>Amount <span> £{membership_price}+ VAT Total £420</span></p>
              <p>You have to pay</p>
              <h6>£{membership_price}</h6>
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
          <Button className="addtrainclick rety" onClick={tyhandleOk}>Retry</Button>
          <Button className="addtrainclick" onClick={oohandleCancel}>Close</Button>
        </div>
      </Modal>

      <Modal open={tyisModalOpen} onOk={tyhandleOk} onCancel={tyhandleCancel} footer={null}>
        <div className="oppsdata">
          <img src={successfull} alt="" />
          <h4>Thankyou</h4>
          <p>Your transaction has been processed successfully. We are reviewing your
            documents and notify you within 24 to 48 hours via email.</p>
        </div>
        <div className="addtrainclickarea">
          <Button className="addtrainclick" onClick={tyhandleCancel}>close</Button>
        </div>
      </Modal>
      <Modal open={tyouisModalOpen} onOk={tyouhandleOk} onCancel={tyouhandleCancel} footer={null}>
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
          <Button className="addtrainclick" onClick={ishandleShowOk}>close</Button>
        </div>
      </Modal>
      <Modal title="Add Trainer" open={istraineroptionModalOpen} onOk={ishandleOk} onCancel={ishandleCancel} footer={null}>
        <form onSubmit={postAddTrainer}>
        {!success && <p className="text-center" style={{ color: "red", fontSize: "1rem" }}>{error ? error : ""}</p>}
        <div className="addtraindata">
          <label>Membership</label>
          <Input placeholder="membership name" name="membership_name"
                autoComplete='off'
                value={membership_name}/>
        </div>
        <div className="addtraindata">
          <label>Role</label>
          <select className="form-control" id="exampleFormControlSelect1" name="type" value={type}
                onChange={(e)=>settype(e.target.value)}>
              <option style={{color:"#c2c6cb !important"}}>Select</option>
              <option>Trainer</option>
              <option>Lead Trainer</option>
            </select>
        </div>

        <div className="addtrainclickarea">
          <Button className="addtrainclick" type="submit">Next</Button>
        </div>
        </form>
      </Modal>
    </div>
  );
}