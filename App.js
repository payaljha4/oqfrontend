import React, { Suspense, lazy } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "../src/Component/Landing/Landing";
import Footer from "./Layout/Footer";
import Loader from "./Loader";
import axios from 'axios'
import { useEffect } from "react";
// import Admin from './Component/DashboardAdmin/Admin';

const Routes = lazy(() => import("./Routing/Routes"));
require("dotenv").config({ path: __dirname + "/.env" });

function App() {

  const isFreelancer = localStorage.user_type === 'Freelancer'
  const isCustomer = localStorage.user_type === 'Customer'
  
  useEffect(() => {
    const request = async () => {
      try {
        // const response = await axios.get('http://oq-django-env.eba-2kgnvyfn.ap-south-1.elasticbeanstalk.com/swagger/?format=openapi/api/messa');
        if (isFreelancer) {
          
          
          const oqWorkHistory2 = await axios.get('http://oq-django-env.eba-2kgnvyfn.ap-south-1.elasticbeanstalk.com/api/v1/freelancer/freelancer-oq-work-history/', {
            headers: {
              'Authorization': 'Bearer ' + localStorage.accessToken
            }
          });
          console.log(oqWorkHistory2.data);
        }
        else {
          const oqWorkHistory = await axios.get('http://oq-django-env.eba-2kgnvyfn.ap-south-1.elasticbeanstalk.com/api/v1/customer/customer-oq-work-history/', {
            headers: {
              'Authorization': 'Bearer ' + localStorage.accessToken
            }
          });
          console.log(oqWorkHistory.data);
        }

      } catch (err) {
        console.log(err.response);
        console.log(err.customerProjects);
        console.log(err.oqWorkHistory);
      }
    }


    request();
  }, [])


  return (
    <div className="App">
      <Router baseName={"/"}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Suspense
              fallback={
                <div>
                  <Loader />
                </div>
              }
            >
              <Route component={Routes} />
              <Footer />
            </Suspense>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
