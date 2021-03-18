import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { FlatButton } from './Button'
import menu from '../icons/menu.svg'
import logoshort from '../Assets/logoshort.png'
import LoginPage from "../Component/Login/Login";


function NavBarLogin() {
    const [menudrop, setmenudrop] = useState(false);
    const [login, setLogin] = useState(false);
   
    const openDropdown = (e) => {
      e.preventDefault();
      setmenudrop(!menudrop);
    };
    const openLogin = (e) => {
      e.preventDefault();
      setLogin(!login);
    };
  
    return (
        <div className="nav_bar_for_auth_pages">
            <div className="nav_bar_for_auth_pages_img">
            <Link to="/">
            <img alt="img" src={logoshort} style={{height:'60px'}}/>
            </Link>
            <img alt="close"  src={menu} onClick={openDropdown} className="menubarone" style={{position:'absolute',right:'20px',top:'5px',width:'36px'}} />
            </div>
            <div className="nav_bar_for_auth_pages_list">
                <li className="nav_bar_for_auth_pages_list_link"><Link className="link_n" to="/">What We do</Link></li>
                <li className="nav_bar_for_auth_pages_list_link"><Link className="link_n" to="/">Join Us</Link></li>
                <li className="nav_bar_for_auth_pages_list_link"><Link className="link_n" to="/">Testimonials</Link></li>
                <div  onClick={openLogin} className="nav_bar_for_auth_pages_list_link bnt1">  
                    <FlatButton text="Login" b_color="#003bfc" color='white' h_color="white" h_c="#003bfc"/>
                </div>
            </div>
            {menudrop ? <ul className="nav_bar_for_auth_pages_list_drop">
                <li className="nav_bar_for_auth_pages_list_link"><Link className="link_n" to="/">What We do</Link></li>
                <li className="nav_bar_for_auth_pages_list_link"><Link className="link_n" to="/">Join Us</Link></li>
                <li className="nav_bar_for_auth_pages_list_link"><Link className="link_n" to="/">Testimonials</Link></li>
                <li className="nav_bar_for_auth_pages_list_link"> <button onClick={openLogin} className="navbar_link">
                  Login
                </button>
                </li>
            </ul>:null}  
            {login ? (
        <LoginPage opentry={login} opentry_solution={openLogin} />
      ) : null}
        </div>
    )
}

export default NavBarLogin
