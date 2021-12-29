import React from 'react'
import Hero from '../components/hero/Hero'
import InfoSection from '../components/infoSection/InfoSection'
import { infoData1 } from '../data/infoData'

function HomePage() {
    return (
        <div>
            <Hero />
            <InfoSection {...infoData1} />
        </div>
    )
}

export default HomePage
