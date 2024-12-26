import React from 'react'
import ProfileMain from '../sub_profile/ProfileMain'
import WebWorks from '../sub_webworks/WebWorks'
import DesignWorks from '../sub_designworks/DesignWorks'
import Contact from './Contact'
import './home.scss'
import { MyLink } from '../../ui/commonUI'
import { ReactComponent as Logo } from '../../assets/common/logo.svg'
import { ReactComponent as RCh } from '../../assets/common/chevron_right.svg'

export default function Home() {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              <li><MyLink
                to='#profile'
                page='main'
                onClick={() => handleScrollToSection('profile')}>
                Profile<RCh width='20px' height='20px' />
              </MyLink></li>
              <li><MyLink
                to='#webworks'
                page='main'
                onClick={() => handleScrollToSection('webworks')}>
                Web Portfolio<RCh width='20px' height='20px' />
              </MyLink></li>
              <li><MyLink
                to='#designworks'
                page='main'
                onClick={() => handleScrollToSection('designworks')}>
                Design Portfolio<RCh width='20px' height='20px' />
              </MyLink></li>
              <li><MyLink
                to='#contact'
                page='main'
                onClick={() => handleScrollToSection('contact')}>
                Contact<RCh width='20px' height='20px' />
              </MyLink></li>
            </ul>
          </div>
        </div>
      </div>
      <ProfileMain page='main' id='profile' className='section'></ProfileMain>
      <WebWorks page='main' id='webworks' className='section'></WebWorks>
      <DesignWorks page='main' id='designworks' className='section'></DesignWorks>
      <Contact id='contact' className='section'></Contact>
    </div>
  )
}
