import React from 'react'
import "../ComingSoon/styles.css";
import logo_c from "../../Assets/logobtm.png";
import { Link } from "react-router-dom";
function ComingSoon() {
    return (
        <div class="coming-category">
             <Link to="/">
                <img alt="logo" src={logo_c} className="img_logo" />
              </Link>
            <img alt="" src="https://cdn.lifehack.org/wp-content/uploads/2014/02/Freelance-Writers-Desk.jpeg" class="ComingSoon-page"></img>
           <h1 class="styling">ComingSoon............</h1> 
        </div>
    )
}

export default ComingSoon
