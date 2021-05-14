import React from 'react'
import imgone from "../../assets/logo/logo.png"
import imgtwo from "../../assets/logo/logo2.jpg"
import imgthree from "../../assets/logo/logo3.jpg"
import "./portfolio.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

export default function portfolio() {
    
    const LogoData=[
        {image:imgone},{image:imgtwo},{image:imgthree},{image:imgone},
        {image:imgtwo},{image:imgthree},{image:imgone},{image:imgtwo}
        ]

    const h=[{h:"Sort by:"},{h:"All"},{h:"WebDesign"},{h:"Mobile Apps"},{h:"Logo"},]
    
        let card=(card,index)=>{
            return(
                <div className="col-md-3 mt-2" key={index}>
                    <div className="card">
                        <img src={card.image} alt="" className=""/>
                                 
                            <button className="btn text-primary text-center mt-2 btn-transparent text-primary ">
                                <Link to="/demo">VIEW DETAIL</Link>
                            </button>                
                    </div>
                </div>
            )
        }

        let nav=(nav,index)=>{
            return(
                <li key={index} className="nav-item active ml-3">
                    <Link to="/Demo" className="nav-link">
                        <h5>{nav.h}</h5>
                    </Link>
                </li>
            )
        }

    return (
        <div id="portfolio" className="container">
            <div className="row">
                <div className="col-md-5">
                    <h4>WE ARE DIVERSE</h4>
                    <h4><strong>OUR PORTFOLIO</strong></h4>
                </div>
                <div className="col-md-7">
                    <nav className="navbar navbar-expand-lg mt-4 mb-4">
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav ">
                                {h.map(nav)}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="row mb-3">
                {LogoData.map(card)}
            </div>
        </div>
        
    )
}
