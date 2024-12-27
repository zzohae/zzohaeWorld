import React from 'react'
import Title from '../../components/Title'
import allData from '../../data/allData.json';

export default function Experiences() {

  const formatText = (text) => {
    const parts = text.split('|');

    return parts.map((part, index) => {
      const innerParts = part.split(/(@.*?@)/);

      return (
        <span key={index}>
          {innerParts.map((subPart, subIndex) => {
            if (subPart.startsWith('@') && subPart.endsWith('@')) {
              return <span key={subIndex} className='fc-sub'>{subPart.slice(1, -1)}</span>;
            }

            return subPart;
          })}
          {index < parts.length - 1 && <br />}
        </span>
      );
    });
  };

  return (
    <div className='d-flex flex-column expCont'>
      <Title page='main' noBtn>Experiences</Title>
      <ul className='d-flex flex-column'>
        {allData.expData.map((ex, index)=>(
        <li className='d-flex expItem' key={index}>
          <p className='date'>{formatText(ex.date)}</p>
          <div className='expContent'>
            <p>{formatText(ex.content)}</p>
            <p>{formatText(ex.description)}</p>
          </div>
        </li>
        ))}
      </ul>
    </div>
  )
}
