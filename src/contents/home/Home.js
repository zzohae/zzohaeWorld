import React from 'react'
import { Link } from 'react-router-dom'
import ProfileMain from '../sub_profile/ProfileMain'
import './home.scss'
import { ReactComponent as Logo } from '../../assets/common/logo.svg'
import { ReactComponent as RCh } from '../../assets/common/chevron_right.svg'

export default function Home() {
  return (
    <div className='homeCont flex-column fcs'>
      <div className='c01main fcc'>
        <div className='container flex-column fsc'>
          <Logo color='#002F87' width='160px' height='128px' />
          <div className='fsc flex-column' style={{gap:'30px'}}>
            <div className='zzohae'>
              <p className='catch'>함께 앞날을 헤엄쳐 나가는<br />
                <span className='rubik-spray'>WEB PUBLISHER</span>
              </p>
              <div className='fes'>
                <h1 className='rubik-spray'>zzohae</h1>
                <p>쪼해</p>
              </div>
            </div>
            <ul className='d-flex flex-column'>
              <li><Link className='fcs'><RCh />Profile</Link></li>
              <li><Link className='fcs'><RCh />Portfolio</Link></li>
              <li><Link className='fcs'><RCh />Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <ProfileMain></ProfileMain>
      <div>web</div>
      <div>design</div>
      <div>contact</div>
    </div>
  )
}
