import React from 'react'

function Paragraph({ header, first }) {
  return (
    <div className="block">
      <p>
        <div className="first-character">{header}</div>
      </p>
      <p className="line-break margin-top-10" />
      <p className="margin-top-10">{first}</p>
    </div>
  )
}

export default Paragraph
