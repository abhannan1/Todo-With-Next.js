'use client'

import React from 'react'

const Error = ({
  error,
  reset
}) => {
    console.log(error)
  return (
    // <div>there was an error....</div>
    <>
      <div>{error.message}</div>
      <button className='btn btn-accent btn-md' onClick={()=>reset()}>Try Again</button>
    </>
  )
}

export default Error