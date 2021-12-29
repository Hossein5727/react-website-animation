import React from 'react'
import { Button } from '../Button'
import { InfoContainer, InfoLeftColumn, InfoRightColumn } from './InfoElements'



function InfoSection({
    title,
    desc,
    desc2,
    buttonLabel,
    image
}) {
    return (
        <InfoContainer>
            <InfoLeftColumn
                data-aos={"fade-right"}
                data-aos-delay="200">
                <h1>{title}</h1>
                <p>{desc}</p>
                <p>{desc2}</p>
                <Button isDrop to="/">{buttonLabel}</Button>
            </InfoLeftColumn>

            <InfoRightColumn
                data-aos={"fade-left"}
                data-aos-delay="200"
            >
                <img src={image} />
            </InfoRightColumn>

        </InfoContainer>
    )
}

export default InfoSection
