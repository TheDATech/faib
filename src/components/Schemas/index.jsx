import * as Yup from "yup";

const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/);

export const SignupSchema = Yup.object({
    first_name: Yup.string().min(2).max(20).required("Please enter your first name!"),
    last_name: Yup.string().min(2).max(20).required("Please enter your last name!"),
    email: Yup.string().email("Please enter a valid email address").required("Email address is required!"),
    cemail: Yup.string().email("Please enter a valid email address").required("Confirm Email address is required!"),
    pass: Yup.string().min(6).required("password is required!"),
    cpass: Yup.string().required("confirm password is required!").oneOf([Yup.ref('pass'), null], "Password does not match!"),
    hereby: Yup.string().required("Please select is required"),
    interedted_in:Yup.string().required("Please select a membership"),
    contact_no: Yup.string().matches(phoneRegex, "Invalid phone").required("Contact Number is required")
})

export const SigninSchema = Yup.object({
    email: Yup.string().email("Please enter a valid email address").required("Email address is required!"),
    pass: Yup.string().min(6).required("password is required!"),
})

export const ForgotPassSchema=Yup.object({
    email: Yup.string().email("Please enter a valid email address").required("Email address is required!")
})
export const ChangePasswordSchema=Yup.object({
    old_password:Yup.string().min(6).required("password is required!"),
    new_password: Yup.string().min(6).required("password is required!"),
    confirm_new_password: Yup.string().required().oneOf([Yup.ref('pass'), null], "Password does not match!")
})

export const EditProfileSchema=Yup.object({
    first_name: Yup.string().min(2).max(20).required("Please enter your first name!"),
    last_name: Yup.string().min(2).max(20).required("Please enter your last name!"),
    email: Yup.string().email("Please enter a valid email address").required("Email address is required!"),
    contact_no: Yup.string().matches(phoneRegex, "Invalid phone").required("Contact Number is required"),
    fake_membership:Yup.string().required("Please enter membership!"),
    company_name:Yup.string().required("Please enter company name!"),
    hereby:Yup.string().required("Required!"),
    interedted_in:Yup.string().required("Required!"),
    assign_lead_trainer:Yup.string().required("Please enter trainer name!"),
    assign_lead_trainer_membership:Yup.string().required("Please enter trainer address!"),
    assign_lead_trainer_address:Yup.string().required("Please enter trainer address!"),
    newsletter:Yup.string().required("Please enter newsletter!"),
    company_address_1:Yup.string().required("Please enter company address 1!"),
    company_address_2:Yup.string().required("Please enter company address 2!"),
    country:Yup.string().required("Please enter country!"),
    town:Yup.string().required("Please enter town!"),
})

export const AddTrainerSchema=Yup.object({
    first_name: Yup.string().min(2).max(20).required("Please enter your first name!"),
    last_name: Yup.string().min(2).max(20).required("Please enter your last name!"),
    email: Yup.string().email("Please enter a valid email address").required("Email address is required!")
})
export const PaymentStrip=Yup.object({
    user_id: Yup.string().min(2).max(20).required("Please Enter Card Holder Name!"),
    card_number: Yup.string().required("Please Enter Card Number!"),
    card_cvc: Yup.string().required("Enter CVV Number!"),
    card_expiry_month:Yup.string().required("Enter Card Expiry Date!")
})

export const TrainerProviderSchema = Yup.object({
    first_name: Yup.string().min(2).max(20).required("Please enter your first name!"),
    last_name: Yup.string().min(2).max(20).required("Please enter your last name!"),
    company_name: Yup.string().min(2).max(20).required("Please enter your company name!"),
    email: Yup.string().email("Please enter a valid email address").required("Email address is required!"),
    contact_no: Yup.string().matches(phoneRegex, "Invalid phone").required("Contact Number is required"),
    company_address_1: Yup.string().required("Please enter your company address!"),
    post_code: Yup.string().required("Please enter your company postcode!"),
    town:Yup.string().required("Please enter your town / city!"),
    url:Yup.string().required("Please enter url Link!"),
    tax:Yup.string(),
    country_two:Yup.string().required("Please enter country name!"),
    country:Yup.string().required("Please Select country!")
})
export const TrainerAssessorSchema = Yup.object({
    email: Yup.string().email("Please enter a valid email address").required("Email address is required!"),
    contact_no: Yup.string().matches(phoneRegex, "Invalid phone").required("Contact Number is required"),
    company_address: Yup.string().required("Please enter your company address!"),
    company_poscode: Yup.string().required("Please enter your company postcode!"),
    city:Yup.string().required("Please enter your town / city!"),   
    country:Yup.string().required("Please enter country!"),
    country_name:Yup.string().required("Please Select country!"),
    radio_name:Yup.string().required("Please Select Yes or No!")
})
export const InSafeSchema = Yup.object({
    first_name: Yup.string().min(2).max(20).required("Please enter your first name!"),
    last_name: Yup.string().min(2).max(20).required("Please enter your last name!"),
    company_name: Yup.string().min(2).max(20).required("Please enter your company name!"),
    email: Yup.string().email("Please enter a valid email address").required("Email address is required!"),
    contact_no: Yup.string().matches(phoneRegex, "Invalid phone").required("Contact Number is required"),
    company_address: Yup.string().required("Please enter your company address!"),
    company_poscode: Yup.string().required("Please enter your company postcode!"),
    city:Yup.string().required("Please enter your town / city!"),
    url:Yup.string().required("Please enter url Link!"),
    country:Yup.string().required("Please enter country!"),
    country_name:Yup.string().required("Please Select country!")
})