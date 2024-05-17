import { SignInButton } from '@clerk/clerk-react'

const Login = () => {
  return (
    <div>
      <h1>Sign in button</h1>
      <button className='border'><SignInButton mode="redirect" forceRedirectUrl="/home" /></button>
    </div>
  )
}

export default Login