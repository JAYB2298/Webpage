import React from 'react'
import About from './about/header'
import Services from "./sevices/services"
import Portfolio from "./portfolio/portfolio"
import Testimonials from "./testimonials/testimonials"
import Partnership from "./partnership/partnership"
import SliderData from './about/SliderData'
import Contact from "./contact/contact";
import Data from "./testimonials/data"
import Nav from "./navbar/navbar"


export default function App() {
    return (<>
            
            <About id="section-1" slides={SliderData}/>
            <Services id="section-2"/>
            <Portfolio id="section-3"/>
            <Partnership id="section-4" slides={SliderData}/>
            <Testimonials id="section-5" dataa={Data}/>
            <Contact id="section-6"/>
            <Nav/>
            </>
    )
}
