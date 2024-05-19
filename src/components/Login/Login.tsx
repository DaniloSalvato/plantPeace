import { SignInButton } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div>
      <div className="bg-red-700 h-screen w-full">
        <h1>Sign in button</h1>
        <button className="border">
          <SignInButton mode="redirect" forceRedirectUrl="/home" />
        </button>
      </div>
    </div>
  );
};

export default Login;
