import React from 'react'
import { Link } from 'react-router-dom'

const IntroCss = () => {
  return (
    <div>
      <h1>Content not Found</h1>
      <Link to="/"><h1 className='bg-blue-600 underline'>Back Home</h1></Link>
    </div>
  )
}

export default IntroCss