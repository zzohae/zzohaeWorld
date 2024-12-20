import React, { useState, useEffect } from 'react'
import { ReactComponent as Logo } from '../assets/common/logo.svg'
import { ReactComponent as MenuLine } from '../assets/common/menuline.svg'

export default function Hd() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolledUp, setIsScrolledUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY >= 0 && currentScrollY <= 200) {
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
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`w-100 overflow-hidden ${!isVisible ? 'hide' : isScrolledUp ? 'show' : 'hide'}`}>
      <div className='fcb container h-100'>
        <Logo color='#002F87' width='85px' height='69px'></Logo>
        <button><MenuLine /></button>
      </div>
    </header>
  )
}