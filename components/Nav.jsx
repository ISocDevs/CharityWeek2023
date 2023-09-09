"use client";

import Image from 'next/image'
import Link from 'next/link'
import { createContext, useContext, useEffect, useState } from 'react';
import { scrollIntoView } from "seamless-scroll-polyfill";

const NavbarContext = createContext()


const Nav = () => {
    const [activeTab, setActiveTab] = useState('#home')
    const [clientWindowHeight, setClientWindowHeight] = useState("")
    const tabs = ['Home', 'About', 'Events', 'Contact', 'Sponsors']
    
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
      <nav className='flex-between w-full pt-3 fixed md:px-10 px-3 top-0 backdrop-blur bg-white/20 shadow-lg'>
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
          <div className='sm:flex hidden'>
                <div className='flex gap-3'>
                    <NavbarContext.Provider value={activeTab}>
                        {tabs.map(tab =>
                            <Tab name={tab} scrollToSection={scrollToSection} key={tab} />)}
                    </NavbarContext.Provider>
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
            className={`black_btn ${activeTab === id && 'active'}`}
            scroll={false}
            onClick={() => scrollToSection(id)}>
                      {name}
                  </Link>
    )
}

export default Nav