import React, { useState } from 'react'
import { dataMenu } from '../../data/dataMenu'
import { Button } from '../Button'
import { Navbar, NavBars, NavItems, NavLogo, NavMenuLink } from './HeaderElements'

function Header({ toggle }) {
    return (
        <Navbar>
            <NavLogo to="/">Hossein</NavLogo>
            <NavBars onClick={toggle} />

            <NavItems>
                {dataMenu.map(item => (
                    <NavMenuLink key={item.id} to={item.link}>
                        {item.title}
                    </NavMenuLink>
                ))}
            </NavItems>
            <Button to="/" responsive>Contact us</Button>
        </Navbar>
    )
}

export default Header
