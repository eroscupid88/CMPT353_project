import React from 'react'

function Paragraph({ letter, first, second }) {
  return (
    <div className="block">
      <p>
        <span className="first-character">{letter}</span>
        {first}
      </p>
      <p className="line-break margin-top-10" />
      <p className="margin-top-10">{second}</p>
    </div>
  )
}

export default Paragraph
