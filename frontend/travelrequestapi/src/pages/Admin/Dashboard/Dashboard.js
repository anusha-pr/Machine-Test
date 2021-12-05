import './Dashboard.css'

import { NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";


function Dashboard() {


    return (
        <div className="dash">
            <div className="dashboarditem">Dashboard</div>
            <div classname="dashboarditem">
                
                <div className="item">
                    <NavDropdown title="Travel Requests" id="basic-nav-dropdown">
                        
                        <NavDropdown.Item >< Link to="/admin/travel-request">Travel Request Management</Link></NavDropdown.Item>
                    </NavDropdown>
                </div>


            </div>
        </div>

    )
}

export default Dashboard;