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

export default function AddTrainer() {
  const [pdisModalOpen, pdsetIsModalOpen] = useState(false);

  const pdshowModal = () => {
    pdsetIsModalOpen(true);
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

  const tyshowModal = () => {
    settyisModalOpen(true);
  };

  const tyhandleOk = () => {
    settyisModalOpen(false);
  };

  const tyhandleCancel = () => {
    settyisModalOpen(false);
  };
  return (
    <div>


      <Button className={style.continue_btn} onClick={pdshowModal}>Continue</Button>

      <Modal className="pdmodalwidth" title="Payment Details" open={pdisModalOpen} onOk={pdhandleOk} onCancel={pdhandleCancel} footer={null}>
        <Row>
          <Col span={12}>
            <div className="cardimgs">
              <img src={master} alt="" />
              <img src={master} alt="" />
              <img src={master} alt="" />
              <img src={master} alt="" />
            </div>
            <div className="addtraindata">
              <label>Card Holder</label>
              <Input placeholder="Enter your name" />
              <label>Card Number</label>
              <Input placeholder="Enter your card number" />

              <div className="tainmid">
                <div className="addtraindata">
                  <label>Card Number</label>
                  <Input placeholder="Enter your CVV number" />
                </div>
                <div className="addtraindata">
                  <label>Expire date</label>
                  <Input placeholder="Enter the expiry date of the card" />
                </div>
              </div>
            </div>
            <div className="addtrainclickarea">
              <Button className="addtrainclick" onClick={ooshowModal}>Pay Now</Button>
            </div>
          </Col>
          <Col span={12}>
            <div className="amountdata">
              <p>Membership <span> Trainer/Assessor</span></p>
              <p>Duration <span> 1 Year</span></p>
              <p>Amount <span> £20</span></p>
              <p>You have to pay</p>
              <h6>£20</h6>
            </div>
          </Col>
        </Row>
      </Modal>

      <Modal open={ooisModalOpen} onOk={oohandleOk} onCancel={oohandleCancel} footer={null}>
        <div className="oppsdata">
          <img src={oops} alt="" />
          <h4>Oops!</h4>
          <p>Your transaction has not been processed. Please retry with a different
            card or try again later.</p>
        </div>

        <div className="addtrainclickarea">
          <Button className="addtrainclick rety" onClick={tyshowModal}>Retry</Button>
          <Button className="addtrainclick" onClick={tyshowModal}>Close</Button>
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
          <a href="all-memberships"><Button className="addtrainclick">close</Button></a>
        </div>
      </Modal>

    </div>
  );
}
