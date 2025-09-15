import React from "react";
import './Navbar.css'

function Navbar() {
    return(
        <div className='navbar-container'>

            <div className="navbar-logo-container">-
            </div>

         <div className="navbar-links-container"> 
            <h3>Traveled</h3>
        <Link to={'/'}>Home</Link>
        <Link to={'/listings'}>Listings</Link>
        <Link to={'/bookings'}>Bookings</Link>
         </div>  

        </div>
    )
}

export default Navbar