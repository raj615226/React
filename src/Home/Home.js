
import '../csstwo/mdi-font/css/material-design-iconic-font.min.css';
import'../csstwo/font-awesome-4.7/css/font-awesome.min.css';
import'../csstwo/select2/select2.min.css';
import'../csstwo/datepicker/daterangepicker.css';
import '../css/main.css';
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Alert from 'react-bootstrap/Alert';
import PasswordChecklist from "react-password-checklist"
function Home() {
    const navigate=useNavigate()
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false);
  const [valid,setvalid]=useState("")
    const onSubmit = async (e) => {
      e.preventDefault()
      if(valid === true){
      const post = { email: email}
      try {
        const res = await axios.post('https://backendssasd.herokuapp.com/verify', post)
        console.log(res.data.status)
        if(res.data.status === 'success'){
            navigate('/details',{state:{password:password,email:email}})
            setemail('');
            setPassword('');
           
        }
        else{
          setShow(true)
            setemail('');
            setPassword('');
        }
      } catch (e) {
        setShow(true)
        setemail('');
        setPassword('');
      }
    }
    else{
      alert("Password invalid.")
        setemail('');
        setPassword('');
    }
  }
    const change = async (e) => {
      e.preventDefault()
      navigate('/login')
    }
  return (
    <>
    <div>
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Register</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <button className="btn btn--radius-2 btn--blue" onClick={change}>Login</button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
    {show ?<Alert variant="danger" onClose={() => setShow(false)} dismissible style={{width:'400px',textAlign:'center',position:'absolute',bottom:'450px',left:'300px'}}>
        <Alert.Heading>Already Email Register!</Alert.Heading>
      </Alert>: <></>
}
        <div className="wrapper wrapper--w680">
            <div className="card card-4">
                <div className="card-body">
                    <h2 className="title">Registration Form I</h2>
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
                                    <input  className="input--style-4" type="password" value={password}  onChange={(event) => setPassword(event.target.value)}/>

			<PasswordChecklist
				rules={["minLength","specialChar","number","capital"]}
				minLength={5}
				value={password}
				onChange={(isValid) => 
          setvalid(isValid)
        }
			/>
                        </div>
                                </div>
                                </div>
                                <div className="p-t-15">
                            <button className="btn btn--radius-2 btn--blue" type="submit">Next</button>
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

export default Home;
