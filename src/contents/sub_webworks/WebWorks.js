import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../components/Title';
import allData from '../../data/allData.json';
import Myswiper from '../../components/Myswiper';
import './webworks.scss';

export default function WebWorks({ page = '' }) {
  const webWorks = allData.webWorks;
  const webNav = {
    prevEl: prevRef.current,
    nextEl: nextRef.current,
  }

  return (
    <div className='webCont container d-flex flex-column'>
      <Title page={page}>my_web_<br />prjcts.json</Title>
      <Myswiper
      datakey={webWorks}
      viewslides={1}
      nav={webNav}
      pagination={false}
      autoplay={false}
      spacebtw={10}
      prevRef={prevRef}
      nextRef={nextRef}
      >
        {(webWork, index)=>(
        <dl key={index}>
          <h4><Link to={webWork.linkto} target="_blank" rel="noopener noreferrer">{webWork.prjName}</Link></h4>
          <div>
            <dt>개요</dt>
            <div>
              <dd>{webWork.about.team}<p>{webWork.about.date}</p></dd>
            </div>
          </div>
          <div>
            <dt>기여도</dt>
            <div>
              <dd>{webWork.contribution.main}<p>{webWork.contribution.sub}</p></dd>
            </div>
          </div>
          <div>
            <dt>기술환경</dt>
            <div>
              <dd>{webWork.environment}</dd>
            </div>
          </div>
          <div>
            <dt>특징</dt>
            <div>
              {webWork.features.map((o, i)=>(
              <dd key={i}>{o.content}<p>{o.description}</p></dd>
              ))}
            </div>
          </div>
        </dl>
        )}
      </Myswiper>
    </div>
  )
}
