import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import imgone from "../../assets/services/logo5.png"
import imgtwo from "../../assets/services/logo4.png"
import imgthree from "../../assets/services/logo3.png"
import imgfour from "../../assets/services/logo2.png"
import './services.css'

export default function services() {
    
    const data=[
        {
            image:imgone,
            des:'Lorem ipsum sit amet, teur dispensing send do',
            l1:'High Quality',
            L2:'design'
        },
        {
            image:imgtwo,
            des:'Lorem ipsum sit amet, teur dispensing send do',
            l1:'Fast & reliable',
            L2:'websites'
        },
            
        {
            image:imgthree,
            des:'Lorem ipsum sit amet, teur dispensing send do',
            l1:'Social media',
            L2:'marketing'
        },
        {   image:imgfour,
            des:'Lorem ipsum sit amet, teur dispensing send do',
            l1:'Mobile Apps',
            L2:''
        },
        
        ]
    
    const card=(card,index)=>{
        return(
            <div className="col-md-6 mt-3" key={index}>
                    <div>
                        <div>
                            <div className="col">
                                <img src={card.image}/>
                            </div>
                            <div className="col">
                                <h5 className="text-primary">{card.l1}</h5>
                                <h5 className="text-primary">{card.L2}</h5>
                            </div>
                        </div>
                        <div>
                            <p>{card.des}</p>
                        </div>
                    </div>
            </div>
        )
    }
    
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <h4>WHAT WE DO AND</h4>
                    <h4><strong>WHAT WE CAN OFFER</strong></h4>
                </div>
                <div className="col-md-7">
                    <p>We are offering our a team with exclusive full package services to help buisness grow</p>
                </div>
            </div>
            <div className="row">
                {data.map(card)};
            </div>
            <div className="row text-white mb-4 bg">
                <div className="col-md-4">
                    <h4>STARTING UP A </h4>
                    <h4><strong>NEW BUISINESS??</strong></h4>
                </div>
                <div className="col-md-4">
                    <p>We have the perfect package to help you get your buisness up and running quickly</p>
                </div>
                <div className="col-md-4 mt-4">
                    <h6>[GET STARTED]</h6>
                </div>
            </div>
        </div>
    )
}
