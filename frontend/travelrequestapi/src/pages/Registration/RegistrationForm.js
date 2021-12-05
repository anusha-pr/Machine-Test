import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";

import './RegistrationForm.css';
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";





function RegistrationForm() {

    localStorage.clear();
    //initialize to empty
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    //handle the change of form elements
    function handleChange(event) {
        //saving the name of element and its value
        const name = event.target.name;
        const value = event.target.value;

        //updating the values into the state
        setInputs(values => ({ ...values, [name]: value }))
    }
    function handleSubmit(e) {
        e.preventDefault();
        const regData = {
            "Username": inputs.Username,
            "password": inputs.password,
            "UserType": "User"
        }


        axios
            .post('http://localhost:5000/Users/register', regData)
            .then(response => {
                toast.success(" Added Successfully", {
                    transition: Slide,
                    hideProgressBar: true,
                    autoClose: 3000
                })
                localStorage.setItem('mytoken', response.data.accessToken);
                localStorage.setItem('UserType', response.data.user.UserType);
                if (response.data.user.UserType === 'User') {
                    console.log(response);


                }
            })

    }

    return (
        <div>
            <Form onSubmit={handleSubmit} className="registrationForm">

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" onChange={handleChange} value={inputs.name || ""} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} value={inputs.password || ""} />
                </Form.Group>
               
               
                <Button variant="primary" type="submit">
                    Submit
                </Button>&nbsp;&nbsp;&nbsp;
                <Button variant="primary" onClick={() => { window.location = "/home" }}>
                    Go Back
                </Button>
            </Form>
        </div>
    )
}


export default RegistrationForm;