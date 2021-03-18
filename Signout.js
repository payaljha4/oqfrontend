import React ,{useState} from 'react'
import axios from 'axios'
import Landing from "../src/Component/Landing/Landing"
import { Redirect , useHistory } from "react-router-dom";

import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { FlatButton } from './Layout/Button';


const authAxios = axios.create ({
  baseURL : 'http://oq-django-env.eba-2kgnvyfn.ap-south-1.elasticbeanstalk.com/api/v1/'

})
authAxios.defaults.headers.post['Content-Type'] = 'application/json'
const refreshToken = localStorage.getItem("refreshToken")
// Function that will be called to refresh authorization
const refreshAuthLogic = failedRequest =>
 axios.post('http://oq-django-env.eba-2kgnvyfn.ap-south-1.elasticbeanstalk.com/api/v1/auth/token/refresh/',{"refresh":refreshToken}).then(tokenRefreshResponse => {
    localStorage.setItem('accessToken', tokenRefreshResponse.data.access);
    console.log("New token generated")
    failedRequest.response.config.headers['Authorization'] = 'Bearer ' + tokenRefreshResponse.data.token;
    return Promise.resolve();
});
createAuthRefreshInterceptor(authAxios, refreshAuthLogic);


function Signout() {
    const history = useHistory();
    // eslint-disable-next-line no-unused-vars
    const [islogout, setLogout] = useState(false)
    localStorage.setItem("free",false);
    
    console.log("signout page")
     
  authAxios.interceptors.request.use(request => {
    request.headers['Authorization'] = `Bearer ${getAccessToken()}`;
    console.log(request);
    return request;
});
function getAccessToken(){
  return localStorage.getItem('accessToken');

}
const sendHome=(e)=>{
  e.preventDefault();
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("accessToken");
  history.push("/")
}

    authAxios.post("auth/logout/",{refresh:refreshToken})
    .then( function(response){

            history.push('/')
  
        
    });
   
    return (
        <div>
          <center style={{ margin:'2rem' }}>
            {islogout? <Redirect to ="/freelancerHomePage" component ={Landing}/>
            : <div> <h1> Logging you out  </h1>
                <div onClick={sendHome} style={{ margin:'2rem' }}><FlatButton text="Go back to Home" b_color="#003bfc" color='white' h_color="#003bfc49" h_c="#003bfc" /></div>
                
               </div> }
               </center>

        </div>
    )
}

export default Signout
