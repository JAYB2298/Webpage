import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



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
                    <li className="nav-item active">
                        <h6 className="ml-2">Home</h6>
                    </li>
                    <li className="nav-item active">
                        <h6 className="ml-2">About Us</h6>
                    </li>
                    <li className="nav-item active">
                        <h6 className="ml-2">Services</h6>
                    </li>
                    <li className="nav-item active">
                        <h6 className="ml-2">Potfolio</h6>
                    </li>
                    <li className="nav-item active">
                        <h6 className="ml-2">Partnership</h6>
                    </li>
                    <li className="nav-item active">
                        <h6 className="ml-2">Contact</h6>
                    </li>
                </ul>
            </div>
        </footer>  
        </>
    )
}
