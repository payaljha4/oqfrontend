import React , {useEffect , useState}from 'react'
import { NavLink } from 'react-router-dom'
import './SideNavbarAdmin.css'
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import axios from 'axios';
// import { FlatButtonLight } from './Button'
// import {refreshAuthLogic} from '../Component/refresh-token/refreshAuthLogic'
import createAuthRefreshInterceptor from 'axios-auth-refresh';

const authAxios = axios.create ({
    baseURL : 'http://oq-django-env.eba-2kgnvyfn.ap-south-1.elasticbeanstalk.com/api/v1/'
  
  })
 


const refreshToken = localStorage.getItem("refreshToken")
// Function that will be called to refresh authorization
  const  refreshAuthLogic = failedRequest =>
 axios.post('http://oq-django-env.eba-2kgnvyfn.ap-south-1.elasticbeanstalk.com/api/v1/auth/token/refresh/',{"refresh":refreshToken}).then(tokenRefreshResponse => {
    localStorage.setItem('accessToken', tokenRefreshResponse.data.access);
    console.log("New token generated")
    failedRequest.response.config.headers['Authorization'] = 'Bearer ' + tokenRefreshResponse.data.token;
    return Promise.resolve();
});
  authAxios.defaults.headers.post['Content-Type'] = 'application/json'
createAuthRefreshInterceptor(authAxios, refreshAuthLogic);


function FreelancerUperSideNavBar() {
    const  [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        function getAccessToken(){
            return localStorage.getItem('accessToken');
            }
            authAxios.interceptors.request.use(request => {
              request.headers['Authorization'] = `Bearer ${getAccessToken()}`;
              console.log(request);
              return request;
            });
         authAxios.get("/freelancer/profile/")
         .then( (response)=>{
          const data = response.data
          console.log(data);
          
          setData(data)
          setIsLoading(false)
      
        });
        
    }, [])


    const objectNav= [
        {
            id:1, title:'feed',icon:'fa fa-desktop' , Navlink:'/freelancer-feedback'
        },
        {
            id:2, title:'profile',icon:'fa fa-user' , Navlink:'/freelancer-profile'
        },
        {
            id:3, title:'projects',icon:'fa fa-folder' , Navlink:'/freelancer-dashboard-projects'
        },
        {
            id:4, title:'proposal',icon:'fa fa-pencil-square' , Navlink:'/freelancer-proposal'
        },
        {
            id:5, title:'OQ work history',icon:'fa fa-list' , Navlink:'feed-oq-histoy'
        },
        {
            id:6, title:'Settings',icon:'fa fa-cog' , Navlink:'/freelancer-setting'
        },
        {
            id:7, title:'Log out',icon:'fa fa-sign-out' , Navlink:'/signout'
        },
    ];
    const clients=[
        {id:'1',img:''},
        {id:'2',img:''},
        {id:'4',img:''},
        {id:'5',img:''},
        {id:'6',img:''},
        {id:'8',img:''},
    ]   
    return (
        <> 
          <div className="background_side">
            <div className="admin_side_nav_bar_inner">
               <li className="section_div_card_bloc">
                 <div className="user_details_card">
                     <div className="img_user">
                         <span>Im</span>
                     </div>
                     {isLoading?null:
                      (  <div className="info_user_card">
                        <p className="name_user_info" style={{textTransform:'capitalize'}}>{data.personal.user.username}</p>
                        {data.personal.user.is_verified?
                        <p className="other_user_info">
                        Email <img alt="is verified flag" src="https://icon-library.net//images/verified-icon-png/verified-icon-png-11.jpg" width="16" />
                        </p>: <p className="other_user_info">
                        Email <span style={{color:'red'}}>Not verified  <img alt="is not verified flag" src="https://static.thenounproject.com/png/1903018-200.png" width="16" /> 
                      </span>  </p>}
                        <p className="other_user_info">{data.professional.category}</p>
                        <p className="other_user_info">{data.personal.city}</p>
                                            <p className=" oq-qualified">{data.oq_score[0].oq_qualified? (<p className="other_user_info oq-qualified">OQ Qualified </p>): null  }</p>
                    </div>)}
                  
                 </div>
               </li>
               {objectNav.map((data,index)=>
                <li key={data.id} className="section_div_card_block">
                   <NavLink to = {data.Navlink} style={{textDecoration:'none'}} className="navlink_side_navbar" activeClassName="navlink_admin">
                   <div className="inner_layer_nav_card">
                       <i className={data.icon}></i>
                       <p>{data.title}</p>
                   </div>
                   </NavLink>
               </li>
               )}
            </div>
            <div className="card_freelancers_in_sidenavbar">
              <p>
                Clients
              </p>
              <div className="group_of_freelancer">
              {clients.map((data,i)=>(
                <span style={{margin:'5px'}}>
                <Badge color="secondary" overlap="circle" badgeContent=" " variant="dot">
                <Avatar alt="Remy Sharp" style={{width:'60px',height:'60px'}} src={require('../Assets/avtar.jpg')} className="width_img_nav"/>
               </Badge>
                  </span>
               ))}
              </div>
            </div>
         </div>
            </>
    )
}

export default FreelancerUperSideNavBar