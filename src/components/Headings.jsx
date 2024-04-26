import React from 'react'

const Headings = ({ headings }) => {
  return (
    <div>
      <h1 className="text-[#002D74] text-2xl font-bold font-Montserrat mb-2">{headings}</h1>
      <div className="border bg-[#002D74] w-20 h-1 mb-6"></div>
    </div>
  )
}

export default Headings