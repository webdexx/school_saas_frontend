import { useEffect, useState } from "react";
import Input from "@/components/ui/Input";
import AuthLayout from "@/components/layouts/AuthLayout";
import { LuEye, LuEyeOff, LuLock, LuMail } from "react-icons/lu";

const LoginPage = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Login Page";
  }, []);

  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      console.log({
        email,
        password,
      });

      setLoading(false);
    }, 2000);
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md rounded-xl bg-sky-800 p-8 shadow-md border border-sky-300/40 backdrop-blur-xl">
        <h1 className="mb-2 text-3xl font-bold text-sky-100">Welcome Back</h1>

        <p className="mb-6 text-sky-100">Login to continue</p>

        <div className="space-y-4">
          <label className="block text-[11px] font-medium tracking-[0.06em] uppercase text-sky-100/50 mb-1.5">
            Email address
          </label>

          <div className="relative flex items-center">
            <span className="absolute left-3.5 text-sky-100/30 pointer-events-none">
                <LuMail />
              </span>
          <Input
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-10"
          />
          </div>

          <label className="block text-[11px] font-medium tracking-[0.06em] uppercase text-sky-100/50 mb-1.5">
            Password
          </label>
          <div className="relative flex items-center">
            <span className="absolute left-3.5 text-sky-100/30 pointer-events-none">
                <LuLock />
              </span>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-10"
            />
            <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 text-sky-100/30 hover:text-sky-100/60 transition-colors"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <LuEyeOff /> : <LuEye />}
              </button>
          </div>

          <button
            onClick={() => setLoading(true)}
            className="w-1/2 rounded bg-transparent border border-sky-300/40 px-4 py-1 text-sm text-sky-50/60 "
          >
            Forgot Password?
          </button>

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full rounded-md bg-transparent border border-sky-300/40 py-3 text-white cursor-pointer hover:bg-sky-300/10"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
