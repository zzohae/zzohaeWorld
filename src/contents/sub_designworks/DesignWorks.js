import React, { useState, useEffect } from 'react'
import allData from '../../data/allData.json';
import Myswiper from '../../components/Myswiper';
import Title from '../../components/Title';
import './designworks.scss';

export default function DesignWorks({ page = '' }) {
  const designWorks = allData.designWorks;
  const [activeTab, setActiveTab] = useState('poster');
  const [slidesPerView, setSlidesPerView] = useState(1.5);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setSlidesPerView(3.6);
      } else if (width >= 768) {
        setSlidesPerView(3);
      } else if (width >= 576) {
        setSlidesPerView(2.5);
      } else if (width >= 480) {
        setSlidesPerView(1.8);
      } else {
        setSlidesPerView(1.3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const posterAutoplay = {
    delay: 4000,
    disableOnInteraction: false,
  
  }

  return (
    <div className="container designCont">
      <Title page={page}>My_design_<br />works.pdf</Title>
      <ul className="nav" role="tablist">
        <li className="navItem" role="presentation">
          <a
            className={`${activeTab === 'poster' ? 'active' : ''}`}
            onClick={() => handleTabClick('poster')}>
            포스터
          </a>
        </li>
        <li className="navItem" role="presentation">
          <a
            className={`${activeTab === 'cardNews' ? 'active' : ''}`}
            onClick={() => handleTabClick('cardNews')}>
            카드뉴스
          </a>
        </li>
        <li className="navItem" role="presentation">
          <a
            className={`${activeTab === 'logo' ? 'active' : ''}`}
            onClick={() => handleTabClick('logo')}>
            로고
          </a>
        </li>
        <li className="navItem" role="presentation">
          <a
            className={`${activeTab === 'banner' ? 'active' : ''}`}
            onClick={() => handleTabClick('banner')}>
            배너
          </a>
        </li>
      </ul>

      <div className="tab-content">
        {/* 포스터 탭 내용 */}
        <div className={`tab-pane fade ${activeTab === 'poster' ? 'show active' : ''}`}>
          <Myswiper
            datakey={designWorks.poster}
            viewslides={slidesPerView}
            nav={false}
            pagination={false}
            autoplay={posterAutoplay}
            spacebtw={20}
            slidesCenter={true}
            >
            {(work, index) => (
              <div className="" key={index}>
                <div className="design-item">
                  <img
                    src={`${process.env.PUBLIC_URL}/designWorks/poster/${work.src}.jpg`}
                    alt={work.alt}
                    className="img-fluid"
                  />
                  <p className="desc">{work.alt}</p>
                </div>
              </div>
            )}
            </Myswiper>
        </div>

        {/* 카드뉴스 탭 내용 */}
        <div className={`tab-pane fade ${activeTab === 'cardNews' ? 'show active' : ''}`}>
          <div className="row g-4">
            {designWorks.cardNews.map((work, index) => (
              <div className="col-6 col-md-4 col-lg-3" key={index}>
                <div className="design-item">
                  <img
                    src={`${process.env.PUBLIC_URL}/designWorks/cardNews/${work.src}.jpg`}
                    alt={work.alt}
                    className="img-fluid"
                  />
                  <p className="desc">{work.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 로고 탭 내용 */}
        <div className={`tab-pane fade ${activeTab === 'logo' ? 'show active' : ''}`}>
          <div className="row g-4">
            {designWorks.logo.map((work, index) => (
              <div className="col-6 col-md-4 col-lg-3" key={index}>
                <div className="design-item">
                  <img
                    src={`${process.env.PUBLIC_URL}/designWorks/logo/${work.src}.png`}
                    alt={work.alt}
                    className="img-fluid"
                  />
                  <p className="desc">{work.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 배너 탭 내용 */}
        <div className={`tab-pane fade ${activeTab === 'banner' ? 'show active' : ''}`}>
          <div className="row g-4">
            {designWorks.banner.map((work, index) => (
              <div className="col-md-6" key={index}>
                <div className="design-item">
                  <img
                    src={`${process.env.PUBLIC_URL}/designWorks/banner/${work.src}.jpg`}
                    alt={work.alt}
                    className="img-fluid"
                  />
                  <p className="desc">{work.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
