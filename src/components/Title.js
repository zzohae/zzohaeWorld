import React from 'react'
import { MoreBtn } from '../ui/commonUI'

export default function Title({ children, linkto, version='mobile', page = '', noBtn = false }) {
  return (
    <div className={`allTitle d-flex align-items-end ${ noBtn ? "justify-content-start" : "justify-content-between"}`}>
      <h2 className={`rubik-mono fc-main ${ page === "main" ? 'fs-24' : 'fs-30' }`}>{children}</h2>
      { !noBtn && page === "main" && (
      <MoreBtn version={version} to={linkto}></MoreBtn>
      )}
    </div>
  )
}
