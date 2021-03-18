import { Divider } from "@material-ui/core";
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logoshort from "../Assets/logoshort.png";
import menu from "../icons/menu.svg";

function AdminNAvBar() {
  const [menudrop, setmenudrop] = useState(false);
  const [showDropJob, setshowDropJob] = useState(false);

  const openDropdown = (e) => {
    e.preventDefault();
    setmenudrop(!menudrop);
  };
  const openDropdow = (e) => {
    e.preventDefault();
    setshowDropJob(!showDropJob);
  };
  return (
    <div className="nav_bar_for_auth_pages">
      <div className="nav_bar_for_auth_pages_img">
        <Link to="/">
          <img alt="img" src={logoshort} style={{ height: "60px" }} />
        </Link>
        <img
          alt="close"
          src={menu}
          onClick={openDropdown}
          className="menubarone"
          style={{
            position: "absolute",
            right: "20px",
            top: "5px",
            width: "36px",
          }}
        />
      </div>
      <div className="nav_bar_for_auth_pages_list_admin">
        <li className="nav_bar_for_auth_pages_list_link">
          <NavLink
            className="link_n_admin"
            activeClassName="link_n_admin_active"
            to="/notification"
          >
            <p className="span_img_bacj">
              <i className="fa fa-bell"></i>
            </p>
            <p>Notifications</p>
          </NavLink>
        </li>
        <li className="nav_bar_for_auth_pages_list_link">
          <NavLink
            className="link_n_admin"
            activeClassName="link_n_admin_active"
            to="/chat-reply"
          >
            <p className="span_img_bacj">
              <i className="fa fa-comments"></i>
            </p>
            <p>OQ Chats</p>
          </NavLink>
        </li>
        {localStorage.getItem("free") === "true" ? (
          <li className="nav_bar_for_auth_pages_list_link show_dropdown_onhover" onClick={openDropdow}>
            <div
              className="link_n_admin"
              activeClassName="link_n_admin_active"
              to="/jobs"
            >
              <p className="span_img_bacj">
                <i className="fa fa-thumbs-up"></i>
              </p>
              <p>Jobs</p>
            </div>
            {showDropJob ? 
            <div className="dropdown_job_list">
              <li>
                <NavLink to="/" className="navlink_drop_down_jobs">
                   All Hired Jobs
                </NavLink>
              </li>
              <Divider style={{width:'98%',background:'whitesmoke',margin:'0 auto'}}/>
              <li>
                <NavLink to="/" className="navlink_drop_down_jobs">
                   In Work Jobs
                </NavLink>
              </li>
              <Divider style={{width:'98%',background:'whitesmoke',margin:'0 auto'}}/>

              <li>
                <NavLink to="/" className="navlink_drop_down_jobs">
                   Jobs Saved
                </NavLink>
              </li>
            </div>: ''}
          </li>
        ) : localStorage.getItem("free") === "false" ? (
          <li className="nav_bar_for_auth_pages_list_link">
            <NavLink
              className="link_n_admin"
              activeClassName="link_n_admin_active"
              to="/freelancerAll"
            >
              <p className="span_img_bacj">
                <i className="fa fa-thumbs-up"></i>
              </p>
              <p>Freelancers</p>
            </NavLink>
          </li>
        ) : (
          ""
        )}
      </div>
      {menudrop ? (
        <div className="nav_bar_for_auth_pages_list_drop">
          <li>
            <Link className="navbar_link_drop" to="/notification">
              Notifications
            </Link>
          </li>
          <Divider style={{width:'98%',background:'whitesmoke',margin:'0 auto'}}/>
          
          <li>
            <Link className="navbar_link_drop" to="/chat-reply">
              OQ Chats
            </Link>
          </li>
          <Divider style={{width:'98%',background:'whitesmoke',margin:'0 auto'}}/>

          {localStorage.getItem("free") === "true" ? (
          <li onClick={openDropdow}>
           
            <Link className="navbar_link_drop">
              Jobs
            </Link>
            <Divider style={{width:'98%',background:'whitesmoke',margin:'0 auto'}}/>

            {showDropJob ? 
            <ul>
              <li>
                <NavLink to="/" className="navlink_drop_down_jobs_droplist">
                   All Hired Jobs
                </NavLink>
              </li>
              <Divider style={{width:'98%',background:'whitesmoke',margin:'0 auto'}}/>
              <li>
                <NavLink to="/" className="navlink_drop_down_jobs_droplist">
                   In Work Jobs
                </NavLink>
              </li>
              <Divider style={{width:'98%',background:'whitesmoke',margin:'0 auto'}}/>

              <li>
                <NavLink to="/" className="navlink_drop_down_jobs_droplist">
                   Jobs Saved
                </NavLink>
              </li>
            </ul>: ''}
          </li>
        ) : localStorage.getItem("free") === "false" ? (
          <li className="nav_bar_for_auth_pages_list_link">
          <li>
            <Link className="navbar_link_drop" to="/freelancers_list">
              Freelancer
            </Link>
          </li>
          </li>
        ) : (
          ""
        )}
        </div>
      ) : null}
    </div>
  );
}
export default AdminNAvBar;
