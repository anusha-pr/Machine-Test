import { Link } from "react-router-dom";
import Dashboard from "../Admin/Dashboard/Dashboard";

import "./ReqMng.css";

function ReqMng() {
  return (
    <>
      <Dashboard />

      <div class="container">
        <div class="row">
          <div class="col m-5 text-center">
            {" "}
            <Link to="/admin/travel-request/view-treavel-request">
              <div class="col btn btn-primary"> View Travel Requests </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReqMng;
