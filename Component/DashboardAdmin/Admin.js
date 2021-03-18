import React from "react";
import "./Dashboard.css";
import { Route, Switch, Redirect } from "react-router-dom";
import AdminDash from "./AdminDash";
import AdminNAvBar from "../../Layout/AdminNAvBar";
import SideNavbarAdmin from "../../Layout/SideNavbarAdmin";
import Proposal from "../Proposal/Proposal";
import JobList from "../JobList/JobList";
import FreelancerProfile from "../FreelancerProfile/FreelancerProfile";
import ProPosedProfile from "../Proposal/ProposedProfile";
// import Chat from "../ChatMaster/Chat";
import Chat from "../ChatMaster/Chat";
import CustomerHistory from "../OQhistory/CustomerHistory";
import CustomerProjectList from "../Project/ProjectList";
import AddReviews from "../Project/AddReviews";
import JobPost from "../JobPost/JobPost";
import SettingPage from "../SettingsCustomer/SettingPage";
import NotificationCustomer from "../Notification/NotificationCustomer";
import ChatDetails from "../ChatMaster/ChatListDetails";

class Admin extends React.Component {
  componentDidMount() {
    localStorage.setItem("profileView", "true");
  }
  render() {
    return (
      <div>
        <AdminNAvBar />
        <div className="admin_dash">
          <div className="admin_side_nav_bar">
            <SideNavbarAdmin />
          </div>
          <div className="flex_dash_main">
            <Switch>
              <Redirect
                exact
                from={"/admin-dashboard"}
                to={"/admin-dashboard-feed"}
              />
              <Route
                exact
                path={"/admin-dashboard-feed"}
                component={AdminDash}
              />
              <Route
                exact
                path={"/admin-dashboard-proposal"}
                component={Proposal}
              />
              <Route
                exact
                path={"/admin-dashboard-feed/admin-joblist"}
                component={JobList}
              />
              <Route
                exact
                path={"/admin-dashboard-job-post"}
                component={JobPost}
              />
              <Route
                exact
                path={"/admin-dashboard-settings"}
                component={SettingPage}
              />
              <Route
                exact
                path={"/notification"}
                render={() => <NotificationCustomer />}
              />
              <Route
                exact
                path={"/customer-history"}
                component={CustomerHistory}
              />
              <Route
                exact
                path={"/admin-dashboard-proposal/freelancer-proposal-project"}
                component={ProPosedProfile}
              />
              <Route
                exact
                path={"/admin-dashboard-feed/admin-freelancer-profile"}
                component={FreelancerProfile}
              />
              <Route
                exact
                path={"/admin-dashboard-proposal/chat"}
                component={Chat}
              />
              {/* <Route
                exact
                path={"/admin-dashboard-proposal/chat"}
                component={ChatDemo}
              /> */}
              <Route
                exact
                path={"/admin-dashboard-projects"}
                component={CustomerProjectList}
              />
              <Route
                exact
                path={"/admin-dashboard-projects/project_id"}
                component={CustomerProjectList}
              />
              <Route
                exact
                path={"/admin-dashboard-projects/addReview/:project_id?"}
                component={AddReviews}
              />
              <Route exact path={"/chat-reply"} component={ChatDetails} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
