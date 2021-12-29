import React from 'react'
import { Button } from '../Button'
import { InfoContainer, InfoLeftColumn, InfoRightColumn } from './InfoElements'

function InfoSection({
    title,
    desc,
    desc2,
    buttonLabel,
    reverse,
    image,
    animationLeft,
    animationRight
}) {
    return (
        <InfoContainer reverse={reverse}>
            <InfoLeftColumn
                data-aos={animationLeft}
                data-aos-delay="200">
                <h1>{title}</h1>
                <p>{desc}</p>
                <p>{desc2}</p>
                <Button big isDrop to="/">{buttonLabel}</Button>
            </InfoLeftColumn>

            <InfoRightColumn
                data-aos={animationRight}
                data-aos-delay="200"
            >
                <img
                    src={image}
                    alt={title}
                />
            </InfoRightColumn>
        </InfoContainer>
    )
}

export default InfoSection
