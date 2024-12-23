import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../components/Title';
import allData from '../../data/allData.json';
import Myswiper from '../../components/Myswiper';
import './webworks.scss';

export default function WebWorks({ page = '' }) {
  const webWorks = allData.webWorks;

  return (
    <div className='webCont container d-flex flex-column'>
      <Title page={page}>my_web_<br />prjcts.json</Title>
      <Myswiper
      datakey={webWorks}
      viewslides={1}
      nav={true}
      pagination={false}
      autoplay={false}
      spacebtw={10}
      >
        {(webWork, index)=>(
        <dl key={index} className='workItem d-flex flex-column'>
          <img src={`/webWorks/${webWork.mockup}.png`}></img>
          <h4><Link to={webWork.linkto} target="_blank" rel="noopener noreferrer">{webWork.prjName}</Link></h4>
          <div className='midCont d-flex flex-column'>
            <div className='smallCont'>
              <dt>개 요</dt>
              <div>
                <dd>{webWork.about.team}<p>{webWork.about.date}</p></dd>
              </div>
            </div>
            <div className='smallCont'>
              <dt>기 여 도</dt>
              <div>
                <dd>{webWork.contribution.main}<p>{webWork.contribution.sub}</p></dd>
              </div>
            </div>
            <div className='smallCont'>
              <dt>기 술 환 경</dt>
              <div>
                <dd className='envi'>{webWork.environment}</dd>
              </div>
            </div>
            <div className='smallCont features'>
              <dt>특 징</dt>
              <div>
                {webWork.features.map((o, i)=>(
                <dd key={i}>{o.content}
                {page !== "main" && (
                  <p>{o.description}</p>
                )}
                </dd>
                ))}
              </div>
            </div>
          </div>
        </dl>
        )}
      </Myswiper>
    </div>
  )
}
