import React, { useState } from 'react'
import DropDown from '../components/dropDown/DropDown'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

function Layout({ children, isDark }) {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='h-screen flex flex-col '>
            <DropDown
                isOpen={isOpen}
                toggle={toggle}
            />
            <Header toggle={toggle} isDark={isDark} />
            <div className='flex-1'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
