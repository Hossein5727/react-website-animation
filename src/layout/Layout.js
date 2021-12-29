import React, { useState } from 'react'
import DropDown from '../components/dropDown/DropDown'
import Header from '../components/header/Header'

function Layout({ children, isDark }) {

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
            <Header toggle={toggle} isDark={isDark} />
            {children}
        </div>
    )
}

export default Layout
