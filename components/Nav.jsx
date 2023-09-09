"use client";

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { scrollIntoView } from "seamless-scroll-polyfill";


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
                  <Link href='#home'
                        className={`black_btn ${activeTab === '#home' && 'active'}`}
                        scroll={false}
                    onClick={() => scrollToSection('#home')}>
                      Home
                  </Link>
                  <Link href='#about'
                        className={`black_btn ${activeTab === '#about' && 'active'}`}
                        scroll={false}
                    onClick={() => scrollToSection('#about')}>
                      About
                  </Link>
                  <Link href='#events'
                        className={`black_btn ${activeTab === '#events' && 'active'}`}
                        scroll={false}
                    onClick={() => scrollToSection('#events')}>
                      Events
                    </Link>
                    <Link href='#contact'
                        className={`black_btn ${activeTab === '#contact' && 'active'}`}
                        scroll={false}
                    onClick={() => scrollToSection('#contact')}>
                      Contact
                    </Link>
                    <Link href='#sponsors'
                        className={`black_btn ${activeTab === '#sponsors' && 'active'}`}
                        scroll={false}
                    onClick={() => scrollToSection('#sponsors')}>
                      Sponsors
                  </Link>
              </div>
          </div>
            </nav>
  )
}

export default Nav