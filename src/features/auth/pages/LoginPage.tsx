import { useEffect, useState } from "react";
import Input from "@/components/ui/Input";
import AuthLayout from "@/components/layouts/AuthLayout";

const LoginPage = () => {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

    useEffect(() => {
        document.title = "Login Page"
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
      <div className="w-full max-w-md rounded-xl bg-sky-800 p-8 shadow-md border border-sky-300/40">
        <h1 className="mb-2 text-3xl font-bold text-sky-100">
          Welcome Back
        </h1>

        <p className="mb-6 text-sky-100">
          Login to continue
        </p>

        <div className="space-y-4">
          <Input
            placeholder="Enter email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <Input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full rounded-md bg-blue-600 py-3 text-white"
          >
            {loading
              ? "Logging in..."
              : "Login"}
          </button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;