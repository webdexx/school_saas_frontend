import { useEffect, useState } from "react";
import Input from "@/components/ui/Input";
import AuthLayout from "@/components/layouts/AuthLayout";
import { LuEye, LuEyeOff, LuLoaderCircle, LuLock, LuMail } from "react-icons/lu";

import { useNavigate } from "react-router-dom";

import { useAuth } from "@/hooks/useAuth";

const LoginPage = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Login Page";
  }, []);

  const handleLogin = () => {
    setLoading(true);

    const fakeUser = {
      id: 1,
      name: "Rahul",
      role: "super_admin",
    };

    login(fakeUser);

    navigate("/");
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-lg rounded-xl bg-white p-8 backdrop-blur-xl">
        <h1 className="mb-2 text-3xl font-bold text-sky-900">Welcome Back</h1>

        <p className="mb-6 text-sky-900">Login to continue</p>

        <div className="space-y-4">
          <label className="block text-[11px] font-medium tracking-[0.06em] uppercase text-sky-800 mb-1.5">
            Email address
          </label>

          <div className="relative flex items-center">
            <span className="absolute left-3.5 text-sky-800 pointer-events-none">
              <LuMail />
            </span>
            <Input
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-10 border-sky-700 text-sky-800 placeholder-sky-700 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 "
            />
          </div>

          <label className="block text-[11px] font-medium tracking-[0.06em] uppercase text-sky-800 mb-1.5">
            Password
          </label>
          <div className="relative flex items-center">
            <span className="absolute left-3.5 text-sky-800 pointer-events-none">
              <LuLock />
            </span>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-10 border-sky-700 text-sky-800 placeholder-sky-700 focus:border-sky-700 focus:ring-1 focus:ring-sky-700 "
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 text-sky-700 transition-colors"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <LuEyeOff /> : <LuEye />}
            </button>
          </div>

          <button
            onClick={() => setLoading(true)}
            className="w-1/2 rounded bg-transparent border border-sky-700 px-4 py-1 text-sm text-sky-800 cursor-pointer hover:bg-sky-700 hover:text-sky-50"
          >
            Forgot Password?
          </button>

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full rounded-md bg-sky-800 py-3 text-sky-50 cursor-pointer hover:bg-sky-700 hover:text-sky-50"
          >
            {loading ? (
              <div className="flex items-center justify-center pe-2">
                <span>Logging in...</span>
                <LuLoaderCircle className="animate-spin"/>
              </div>
            ) : (
              "Login"
            )}
          </button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
