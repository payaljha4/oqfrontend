/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { useLocation } from 'react-router-dom';
const authAxios = axios.create ({
    baseURL : 'http://oq-django-env.eba-2kgnvyfn.ap-south-1.elasticbeanstalk.com/api/v1/'
  
  })
  // authAxios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
  // authAxios.defaults.headers.post['Accept'] = 'application/json'

  // Function that will be called to refresh authorization
 
  
  

function ChatDemo() {
    const [data, setData] = useState()
    const location = useLocation()
    useEffect(() => {
        
        const refreshToken = localStorage.getItem("refreshToken")
        const refreshAuthLogic = failedRequest =>
        axios.post('http://oq-django-env.eba-2kgnvyfn.ap-south-1.elasticbeanstalk.com/api/v1/auth/token/refresh/',{"refresh":refreshToken}).then(tokenRefreshResponse => {
           localStorage.setItem('accessToken', tokenRefreshResponse.data.access);
           console.log("New token generated")
           failedRequest.response.config.headers['Authorization'] = 'Bearer ' + tokenRefreshResponse.data.token;
           return Promise.resolve();
       });
       createAuthRefreshInterceptor(authAxios, refreshAuthLogic);
       
        console.log(location.data)
        // eslint-disable-next-line
       var sender="ashfaqcustomer@gmail.com"
       // eslint-disable-next-line
       var receiver = "freelancer2@gmail.com"
       

       authAxios(`http://oq-django-env.eba-2kgnvyfn.ap-south-1.elasticbeanstalk.com/chat/`)
    .then(resp=>setData(resp.data))
    }, [])

    return (
        <div>
            {data? <h1> Loading for chat </h1> : data}
            
        </div>
    )
}

export default ChatDemo
