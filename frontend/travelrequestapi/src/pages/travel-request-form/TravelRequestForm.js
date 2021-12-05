import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

import { Form, Button } from "react-bootstrap";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './TravelRequestForm.css';

function TravelRequestForm(props) {

    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    // const navigate =useNavigate()


    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({ ...values, [name]: value }))
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(inputs);
        axios
            .post('http://localhost:5000/travel-requests/', inputs)
            .then(response => {
                console.log('promise fulfilled')
                console.log(response)
                toast.success("Submitted Successfully", {
                    transition: Slide,
                    hideProgressBar: true,
                    autoClose: 5000
                })
                navigate("/home/");
            }).catch(error => {
                console.log(error);
            })
    }


    return (
        <div className="enquiryForm">

            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" >
                    <Form.Label>Cause of Travel : </Form.Label>
                    <Form.Control type="text" placeholder="Enter why you want to travel" name="cause_travel" value={inputs.cause_travel || ""} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Source : </Form.Label>
                    <Form.Control type="text" placeholder="Enter source of travel" name="source" value={inputs.source || ""} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Destination : </Form.Label>
                    <Form.Control type="text" placeholder="Enter destination of travel" name="destination" value={inputs.destination || ""} onChange={handleChange} />
                </Form.Group>


                <Form.Group className="mb-3" >
                    <Form.Label>From Date : </Form.Label>
                    <Form.Control type="date" placeholder="Date from which you want to travel" name="from_date" value={inputs.from_date || ""} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>To Date : </Form.Label>
                    <Form.Control type="date" placeholder="Date till which you want to travel" name="to_date" value={inputs.to_date || ""} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>No of days : </Form.Label>
                    <Form.Control type="text" placeholder="No of days of travel" name="no_days" value={inputs.no_days || ""} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicSelect">
                    <label for="mode">Mode of travel : </label>

                    <Form.Select name="mode" aria-label="Default select example" value={inputs.mode} onChange={handleChange}>
                        <option value="">--choose an option--</option>
                        <option value="bus">Bus</option>
                        <option value="train">Train</option>
                        <option value="car">Car</option>
                        <option value="flight">Flight</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicSelect">
                    <label for="priority">Priority : </label>

                    <Form.Select name="priority" aria-label="Default select example" value={inputs.priority} onChange={handleChange}>
                        <option value="">--choose an option--</option>
                        <option value="critical">Critical</option>
                        <option value="normal">Normal</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Project id : </Form.Label>
                    <Form.Control type="text" placeholder="Enter project id" name="project_id" value={inputs.project_id || ""} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Employee id : </Form.Label>
                    <Form.Control type="text" placeholder="Enter employee id" name="emp_id" value={inputs.emp_id || ""} onChange={handleChange} />
                </Form.Group>

                <Button variant="success" type="submit">
                    Request
                </Button>&nbsp;&nbsp;&nbsp;
                <Button variant="primary" onClick={() => { window.location = "/home" }}>
                    Go Back
                </Button>
            </Form>
        </div>
    )
}


export default TravelRequestForm;
