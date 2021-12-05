import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './LoginForm.css';
import UserContext from "../../context/user-context";





function LoginForm() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});

    const userContext = useContext(UserContext);

    //handle the change of form elements
    function handleChange(event) {
        //saving the name of element and its value
        const name = event.target.name;
        const value = event.target.value;

        //updating the values into the state
        setInputs(values => ({ ...values, [name]: value }))
    }

    function handleSubmit(e) {
        //to prevent the default submit behaviour
        e.preventDefault();
        //printitng 
        console.log(inputs);

        axios
            .post('http://localhost:5000/Users/login', inputs)
            .then(response => {
                // alert(response.data.user.UserType);
                let UserType = response.data.user.UserType;
                let id = response.data.user.l_id;

                userContext.login( response.data.accessToken, response.data.user.UserType, response.data.user.Username);

                if (UserType === "Admin") {

                    navigate('/admin');
                } else if (UserType === "Manager") {
                    console.log("Working");
                    navigate('/manager');
                    // window.location = `/home/user/${id}}`
                }else{
                    navigate(`/home/user/${id}`);
                }
            }).catch(()=>{
                toast.error("Wrong Credentials", {
                    transition: Slide,
                    hideProgressBar: true,
                    autoClose: 3000
                  })
                // alert("Wrong Credentials");
            })


    }

    return (
        <div className="loginForm">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" name="Username" onChange={handleChange} value={inputs.Username || ""} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} value={inputs.password || ""} />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Login
                </Button>&nbsp;&nbsp;&nbsp;
                <Button variant="primary" onClick={() => { window.location = "/home" }}>
                    Go Back
                </Button>
            </Form>
        </div>
    )
}


export default LoginForm;