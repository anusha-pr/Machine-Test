import Dashboard from "../../Admin/Dashboard/Dashboard";

import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import './ViewReq.css'
import { Table } from "react-bootstrap";
function ViewReq() {

    const [travelRequests, setTravelRequests] = useState([]);
    const mytoken = localStorage.getItem('mytoken');

    useEffect(() => {
        console.log('The use effect hook has been executed');
        var config = {
            method: 'get',
            url: 'http://localhost:5000/travel-requests',
            headers: {
                'Authorization': `Bearer ${mytoken}`,
                'Content-Type': 'application/json'
            }
        };

        axios(config)
            .then(response => {
                console.log('Promise fulfilled');
                console.log(response);

                setTravelRequests(response.data);
            })

    }, []);


    return (
        <>

            <Dashboard />
            <div className="mainBody">
                <h1> <center>
                    Resource enquiries List

                </center> </h1>
                <Table striped bordered>
                    <tr>
                        <th>Employee id</th>
                        <th>Cause of Travel</th>
                        <th>Priority</th>

                    </tr>

                    {travelRequests.map(travelRequest =>
                       
                        <tr>
                            <td>{travelRequest.emp_id}</td>
                            <td>{travelRequest.cause_travel}</td>
                            <td>{travelRequest.priority}</td>
                            <td><Link to={`${travelRequest.id}`}>View Enquiree Details</Link></td>
                        </tr>
                    )}

                </Table>
            </div>

        </>
    )
}

export default ViewReq;