import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../components/Title';
import allData from '../../data/allData.json';
import Myswiper from '../../components/Myswiper';
import { WebWorkLink } from '../../ui/commonUI';
import { ReactComponent as Figma } from '../../assets/figma.svg';
import { ReactComponent as Github } from '../../assets/github.svg';
import './webworks.scss';

export default function WebWorks({ id, className, page = '' }) {
  const webWorks = allData.webWorks;

  return (
    <div id={id} className={`webCont container mycontainer d-flex flex-column ${className}`}>
      <Title page={page} linkto='web_portfolio'>my_web_<br />prjcts.json</Title>
      <Myswiper
      datakey={webWorks}
      viewslides={1}
      nav={true}
      pagination={false}
      autoplay={false}
      spacebtw={10}
      >
        {(webWork, index)=>(
        <dl key={index} className='workItem d-flex flex-column flex-lg-row-reverse justify-content-lg-center'>
          <img src={`/webWorks/${webWork.mockup}.png`} alt={webWork.prjName}></img>
          <div className='col-lg-4'>
            <div className='d-flex'>
              <h4 className='mb-4'><Link to={webWork.linkto} target="_blank" rel="noopener noreferrer">{webWork.prjName}</Link></h4>
              { webWork.Link.figma ? (
                <WebWorkLink className='ms-3' href={webWork.Link.figma} target="_blank" rel="noopener noreferrer"><Figma width='20px' height='20px' /></WebWorkLink>
              ) : (
                <WebWorkLink className='ms-3' disabled><Figma width='20px' height='20px' /></WebWorkLink>
              ) }
              <WebWorkLink className='ms-1' href={webWork.Link.github} target="_blank" rel="noopener noreferrer"><Github width='20px' height='20px' /></WebWorkLink>
            </div>
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
          </div>
        </dl>
        )}
      </Myswiper>
    </div>
  )
}
