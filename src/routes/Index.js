import React from "react";
import { Routes, Route } from "react-router-dom";
import { DashboardIndex } from "../components/2 Training provider/FAIB CRM/Dashboard/DashboardIndex";
import {
CompanyContactForm1,
} from "../components/2 Training provider/FAIB CRM/FAIB Memberships/1 Training provider/FAIB 1 Training provider (company contact form)";
import {
 ContactFormDocumentsRequired2,
} from "../components/2 Training provider/FAIB CRM/FAIB Memberships/1 Training provider/FAIB 2 Training provider (Documents required)";
import { ContactFormDocumentsRequired3 } from "../components/2 Training provider/FAIB CRM/FAIB Memberships/1 Training provider/FAIB 3 Training provider (Documents uploaded)";
import { TrainerAssessorDocumentsRequired3 } from "../components/2 Training provider/FAIB CRM/FAIB Memberships/2 Trainer Assessor/FAIB 1 Trainer Assessor (Trainercontact form)";
import { TrainerAssessorDocumentsRequired2 } from "../components/2 Training provider/FAIB CRM/FAIB Memberships/2 Trainer Assessor/FAIB 2 Trainer assessor (Documents required)";
import { TrainerAssessorDocumentsRequired1 } from "../components/2 Training provider/FAIB CRM/FAIB Memberships/2 Trainer Assessor/FAIB 2 Trainer assessor (Documents required)1";
import { MentalHealthForm } from "../components/2 Training provider/FAIB CRM/FAIB Memberships/3 Mental Health Training provider/FAIB 1 Mental health Training provider (company contact form)";
import { MentalHealthDocumentsRequired } from "../components/2 Training provider/FAIB CRM/FAIB Memberships/3 Mental Health Training provider/FAIB 2 Mental health Trainer provider (Documents required)";
import { MentalHealthDocumentsRequired1 } from "../components/2 Training provider/FAIB CRM/FAIB Memberships/3 Mental Health Training provider/FAIB 2 Mental health Trainer provider (Documents required)1";
import { MentailHeathTrainerAssessorForm } from "../components/2 Training provider/FAIB CRM/FAIB Memberships/4 Mental Health Trainer Assessor/FAIB 1 Mental health Trainer Assessor (Trainer contact form)";
import ProtectedRoutes from "./ProtecedRoutes";
import SigInPage from "../components/2 Training provider/FAIB Signup/FAIB 1-1 Sign in-1";
import Profile from "../pages/profile";
import Membership from "../pages/membership";
import Certificate from "../pages/certificate";
import Trainer from "../pages/trainer";
import OrderHistory from "../pages/orderHistory";
import Resources from "../pages/resources";
import { AllMemberShip } from "../components/Dashboard/All membership/AllMemberShip";
import { EditProfile } from "../components/Profile/EditProfile";
import { SignupPage } from "../components/2 Training provider/FAIB Signup/FAIB 2 Sign up-1";
import {FAIB1Insafehands} from "../components/2 Training provider/FAIB CRM/FAIB Memberships/5 Insafe hands/FAIB1Insafehands"
import { FAIB2Insafehands } from "../components/2 Training provider/FAIB CRM/FAIB Memberships/5 Insafe hands/FAIB2Insafehands";
import { FAIB2Insafehands1 } from "../components/2 Training provider/FAIB CRM/FAIB Memberships/5 Insafe hands/FAIB2Insafehands1";
import {MentalHealthTrainerAssessorDocumentsRequired} from "../components/2 Training provider/FAIB CRM/FAIB Memberships/4 Mental Health Trainer Assessor/FAIB 2 Mental health Trainer assessor (Documents required)";
import { Error } from "../components/error/Error";
import { CompanyContactForm2 } from "../components/2 Training provider/FAIB CRM/FAIB Memberships/1 Training provider/FAIB 1 Training provider (company contact form)1";
import { MentalHealthTrainerAssessorDocumentsRequired1 } from "../components/2 Training provider/FAIB CRM/FAIB Memberships/4 Mental Health Trainer Assessor/FAIB 2 Mental health Trainer assessor (Documents required1)";

const Index = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<SigInPage />} />
        <Route exact path="/signuppage" element={<SignupPage />} />
        <Route exact path="/" element={<ProtectedRoutes />}>

          <Route path="/dashboard" element={<DashboardIndex />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/trainer" element={<Trainer />} />
          <Route path="/order-histroy" element={<OrderHistory />} />
          <Route path="/resources" element={<Resources />} />

          <Route path="/all-memberships" element={<AllMemberShip />} />
          <Route path="/profile/profile-edit" element={<EditProfile />} />
          <Route path="/trainer/add-trainer" element={<EditProfile />} />
          <Route path="/contact-form" element={<CompanyContactForm1 />} />
          <Route path="/Training Provider" element={<CompanyContactForm2 />} />
          <Route path="/required-form" element={<ContactFormDocumentsRequired2 />} />
          <Route path="/required-form2" element={<ContactFormDocumentsRequired3 />} />
          <Route path="/Trainer Assessor" element={<TrainerAssessorDocumentsRequired3 />} />
          <Route path="/trainer-accessor2" element={<TrainerAssessorDocumentsRequired2 />} />
          <Route path="/trainer-accessor1" element={<TrainerAssessorDocumentsRequired1/>} />
          <Route path="/Mental Health Training Provider" element={<MentalHealthForm />} />
          <Route path="/mental-health-required" element={<MentalHealthDocumentsRequired />} />
          <Route path="/mental-health-required1" element={<MentalHealthDocumentsRequired1 />} />
          <Route path="/Mental Health Trainer Assessor" element={<MentailHeathTrainerAssessorForm />} />
          <Route path="/Mentail-Heath-Trainer-Assessor-DocumentsRequired" element={<MentalHealthTrainerAssessorDocumentsRequired/>} />
          <Route path="/Mentail-Heath-Trainer-Assessor-DocumentsRequired1" element={<MentalHealthTrainerAssessorDocumentsRequired1/>} />
          <Route path="/In Safe Hands" element={<FAIB1Insafehands/>} />
          <Route path="/In-Safe-Hands-DocumentsRequired" element={<FAIB2Insafehands/>} />
          <Route path="/In-Safe-Hands-DocumentsRequired1" element={<FAIB2Insafehands1/>} />
          <Route path="*" element={<Error/>} />
        </Route>
      </Routes>
    </>
  );
};

export default Index;
