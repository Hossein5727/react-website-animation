import React from 'react'
import AboutUs from '../components/about/AboutUs'
import { aboutUsData } from '../data/aboutUsData'

function AboutPage() {
    return (
        <div >
            <AboutUs {...aboutUsData} />
        </div>
    )
}

export default AboutPage
