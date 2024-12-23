import React from 'react'

export default function Title({ children, page = '' }) {
  return (
    <div className='allTitle d-flex align-items-end justify-content-between'>
      <h2 className={`rubik-mono fc-main ${ page === "main" ? 'fs-24' : 'fs-30' }`}>{children}</h2>
      {page === "main" && (
      <button></button>
      )}
    </div>
  )
}
