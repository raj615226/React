import '../csstwo/mdi-font/css/material-design-iconic-font.min.css';
import'../csstwo/font-awesome-4.7/css/font-awesome.min.css';
import'../csstwo/select2/select2.min.css';
import'../csstwo/datepicker/daterangepicker.css';
import '../css/main.css';
import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
function Login(){
    const [email, setemail] = useState('')
    // const [show, setShow] = useState(false);
  const [password, setPassword] = useState("")
    const onSubmit = async (e) => {
      e.preventDefault()
      const post = { email: email,password:password}
      try {
        const res = await axios.post('https://backendssasd.herokuapp.com/login', post)
        console.log(res.data.status)
        if(res.data.status === 'success'){
            setemail('');
            setPassword('');
            alert('Login Successfully.')
           
        }
        else{
        //   setShow(true)
          alert('Enter a Valid Number.')
            setemail('');
            setPassword('');
        }
      } catch (e) {
        alert('Something went wrong.')
        setemail('');
        setPassword('');
      }
    }
 
    return (
        <>
        <div>
        <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
        {/* {show ?<Alert variant="danger" onClose={() => setShow(false)} dismissible style={{width:'400px',textAlign:'center',position:'absolute',top:'10px',left:'300px'}}>
            <Alert.Heading>Already Email Register!</Alert.Heading>
          </Alert>: <></>
    } */}
            <div className="wrapper wrapper--w680">
                <div className="card card-4">
                    <div className="card-body">
                        <h2 className="title">Login</h2>
                        <form  onSubmit={onSubmit}>
                            <div className="row row-space">
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Email</label>
                                        <input className="input--style-4" type="Email" value={email}  onChange={(event) => {
                  setemail(event.target.value)}} required/>
                                    </div>
                                    </div>
                                    <div className="col-2">
                                    <div className="input-group">
                                      
                                        <label className="label">Password</label>
                                        <input  className="input--style-4" type="password"  value={password} onChange={(event) => setPassword(event.target.value)} required/>
                            </div>
                                    </div>
                                    </div>
                                    <div className="p-t-15">
                                <button className="btn btn--radius-2 btn--blue" type="submit">Login</button>
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

export default Login;
