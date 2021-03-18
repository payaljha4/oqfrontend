import React, { useState } from 'react'
import { NavLink ,Link} from 'react-router-dom'
import logo_c from '../Assets/logobtm.png'
import menu from '../icons/menu.svg'

function NavBarLogin() {
    const [menudrop, setmenudrop] = useState(false)

    const openDropdown = (e) => {
        e.preventDefault();
        setmenudrop(!menudrop)
    }
    return (
        <div className="nav_bar_for_auth_pages">
            <div className="navbar_landing_inner_two_col flex">
                <li className="navbar_landing_inner_two_col_cols img">
                <Link to="/"> <img alt="logo" src={logo_c} className="img_logo" />
                </Link>
                </li>
                <li className="navbar_landing_inner_two_col_cols seach_input">
                    <input type="search" placeholder="Enter to search" className="search_btn_input" />
                </li>
                <img alt="close" src={menu} onClick={openDropdown} className="menubarone" style={{ position: 'absolute', right: '20px', top: '5px', width: '36px' }} />
            </div>
            <div className="navbar_landing_inner_two_col hide_navbar">
                <li className="navbar_landing_inner_two_col_cols">
                    <NavLink to="/ConnectWithus" className="navbar_link_admin">Jobs</NavLink>
                </li>
                <li className="navbar_landing_inner_two_col_cols">
                    <NavLink to="/ConnectWithus" className="navbar_link_admin">Hired</NavLink>
                </li>
                <li className="navbar_landing_inner_two_col_cols">
                    <NavLink to="/ConnectWithus" className="navbar_link_admin">Notification</NavLink>
                </li>
                <li className="navbar_landing_inner_two_col_cols">
                    <NavLink to="/ConnectWithus" className="navbar_link_admin">Profile</NavLink>
                </li>
            </div>
            {menudrop ? <div className="nav_bar_for_auth_pages_list_drop">
                <li>
                <i className="fa fa-search" ></i>
                <input type="search" placeholder="Enter to search" className="search_btn_input" />
                </li>
                <li><NavLink to="/" className="navbar_link_drop">Jobs</NavLink></li>
                <li><NavLink to="/" className="navbar_link_drop">Hired</NavLink></li>
                <li><NavLink to="/openLogin" className="navbar_link_drop">Notification</NavLink></li>
                <li><NavLink to="/ConnectWithus" className="navbar_link_drop">Profile</NavLink></li>
            </div> : null}
        </div>
    )
}

export default NavBarLogin
