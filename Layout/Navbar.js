import React, { useState, Fragment } from "react";
import logo_c from "../Assets/logobtm.png";
import { NavLink, Link } from "react-router-dom";
import { FlatButton } from "../Layout/Button";
import menu from "../icons/menu.svg";
import LoginPage from "../Component/Login/Login";
import Signup from "../Component/Signup/Signup";

function Navbar() {
  const [menudrop, setmenudrop] = useState(false);
  const [login, setLogin] = useState(false);
  const [open, setOpen] = React.useState(false);
  const openDropdown = (e) => {
    e.preventDefault();
    setmenudrop(!menudrop);
  };
  const openLogin = (e) => {
    e.preventDefault();
    setLogin(!login);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <div className="navbar_landing_dashboard_outline">
        <div className="navbar_landing_inner">
          <div className="navbar_landing_inner_two_col flex">
            <li className="navbar_landing_inner_two_col_cols img">
              <Link to="/">
                <img alt="logo" src={logo_c} className="img_logo" />
              </Link>
            </li>
            <li className="navbar_landing_inner_two_col_cols">
              <div className="navlink_center_span">
                <NavLink to="/" className="navbar_link">
                  <Link to="/ComingSoon"
                className="navbar_link">  How it works</Link>
                </NavLink>
              </div>
            </li>
            <li className="navbar_landing_inner_two_col_cols">
              <div className="navlink_center_span">
                <NavLink to="/" className="navbar_link">
                 
                  <Link to="/ComingSoon"
                className="navbar_link">   Browse Jobs</Link>
                </NavLink>
              </div>
            </li>
          </div>
          <div className="navbar_landing_inner_two_col">
            <li className="navbar_landing_inner_two_col_cols">
              <div className="navlink_center_span">
                <button onClick={openLogin} className="navbar_link">
                  Login
                </button>
              </div>
            </li>
            <li className="navbar_landing_inner_two_col_cols">
              <div className="navlink_center_span">
                <button onClick={handleClickOpen} className="navbar_link">
                  Signup
                </button>
              </div>
            </li>
            <li className="navbar_landing_inner_two_col_cols btn">
              <div className="navlink_center_span">
                <Link to="/postJob-admin/title" style={{textDecoration:'none'}}>
                  <FlatButton
                    text="Post a Project"
                    b_color="#003bfc"
                    color="white"
                    h_color="white"
                    h_c="#003bfc"
                  />
                </Link>{" "}
              </div>
            </li>
          </div>
        </div>
      </div>
      <div className="nav_bar_humberger">
        <img alt="logo" src={logo_c} className="img_logo_mobile" />
        <img
          alt="close"
          onClick={openDropdown}
          src={menu}
          className="menubar"
        />
        {menudrop ? (
          <div className="menu_drop_down_list">
            <li>
              <NavLink to="/" className="navbar_link_drop">
                How it works
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="navbar_link_drop">
                Blog
              </NavLink>
            </li>
            <li>
              <button onClick={openLogin} className="navbar_link_drop">
                Login
              </button>
            </li>
            <li>
              <button onClick={handleClickOpen} className="navbar_link_drop">
                Signup
              </button>
            </li>
            <li>
              <Link to="/postJob-admin/title" style={{textDecoration:'none'}}>
                <FlatButton
                  text="Post a Project"
                  b_color="#003bfc"
                  color="white"
                  h_color="white"
                  h_c="#003bfc"
                />
              </Link>
            </li>
          </div>
        ) : null}
      </div>

      {login ? (
        <LoginPage opentry={login} opentry_solution={openLogin} />
      ) : null}
      {open ? <Signup opentry={open} opentry_solution={handleClose} /> : null}
    </Fragment>
  );
}

export default Navbar;
