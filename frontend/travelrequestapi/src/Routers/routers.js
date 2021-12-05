import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useContext } from "react";
import Admin from "../pages/Admin/Admin";
import Home from "../pages/Home/Home";


import UserContext from "../context/user-context";

// Login form
import LoginForm from "../pages/login/LoginForm";

//Registration Form
import RegistrationForm from "../pages/Registration/RegistrationForm";

//Travel request Form Component
import TravelRequestForm from "../pages/travel-request-form/TravelRequestForm";

//Components for travel request Management
import ReqMng from "../pages/travel-request-management/ReqMng";
import ViewReq from "../pages/travel-request-management/ViewReq/ViewReq";
import EditReq from "../pages/travel-request-management/EditReq/EditReq";
import ReqDetails from "../pages/travel-request-management/ReqDetails/ReqDetails";
import Header from "../Header/Header";

const Routers = (props) => {
    const userContext = useContext(UserContext);
    return (
        <Router>
            <Header/>
            <Routes>
                {/* Route for home page */}
                <Route path="/home/" element={<Home />} />

                {/* Routes for Resource Enqiuiry Form */}
                <Route path="/home/travel-request" element={<TravelRequestForm />}
                />

                {/* Route for Registration form */}
                <Route path="/home/register" element={<RegistrationForm />} />

                {/* Route for login form */}
                <Route path="/home/login" element={<LoginForm />} />

                {/* Admin Page */}
                <Route
                    path="/admin/"
                    element={userContext.userDetails && userContext.userDetails.UserType === 'Admin' && <Admin />}
                />

                {/* Routes for Travel Requests Management */}
                <Route
                    path="/admin/travel-request"
                    element={userContext.userDetails && userContext.userDetails.UserType === 'Admin' && <ReqMng />}
                />
                <Route
                    path="/admin/travel-request/view-travel-request"
                    element={userContext.userDetails && userContext.userDetails.UserType === 'Admin' && <ViewReq />}
                />
                <Route
                    path="/admin/travel-request/view-travel-request/:id"
                    element={userContext.userDetails && userContext.userDetails.UserType === 'Admin' && <ReqDetails />}
                />
                <Route
                    path="/admin/travel-request/edit-travel-request/:id"
                    element={userContext.userDetails && userContext.userDetails.UserType === 'Admin' && <EditReq />}
                />

            </Routes>

        </Router>
    );
}

export default Routers;