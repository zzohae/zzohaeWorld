import React from 'react'
import allData from '../../data/allData.json'
import Title from '../../components/Title';
import './profile.scss'

export default function ProfileMain({ id, className, page = '' }) {
  const { edu, awards, training, ability } = allData.profileData;

  const formatText = (text) => {
    return text.split('|').map((part, index) => (
      <span key={index}>
        {part.split('@').map((subPart, subIndex) => (
          <span key={subIndex}>
            {subPart}
          </span>
        ))}
        {index < text.split('|').length - 1 && <br />}
      </span>
    ));
  };

  const formatAbilityIcons = (text) => {
    return text.split('@').map((subPart, subIndex) => {
      const iconClass = subPart.trim().toLowerCase();
      return (
        <span key={subIndex} className={`${iconClass}`}></span>
      );
    });
  };

  return (
    <div id={id} className={`profileMainCont container mycontainer d-flex flex-column ${className}`}>
      <Title page={page} linkto='profile'>zzohae/<br />readme.md</Title>
      <div className='profileAll d-flex flex-column flex-lg-row'>
        <div className='profileImg me-lg-5'>
          <p className='d-flex align-items-end'>
            유연성 있는 올라운더 퍼블리셔,<br />
            나아가 웹기획자를 꿈꾸는<br />
            조해연입니다.
          </p>
        </div>
        <div className='d-flex flex-column profileInfo'>
          <h4 className='myName'>조해연<span className='ms-2'>2000.03.08</span></h4>
          <dl className='d-flex flex-column'>
            <div className='smallCont'>
              <dt>🎓</dt>
              <dd className='fs-18'>{formatText(edu.content)}
                <p>{formatText(edu.description)}</p></dd>
            </div>
            <div className='smallCont'>
              <dt>🏆</dt>
              <div>
              {awards.map((aw, index)=>(
                <dd key={index} className='fs-12'>
                  {formatText(aw.content)}
                  <span className='fc-sub award fs-18'>{aw.description}</span>
                </dd>
              ))}
              </div>
            </div>
            {page !== "main" && (
              <div className='smallCont'>
                <dt>📝</dt>
                <div>
                {training.map((t, index)=>(
                  <dd key={index} className='training fs-12'>
                    <p className='academy'>{t.academy}</p>
                    {t.content}
                    <p className='fs-10'>{t.date}</p>
                  </dd>
                ))}
                </div>
              </div>
            )}
            <div className='smallCont'>
              <dt>🎯</dt>
              <div>
              {ability.map((ab, index)=> (
                <dd key={index}>
                  {ab.content}
                  <div className='ability d-flex mt-1'>
                    {formatAbilityIcons(ab.description)}
                  </div>
                </dd>
                )
              )}
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
