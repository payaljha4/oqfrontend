import React from 'react';
import logo from '../Assets/logobtm.png';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div className="footer_outline_bottom">
            <div className="footer_bottom_innner">
                <div className="footer_bottom_columns">
                    <img src={logo} alt="logo" />
                </div>
                <div className="footer_bottom_columns">
                <li><h3>Terms</h3></li>
                <li><Link to="/" className="list_of_link">Privacy Policy</Link></li>
                <li><Link to="/" className="list_of_link">Terms and Condition</Link></li>
                <li><Link to="/" className="list_of_link">Copyright Policy</Link></li>
                <li><Link to="/" className="list_of_link">Code of Conduct</Link></li>
                <li><Link to="/" className="list_of_link">Fees and Charges</Link></li>
                <li><Link to="/" className="list_of_link">Help and Support</Link></li>
                <li><Link to="/" className="list_of_link">FAQ</Link></li>
                </div>
                <div className="footer_bottom_columns">
                <li><h3>Freelancers</h3></li>
                <li><Link to="/" className="list_of_link">Categories</Link></li>
                <li><Link to="/" className="list_of_link">Projects</Link></li>
                <li><Link to="/" className="list_of_link">Freelancers</Link></li>
                </div>
                <div className="footer_bottom_columns">
                <li><h3>About the company</h3> </li>
                <li><Link to="/" className="list_of_link">Partnership</Link></li>
                <li><Link to="/" className="list_of_link">Help and Support</Link></li>
                <li><Link to="/" className="list_of_link">Terms of Use</Link></li>
                <li><Link to="/" className="list_of_link">Contact Us</Link></li>

                </div>
            </div>
        </div>
    )
}

export default Footer
