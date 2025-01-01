import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Menutab({ setIsMenuOpen, isMenuOpen }) {
  useEffect(() => {
    const htmlElement = document.documentElement;

    if (isMenuOpen) {
      htmlElement.style.setProperty('overflow-y', 'hidden', 'important');
    } else {
      htmlElement.style.setProperty('overflow-y', 'scroll', 'important');
    }

    return () => {
      htmlElement.style.setProperty('overflow-y', 'scroll', 'important');
    };
  }, [isMenuOpen]);

  return (
    <div className={`menutab overflow-hidden ${isMenuOpen ? 'open' : 'closed'}`}>
      <div className='container'>
        <ul>
          <li><Link to='/profile' onClick={() => setIsMenuOpen(false)}>프로필</Link></li>
          <li><Link to='/web_portfolio' onClick={() => setIsMenuOpen(false)}>웹 포트폴리오</Link></li>
          <li><Link to='/design_portfolio' onClick={() => setIsMenuOpen(false)}>디자인 포트폴리오</Link></li>
          <li><a href='https://github.com/zzohae' target='_blank' rel="noopener noreferrer" className='alink'>GitHub</a></li>
        </ul>
      </div>
    </div>
  )
}