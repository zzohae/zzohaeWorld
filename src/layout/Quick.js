import React from 'react'
import { ReactComponent as Donguri } from '../assets/common/quick.svg';

export default function Quick() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button className='quickmenu' onClick={scrollToTop}>
      <Donguri></Donguri>
    </button>
  )
}
