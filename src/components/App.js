import React from 'react'
import About from './about/header'
import Services from "./sevices/services"
import Portfolio from "./portfolio/portfolio"
import Testimonials from "./testimonials/testimonials"
import Partnership from "./partnership/partnership"
import SliderData from './about/SliderData'
import Contact from "./contact/contact";
import Nav from "./navbar/navbar"
import img from "./testimonials/data"


export default function App() {
    return (
            <>
                <About  slides={SliderData}/>
                <Services />
                <Portfolio />
                <Partnership slides={SliderData}/>
                <Testimonials  imgg={img}/>
                <Contact />
                <Nav/>
            </>
            
    )
}
