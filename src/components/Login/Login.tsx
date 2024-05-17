import { SignInButton } from '@clerk/clerk-react'

const Login = () => {
  return (
    <div>
      <h1>Sign in button</h1>
      <SignInButton mode="redirect" forceRedirectUrl="/home" />
    </div>
  )
}

export default Login