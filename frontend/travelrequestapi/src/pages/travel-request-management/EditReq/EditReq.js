import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "../../Admin/Dashboard/Dashboard";

import './TravelRequestForm.css';


function EditReq() {


    const { id } = useParams();
    
    return (<>
        <UpdateStatus id={id} />
    </>)

}


function UpdateStatus(props) {
    //Navigate back to admin/course
    let navigate = useNavigate();
    const [status, setStatus] = useState();
    const goBack = () => {
        navigate('/admin/travel-request')
    }

    const [inputs, setInputs] = useState({});
    const mytoken = localStorage.getItem('mytoken');

    useEffect(() => {
        var config = {
            method: 'get',
            url: `http://localhost:5000/travel-requests/${props.id}`,
            headers: { 
              'Authorization': `Bearer ${mytoken}`, 
              'Content-Type': 'application/json'
            }
          };
        axios(config)
            .then((response) => {
                setStatus(response.data);
                console.log(response.data);
            })
    }, []);

    //handle the change of form elements
    function handleChange(event) {
        //saving the name of element and its value
        const name = event.target.name;
        const value = event.target.value;

        //updating the values into the state
        // setInputs(values => ({ ...values, [name]: value }))
        setStatus(value);
    }


    function handleSubmit(event) {
        event.preventDefault();
        console.log(inputs);
        var datas = JSON.stringify({
            "status": status
          });
          var config = {
            method: 'put',
            url: `http://localhost:5000/travel-requests/${props.id}`,
            headers: { 
              'Authorization': `Bearer ${mytoken}`, 
              'Content-Type': 'application/json'
            },
            data: datas
          };

        axios(config)
        .then((response) => {
            console.log(response);
            toast.success("Updated Successfully", {
              transition: Slide,
              hideProgressBar: true,
              autoClose: 5000
            })
           
          })
            .catch((error) => {
                console.log(error);
            })

    }



    return (
        <div>
            <Dashboard />

            <h1>Edit Status</h1>

            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" >
                    <Form.Select name="status" aria-label="Default select example" value={status || ""} onChange={handleChange}>
                        <option value="approve">Approve</option>
                        <option value="hold">Hold</option>
                        <option value="reject">Reject</option>
                    </Form.Select>
                </Form.Group>


                <Button variant="success" type="submit">
                    Update
                </Button>&nbsp;&nbsp;&nbsp;
                <Button variant="primary" type="reset" onClick={() => goBack()}>
                    Go Back
                </Button>
            </Form>
        </div>
    )
}


export default EditReq;
