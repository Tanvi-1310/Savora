import LoginHeader from "../../components/auth/LoginHeader";
import LoginForm from "../../components/auth/LoginForm";
import LoginFooter from "../../components/auth/LoginFooter";
import SocialLogin from "../../components/auth/SocialLogin";

function Login() {
  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center">

      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md">

        <LoginHeader />

        <LoginForm />

        <SocialLogin />

        <LoginFooter />

      </div>

    </div>
  );
}

export default Login;