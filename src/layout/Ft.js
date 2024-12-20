import React from 'react'
import { Link } from 'react-router-dom'

export default function Ft() {
  return (
    <footer className='bg-main w-100'>
      <div className='d-flex flex-column container'>
        <div className='ftInfo fcs'>
          <Link to='/' className='fcs rubik-spray fc-sub ftLogo'>zzohae</Link>
          <div className='flex-wrap fcs ftLink'>
            <Link className='fcs'>프로필+</Link>
            <Link className='fcs'>웹 포트폴리오+</Link>
            <Link className='fcs'>디자인 포트폴리오+</Link>
            <Link className='fcs'>GitHub+</Link>
          </div>
        </div>
        <div className='copy'>
          본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다.<span className='d-md-none'><br /></span> © 2024 <strong>Cho HaeYeon.</strong> All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
