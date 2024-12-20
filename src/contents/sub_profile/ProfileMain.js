import React from 'react'
import './profile.scss'

export default function ProfileMain() {
  return (
    <div style={{border: '1px solid red'}} className='profileMainCont container d-flex flex-column'>
      <h2>zzohae/<br />readme.md</h2>
      <div className='profileAll'>
        <div className='profileImg'>
          <p className='d-flex align-items-end'>
            유연성 있는 올라운더 퍼블리셔,<br />
            나아가 웹기획자를 꿈꾸는<br />
            조해연입니다.
          </p>
        </div>
        <div className='d-flex flex-column profileInfo'>
          <p>조해연<span>2000.03.08</span></p>
          <dl>
            <dt>🎓</dt>
            <dd>한국외국어대학교(서울) 졸업 <p>미디어커뮤니케이션학부 언론정보전공<br />독일어과(이중)</p></dd>
          </dl>
        </div>
      </div>
    </div>
  )
}
