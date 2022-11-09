import '../csstwo/mdi-font/css/material-design-iconic-font.min.css';
import'../csstwo/font-awesome-4.7/css/font-awesome.min.css';
import'../csstwo/select2/select2.min.css';
import'../csstwo/datepicker/daterangepicker.css';
import '../css/main.css';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from 'react';
function Details() {
    const navigate=useNavigate()
    const {state} = useLocation();
   const[firstname,setfirstname]=useState('')
   const[lastname,setlastname]=useState('')
   const[gender,setGender]=useState('')
   const[phonenumber,setphonenumber]=useState('')
    const onSubmit = async (e) => {
        e.preventDefault();
       
        const password=state.password;
        const email=state.email;
        const name=firstname.concat(lastname);
        const list=[name,email,phonenumber,gender,password]
        console.log(list)
        navigate('/submit',{state:{details:list}})
    }
    const resetRadioState = () => {
        setGender('')
        setfirstname('')
        setlastname('')
        setphonenumber('')
      }
  return (
    <>
    <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
        <div className="wrapper wrapper--w680">
            <div className="card card-4">
                <div className="card-body">
                    <h2 className="title">Registration Form II</h2>
                    <form  onSubmit={onSubmit}>
                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">first name</label>
                                    <input className="input--style-4" type="text" value={firstname}  onChange={(event) => {
              setfirstname(event.target.value)}} required/>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">last name</label>
                                    <input className="input--style-4" type="text"value={lastname}  onChange={(event) => {
              setlastname(event.target.value)}} required/>
                                </div>
                            </div>
                        </div>
                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                    <div className="p-t-10">
                                        <label className="radio-container m-r-45">Male
                                            <input type="radio" name="gender"  checked={gender === 'male'} value="male"  onChange={(event) => {
              setGender(event.target.value)}}  />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="radio-container">Female
                                            <input type="radio" name="gender"   checked={gender === 'female'} value="female"   onChange={(event) => {
              setGender(event.target.value)}} />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">Phone Number</label>
                                    <input className="input--style-4"   type='phonenumber' maxlength="13" placeholder='+91' pattern="^((\+91[0-9]{10})|(0[0-9]{10}))$"
                                     onChange={(event) => {
                                        setphonenumber(event.target.value)}}   required   />
                                </div>
                            </div>
                        </div>
                        <div className="p-t-15">
                            <button className="btn btn--radius-2 btn--blue" type="submit"  onChange={resetRadioState}>Next</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    </>
      
  );
}

export default Details;
