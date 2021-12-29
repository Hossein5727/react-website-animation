import { Button } from '@mui/material'
import React from 'react'
import { AboutContainer, AboutLeftColumn, AboutRectangle, AboutRightColumn } from './AboutUsElements'

function AboutUs({
    title,
    desc,
    desc2,
    image,
    animationLeft,
    animationRight,
}) {
    return (
        <AboutContainer>
            <AboutRectangle />
            <p className='flex-1 flex flex-wrap'>
                <AboutLeftColumn data-aos={animationLeft}>
                    <h1>{title}</h1>
                    <p>{desc}</p>
                    <p>{desc2}</p>
                    <Button big isDrop to="/">Learn More</Button>
                </AboutLeftColumn>
                <AboutRightColumn data-aos={animationRight}>
                    <img
                        src={image}
                        alt={title}
                    />
                </AboutRightColumn>
            </p>
            <AboutRectangle />
        </AboutContainer>
    )
}

export default AboutUs
