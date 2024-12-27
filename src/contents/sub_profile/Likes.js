import React from 'react'
import Title from '../../components/Title'
import Myswiper from '../../components/Myswiper'
import allData from '../../data/allData.json';

export default function Likes() {
  return (
    <div className='likesCont d-flex flex-column'>
      <Title page='main' noBtn>Likes</Title>
      <div className='d-flex flex-column flex-lg-row midCont'>
        <div className='fcc flex-lg-column col-lg-4'>
          <div className='fcs flex-column flex-lg-row cateitem'>
            <img src="/dailyphoto/likes_camera.png" alt="" />
            <p>사진</p>
          </div>
          <div className='fcs flex-column-reverse flex-lg-row-reverse cateitem'>
            <img src="/dailyphoto/likes_ocean.png" alt="" />
            <p>바다</p>
          </div>
          <div className='fcs flex-column flex-lg-row cateitem'>
            <img src="/dailyphoto/likes_coffee.png" alt="" />
            <p>커피</p>
          </div>
        </div>
        <Myswiper
            datakey={allData.myphotos}
            viewslides={1}
            nav={false}
            pagination={false}
            autoplay={{delay: 4000}}
            spacebtw={20}
            slidesCenter={true}
            effect='fade'
            speed={600}
            >
            {(life, index) => (
              <div className="swiperbg position-relative" key={index}
              style={{background : `url(${process.env.PUBLIC_URL}/dailyphoto/${life.src}.jpg) 50% 40% no-repeat rgba(238, 238, 238, 0.5)` }}>
                <p className="desc position-absolute">{life.alt}</p>
              </div>
            )}
            
        </Myswiper>
      </div>
    </div>
  )
}
