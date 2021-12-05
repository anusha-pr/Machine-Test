import Dashboard from "../../Admin/Dashboard/Dashboard";
import './ReqDetails.css'
import { Button } from "react-bootstrap";

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { useNavigate } from 'react-router-dom';
import { Table } from "react-bootstrap";
function ReqDetails() {

    const [inputs, setInputs] = useState({});
    const { id } = useParams();
    const mytoken = localStorage.getItem('mytoken');
    const navigate = useNavigate();

    useEffect(() => {
        var config = {
            method: 'get',
            url: `http://localhost:5000/travel-requests/${id}`,
            headers: {
                'Authorization': `Bearer ${mytoken}`,
                'Content-Type': 'application/json'
            }
        };
        axios(config).then(response => {
            console.log(response.data);
            setInputs(response.data);
        })
    }, [])



    return (
        <>
            <Dashboard />
            <center>
                <div>

                    <h1>Travel Request Details</h1>
                    <br />

                    <Table striped bordered>

                        <thead>
                            <tr>

                                <th>Cause</th>
                                <th>Source</th>
                                <th>Destination</th>
                                <th>From Date</th>
                                <th>To Date</th>
                                <th>Priority</th>
                                <th>Employee id</th>
                                <th>Satus</th>

                            </tr></thead><tbody>
                            <tr>
                                <td>{inputs.cause_travel}</td>
                                <td>{inputs.source} </td>
                                <td>{inputs.destination}</td>
                                <td>{inputs.from_date}</td>
                                <td>{inputs.to_date} </td>
                                <td>{inputs.priority}</td>
                                <td>{inputs.emp_id}</td>
                                <td>{inputs.status} </td>

                                <td> <Button variant="success" type="submit" onClick={() => navigate(`/admin/travel-request/edit-travel-request/${inputs.id}`)}>Update Status</Button></td>

                            </tr>
                        </tbody>
                    </Table>
                </div>
            </center>
        </>
    )
}

export default ReqDetails;