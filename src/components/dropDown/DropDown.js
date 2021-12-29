import React from 'react'
import { dataMenu } from '../../data/dataMenu'
import { Button } from '../Button'
import { DropClose, DropContainer, DropItems, DropLinkMenu } from './DropDownElements'

function DropDown({ toggle, isOpen }) {
    return (
        <DropContainer isOpen={isOpen}>
            <DropClose onClick={toggle} />
            <DropItems>
                {dataMenu.map(item => (
                    <DropLinkMenu onClick={toggle} to={item.link} key={item.id}>
                        {item.title}
                    </DropLinkMenu>
                ))}
            </DropItems>
            <Button big isDrop to="/">Contact Us</Button>
        </DropContainer>
    )
}

export default DropDown
