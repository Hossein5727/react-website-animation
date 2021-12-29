import React from 'react'
import { contactUsData } from '../../data/contactUsData'
import { officesData } from '../../data/officesData'
import { socialIconsData } from '../../data/socialIconsData'
import { FooterContainer, FooterIcons, FooterIconsContainer, FooterLeftColumn, FooterRightColumn, LinkMenu } from './FooterElements'

function Footer() {
    return (
        <>
            <FooterContainer>
                <FooterLeftColumn>
                    <h1>Let`s find<br /> Your Dream Home</h1>
                </FooterLeftColumn>

                <FooterRightColumn>
                    <div className='flex flex-col justify-center items-start mr-20'>
                        <h1>Contact Us</h1>
                        {contactUsData.map(item => (
                            <LinkMenu key={item.id} to={item.link}>{item.title}</LinkMenu>
                        ))}
                    </div>
                    <div className='flex flex-col justify-center items-start mr-3'>
                        <h1>Offices</h1>
                        {officesData.map(item => (
                            <LinkMenu key={item.id} to={item.link}>{item.title}</LinkMenu>
                        ))}
                    </div>
                </FooterRightColumn>
                <FooterIconsContainer >
                    {socialIconsData.map(item => (
                        <FooterIcons key={item.id}>{item.icon}</FooterIcons>
                    ))}
                </FooterIconsContainer>
            </FooterContainer>
        </>
    )
}

export default Footer
