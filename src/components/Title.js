import React from 'react'
import { MoreBtn } from '../ui/commonUI'

export default function Title({ children, linkto, page = '', noBtn = false }) {
  return (
    <div className={`allTitle d-flex align-items-end ${ noBtn ? "justify-content-start" : "justify-content-between justify-content-lg-start"}`}>
      <h2 className={`rubik-mono fc-main me-4 ${ page === "main" ? 'title-fs-min' : 'title-fs-max' }`}>{children}</h2>
      { !noBtn && page === "main" && (
      <MoreBtn to={linkto}></MoreBtn>
      )}
    </div>
  )
}
