import React, { useState, useEffect } from 'react'
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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, location.pathname]);

  return (
    <header className={`w-100 overflow-hidden ${!isVisible ? 'hide' : isScrolledUp ? 'show' : 'hide'}`}>
      <div className='fcb container h-100'>
        <Link to='/'><Logo color='#002F87' width='85px' height='69px'></Logo></Link>
        <button onClick={toggleMenu}><MenuLine /></button>
      </div>
    </header>
  )
}