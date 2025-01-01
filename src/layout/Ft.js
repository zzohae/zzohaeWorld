import React from 'react'
import { Link } from 'react-router-dom'
import { MyLink } from '../ui/commonUI'
import { ReactComponent as Logo } from '../assets/common/logo.svg'
import { ReactComponent as RCh } from '../assets/common/chevron_right.svg'

export default function Ft() {
  return (
    <footer className='w-100'>
      <div className='d-flex flex-column container'>
        <div className='ftInfo fcs'>
          <Link to='/' className='fcs flex-column rubik-spray fc-sub ftLogo'><Logo width='65px' height='52px' className='d-none d-lg-block' />zzohae</Link>
          <div className='flex-wrap fcs ftLink'>
            <MyLink to='profile'>프로필<RCh width='12px' height='12px' /></MyLink>
            <MyLink to='web_portfolio'>웹 포트폴리오<RCh width='12px' height='12px' /></MyLink>
            <MyLink to='design_portfolio'>디자인 포트폴리오<RCh width='12px' height='12px' /></MyLink>
            <a href='https://github.com/zzohae' target='_blank' rel="noopener noreferrer" className='alink'>GitHub<RCh width='12px' height='12px' /></a>
          </div>
        </div>
        <div className='copy'>
          본 페이지는 상업적 목적이 아닌 <br className='d-md-none' />개인 포트폴리오용으로 제작되었습니다.<span className='d-md-none'><br /></span> © 2024 <strong>Cho HaeYeon.</strong> All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
