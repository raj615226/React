
import '../csstwo/mdi-font/css/material-design-iconic-font.min.css';
import'../csstwo/font-awesome-4.7/css/font-awesome.min.css';
import'../csstwo/select2/select2.min.css';
import'../csstwo/datepicker/daterangepicker.css';
import '../css/main.css';
import React, { useState } from "react";
// import axios from "axios";
import { useLocation } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import axios from "axios";
function Address() {
    const [show, setShow] = useState(false);
    const {state} = useLocation();
    const[address,setaddress]=useState('')
    const[states,setstates]=useState('')
    const[city,setcity]=useState('')
    const[country,setcountry]=useState('')
    const[pincode,setpincode]=useState('')
     const onSubmit = async (e) => {
        e.preventDefault()
        const data=state.details
       try {
        const post={name:data[0],email:data[1],phonenumber:data[2],gender:data[3],password:data[4],address:address,city:city,country:country,pincode:pincode,state:states}
        console.log(post) 
        const res = await axios.post('https://backendssasd.herokuapp.com/create', post)
          console.log(res.data.status)
          if(res.data.status === 'success'){
             alert(res.data.msg)
             setShow(true)
             setaddress('')
             setcity('')
             setstates('')
             setcountry('')
             setpincode('')
             
      }
    else{
              alert(res.data.status)
              setcity('')
              setstates('')
              setcountry('')
              setpincode('')
          }
        } catch (e) {
          alert('Server error')
        }
      }
  return (
    <>
    <div>
    <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
    {show ?<Alert variant="success" onClose={() => setShow(false)} dismissible style={{width:'400px',textAlign:'center',position:'absolute',top:'10px',left:'300px'}}>
        <Alert.Heading>Create Successfully!</Alert.Heading>
      </Alert>: <></>
}
        <div className="wrapper wrapper--w680">
            <div className="card card-4">
                <div className="card-body">
                    <h2 className="title">Submit Form </h2>
                    <form  onSubmit={onSubmit} >
                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label"><h3>Address</h3></label>
                                    <textarea style={{height:"150px",width:'80vh'}} className="input--style-4" type="text" name="address" value={address}  onChange={(event) => {
              setaddress(event.target.value)}} required/>
                                </div>
                                </div>
                                </div>
                                <div className="row row-space">
                                <div className="col-2">
                                <div className="input-group">
                                    <label className="label">City</label>
                                    <input className="input--style-4" type="text"value={city}  onChange={(event) => {
              setcity(event.target.value)}} required/>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">State</label>
                                    <input className="input--style-4" type="text"value={states}  onChange={(event) => {
              setstates(event.target.value)}} required/>
                                </div>
                            </div>
                            </div>
                            <div className="row row-space">
                                <div className="col-2">
                                <div className="input-group">
                                    <label className="label">Country</label>
                                    <input className="input--style-4" type="text" value={country}  onChange={(event) => {
              setcountry(event.target.value)}} required/>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">Pincode</label>
                                    <input className="input--style-4" type="text" value={pincode}  onChange={(event) => {
              setpincode(event.target.value)}} required/>
                                </div>
                            </div>
                            </div>
                               
                                <div className="p-t-15">
                            <button className="btn btn--radius-2 btn--blue" type="submit">Submit</button>
                        </div>
                    </form>
                    </div>
            </div>
        </div>
        </div>
    </div>
    </> 
  );
}

export default Address;
