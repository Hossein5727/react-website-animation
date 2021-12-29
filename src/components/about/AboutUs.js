import React from 'react'
import { Button } from '../Button'
import { AboutContainer, AboutLeftColumn, AboutRectangle, AboutRectangle2, AboutRightColumn, ColumnContainer } from './AboutUsElements'

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
            <ColumnContainer>
                <AboutLeftColumn className='animate__animated  animate__backInDown'>
                    <h1>{title}</h1>
                    <p>{desc}</p>
                    <p>{desc2}</p>
                    <Button big isDrop to="/">Learn More</Button>
                </AboutLeftColumn>
                <AboutRightColumn className='animate__animated  animate__backInUp'>
                    <img
                        src={image}
                        alt={title}
                    />
                </AboutRightColumn>
            </ColumnContainer>
            <AboutRectangle2 />
        </AboutContainer>
    )
}

export default AboutUs
