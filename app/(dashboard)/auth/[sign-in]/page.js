import React from 'react'

const SignInPage = ({params}) => {
  //it will have only the sign-in as the params but if we use /sign-in/user/new
  //it will give 404 error and will not catch the user and new params
  //{'sign-in':'sign-in'}
  return (
    <h1 className='text-7xl'>SignIn Page</h1>
  )
}

export default SignInPage