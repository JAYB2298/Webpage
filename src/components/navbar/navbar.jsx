import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-scroll'

export default function Navbar() {
    return (
        <>
          <footer className="navbar navbar-expand-lg navbar-dark bg-primary mt-4 mb-4">
            <div className="collapse navbar-collapse">
                <ul className="text-white">
                    <li className="nav-item active">
                        <h6>Copyrights@2016 Privacy Policy</h6>
                    </li>
                </ul>    
                <ul className="navbar-nav ml-auto text-white">
                    <Link to="about" className="ml-2 text-white" smooth={true} duration={1000}>
                        Home
                    </Link>
                    <Link to="about" className="ml-2 text-white" smooth={true} duration={1000}>
                        About Us
                    </Link>
                    <Link to="services" className="ml-2 text-white" smooth={true} duration={1000}>
                        Services
                    </Link>
                    <Link to="portfolio" className="ml-2 text-white" smooth={true} duration={1000}>
                        Potfolio
                    </Link>
                    <Link to="partnership" className="ml-2 text-white" smooth={true} duration={1000}>
                        Partnership
                    </Link>
                    <Link to="contact" className="ml-2 text-white" smooth={true} duration={1000}>
                        Contact
                    </Link>
                </ul>
            </div>
        </footer>  
        </>
    )
}
