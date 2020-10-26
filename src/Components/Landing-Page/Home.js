import React from 'react'
import Appbar from '../common/Navbar'
import Footer from './Footer'
import Section1 from './section1'
import Section2 from './section2'
import Section3 from './section3'
import Section4 from './section4'
import Section5 from './section5'

export const Home = () => {
    return (
        <div>
            <Appbar />
            <Section1 />
            <Section2/>
            <Section3 />
            <Section4 />
            <Section5 />
            <Footer/>
        </div>
    )
}
