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
            scrollIntoView(section, { behavior: 'smooth' })
        }
    };

    const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
    };

    const handleClick = (e) => {
        if (!e.target.closest('#menu-button')) {
            // Click occurred outside the Image (menu button)
            setToggleDropdown(false);
        }
    };

    useEffect(() => {
        console.log(toggleDropdown)
    }, [toggleDropdown])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        document.body.addEventListener("click", handleClick);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.body.removeEventListener("click", handleClick);
        };
    }, []);

    useEffect(() => {
        const closestTab = tabs.reduce((prev, curr) => {
            const el = document.querySelector('#' + curr.toLowerCase())
            const pre_el = document.querySelector('#' + prev.toLowerCase())
            return (Math.abs(el.getBoundingClientRect().top - 0) <= Math.abs(pre_el.getBoundingClientRect().top - 0) ? curr : prev)
        })
        try {
            setActiveTab('#' + closestTab.toLowerCase())
        } catch {
        }
    }, [clientWindowHeight])

    return (
        <nav className='flex-center z-30 flex-shrink-0 w-full py-2 fixed lg:px-10 px-2 min-[800px]:top-0 max-[799px]:bottom-0 backdrop-blur bg-white/20 shadow-lg'>
            {/* Logo */}
            <Link href="/" className='flex gap-2 flex-center'>
                <Image
                    src="/assets/images/cw-logo-orange.ico"
                    alt="Charity Week Logo"
                    width={65}
                    height={65}
                    className="object-contain"
                />
                <p className='logo_text pr-5'>CW 2023</p>
            </Link>

            {/* Desktop Navigation */}
            <div className='min-[800px]:flex hidden justify-center flex-grow'>
                <div className='flex lg:gap-3 gap-1'>
                    <NavbarContext.Provider value={activeTab}>
                        {tabs.map(tab =>
                            <Tab name={tab} scrollToSection={scrollToSection} key={tab} style='btn' />)}
                    </NavbarContext.Provider>
                    <DonateButton style={'orange'} />
                </div>
            </div>

            {/* This exists just to make the formatting even and to have the tabs centered always
            I tried many other methods but this one gave me my desired result */}
            <Link href="/" className='max-[799px]:hidden flex gap-2 flex-center flex-shrink opacity-0 pointer-events-none'>
                <Image
                    src="/assets/images/cw-logo-orange.ico"
                    alt="Charity Week Logo"
                    width={65}
                    height={65}
                    className="object-contain"
                />
                <p className='logo_text pr-5'>CW 2023</p>
            </Link>

            {/* Mobile navigation */}
            <div className='min-[800px]:hidden flex-center w-1/2'>
                <DonateButton style={'pulse large'} />
            </div>
            <div className='min-[800px]:hidden cursor-pointer'>
                <div id="menu-button">
                    <Image
                        src='/assets/icons/menu.svg'
                        height={60}
                        width={60}
                        alt="Menu Button"
                        onClick={() => setToggleDropdown(prev => !prev)} />
                    <div className={`dropdown ${!toggleDropdown && 'translate-x-full'}`}>
                        <NavbarContext.Provider value={activeTab}>
                            {tabs.map(tab =>
                                <Tab name={tab} scrollToSection={scrollToSection} key={tab}
                                    style='dropdown_link' />)}
                        </NavbarContext.Provider>
                    </div>
                </div>
            </div>
        </nav>
    )
}

const Tab = ({ name, scrollToSection, style }) => {
    const id = '#' + name.toLowerCase()
    const activeTab = useContext(NavbarContext)
    return (
        <Link href={id}
            className={`${style ? style : ''} ${activeTab === id && 'active'}`}
            scroll={false}
            onClick={() => scrollToSection(id)}>
            {name}
        </Link>
    )
}

export default Nav