"use client";

import Image from 'next/image'
import Link from 'next/link'
import { createContext, useContext, useEffect, useState } from 'react';
import { scrollIntoView } from "seamless-scroll-polyfill";
import DonateButton from './DonateButton';

const NavbarContext = createContext()


const Nav = () => {
    const [activeTab, setActiveTab] = useState('')
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [clientWindowHeight, setClientWindowHeight] = useState("")
    const tabs = ['Home', 'About', 'Events', 'Contact', 'Sponsors', 'Socials']
    
    const scrollToSection = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
            setActiveTab(sectionId)
            scrollIntoView(section, {behavior: 'smooth'})
        }
    };

    const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
    };

    useEffect(() => {
        console.log(toggleDropdown)
    },[toggleDropdown])

    useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    useEffect(() => {
        const closestTab = tabs.reduce((prev, curr) => {
            const el = document.querySelector('#' + curr.toLowerCase())
            const pre_el = document.querySelector('#' + prev.toLowerCase())
            return (Math.abs(el.getBoundingClientRect().top - 0) <= Math.abs(pre_el.getBoundingClientRect().top - 0) ? curr : prev)
        })
        setActiveTab('#' + closestTab.toLowerCase())
    },[clientWindowHeight])

    return (
        <nav className='flex-between w-full py-2 fixed lg:px-10 px-2 top-0 backdrop-blur bg-white/20 shadow-lg'>
            {/* Logo */}
          <Link href="/" className='flex gap-2 flex-center'>
              <Image
                  src="/assets/images/cw-logo-orange.ico"
                  alt="Charity Week Logo"
                  width={60}
                  height={60}
                  className="object-contain"
              />
              <p className='logo_text pr-5'>CW 2023</p>
          </Link>

          {/* Desktop Navigation */}
          <div className='md:flex hidden justify-center'>
                <div className='flex lg:gap-3 gap-1'>
                    <NavbarContext.Provider value={activeTab}>
                        {tabs.map(tab =>
                            <Tab name={tab} scrollToSection={scrollToSection} key={tab} />)}
                    </NavbarContext.Provider>
                    <DonateButton style={'orange'}/>
              </div>
            </div>
            
            {/* Mobile navigation */}
            <div className='md:hidden flex-center w-full absolute'>
                <DonateButton style={'pulse large'}/>
                </div>
            <div className='md:hidden'>
                <div className=''>
                    <Image
                        src='/assets/icons/menu.svg'
                        height={60}
                        width={60}
                        onClick={ () => setToggleDropdown(prev => !prev)} />
                </div>
            </div>
            </nav>
  )
}

const Tab = ({ name, scrollToSection}) => {
    const id = '#' + name.toLowerCase()
    const activeTab = useContext(NavbarContext)
    return (
        <Link href={id}
            className={`btn ${activeTab === id && 'active'}`}
            scroll={false}
            onClick={() => scrollToSection(id)}>
                      {name}
                  </Link>
    )
}

export default Nav