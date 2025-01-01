import React, { useState, useEffect, useRef } from 'react'
import { ReactComponent as Logo } from '../assets/common/logo.svg'
import { ReactComponent as MenuLine } from '../assets/common/menuline.svg'
import { Link, useLocation } from 'react-router-dom';
import MenuTab from './MenuTab';

export default function Hd() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolledUp, setIsScrolledUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (location.pathname === '/' && currentScrollY <= 200) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
      if (currentScrollY > lastScrollY) {
        setIsScrolledUp(false);
      } else {
        setIsScrolledUp(true);
      }
    }

    setLastScrollY(currentScrollY);
  };

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, location.pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className={`w-100 ${!isVisible ? 'hide' : isScrolledUp ? 'show' : 'hide'}`}>
      <div className='fcb container h-100 overflow-hidden' ref={menuRef}>
        <Link to='/' onClick={() => setIsMenuOpen(false)}><Logo color='var(--main1)' width='85px' height='69px'></Logo></Link>
        <button onClick={toggleMenu}><MenuLine width='28px' height='20px' color='var(--main1)' /></button>
        <MenuTab setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      </div>
    </header>
  )
}