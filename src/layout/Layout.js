import React, { useState } from 'react'
import DropDown from '../components/dropDown/DropDown'
import Header from '../components/header/Header'

function Layout({ children }) {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='h-screen'>
            <DropDown
                isOpen={isOpen}
                toggle={toggle}
            />
            <Header toggle={toggle} />
            {children}
        </div>
    )
}

export default Layout
