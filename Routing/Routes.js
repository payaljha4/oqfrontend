import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Landing from "../Component/Landing/Landing";
import LoginPage from "../Component/Login/Login";
import PostJob from "../Component/PostProject/PostJob";
import Register from "../Component/Register/Register";
import ConfirmPage from "../Component/Signup/ConfirmPage";
import FinalPage from "../Component/Signup/FinalPage";
import title from "../Component/PostProject/title";
import Admin from "../Component/DashboardAdmin/Admin";
// import Freelancer from '../Component/FreelancerDashboard/Freelancer';
import ConfirmTab from "../Component/FreelancerDashboard/Confirmtabs";
import FreelancerRegistration from "../Component/FreelancerDashboard/FreelancerRegistration";
import PublicProfile from "../Component/FreelancerProfile/PublicProfile";
import Freelancer from "../Component/FreelancerDashboard/Freelancer";
import ProfessionalDetails from "../Component/FreelancerDashboard/ProfessionalDetails";
import PaypalApp from "../Component/Paypal/PaypalApp";
import Signout from "../Signout"
import Verify from "../Component/Verify"

import ComingSoon from"../Component/ComingSoon/ComingSoon";


function Routes() {
  return (
    <div>
      {/* <ScrollalwaysTop> */}
      <Switch>
        <Route exact path="/freelancerHomePage" component={Landing} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/verify" component={Verify} />
        {/* <Route exact path="/ConnectWithus" component={Signup} /> */}
        <Route exact path="/customer-confirmation" component={ConfirmPage} />
        <Route exact path="/freelancer-confirmation" component={ConfirmTab} />
        <Route exact path="/register-customer" component={Register} />
        <Route exact path="/public-profile" component={PublicProfile} />
        {/* <Route exact path="/registartion-freelancer" component={FreelancerRegistration} />  */}
        <Route exact path="/signout" component={Signout} />
        <Route
          exact
          path="/registartion-freelancer/:page?"
          render={(props) => <FreelancerRegistration {...props} />}
        />
        <Redirect
          exact
          from="/registartion-freelancer"
          to="/registartion-freelancer/personalDetails"
        />
        <Redirect
          exact
          from="/registartion/socialMediaLink"
          to="/registartion-freelancer/socialMediaLink"
        />
        <Redirect
          exact
          from="/registartion/personalDetails"
          to="/registartion-freelancer/personalDetails"
        />
        <Redirect
          exact
          from="/registartion/onlinePresence"
          to="/registartion-freelancer/onlinePresence"
        />
        <Redirect
          exact
          from="/registartion/protfolio"
          to="/registartion-freelancer/protfolio"
        />
        <Redirect
          exact
          from="/registartion/reviews"
          to="/registartion-freelancer/reviews"
        />
        <Redirect
          exact
          from="/registartion/workExperinece"
          to="/registartion-freelancer/workExperinece"
        />
        <Redirect
          exact
          from="/registartion/profesional"
          to="/registartion-freelancer/proffesioanlDetails"
        />
         <Route exact path="/ComingSoon" component={ComingSoon} />
        <Route exact path="/registartion/profesional" component={ProfessionalDetails} />
        <Route exact path="/registartion-freelancer/proffesioanlDetails" component={ProfessionalDetails} />
        <Route exact path="/postJob-admin-title" component={title} />
        <Route exact path="/customer-welcom" component={FinalPage} />
        <Route exact path="/paypal-payment" component={PaypalApp} />
        <Redirect exact from="/postJob-admin" to="/postJob-admin/title" />
        <Redirect exact from="/postJob/title" to="/postJob-admin/title" />
        <Redirect
          exact
          from="/postJob/discription"
          to="/postJob-admin/discription"
        />
        <Route
          exact
          path="/postJob-admin/:page?"
          render={(props) => <PostJob {...props} />}
        />
        <Redirect exact from="/admin-dashboard" to="/admin-dashboard-feed" />
        {localStorage.getItem('user_type') === 'Freelancer' ? 
        <Route component={Freelancer} />:
        localStorage.getItem('user_type') === 'Customer' ? 
        <Route render={() => <Admin />} />
        :''
         } 
         </Switch>
      {/* </ScrollalwaysTop> */}
    </div>
  );
}

export default Routes;
