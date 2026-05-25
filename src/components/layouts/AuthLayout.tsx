import React from "react";
import { LuSchool } from "react-icons/lu";
import { useEffect, useState } from "react";

type AuthLayoutProps = {
  children: React.ReactNode;
};

const statements = [
  "This is statement one",
  "This is the second statement",
  "Third statement looks like this",
  "Streamline your administration, empower your educators, and focus on what matters most.",
];

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!statements.length) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % statements.length);
    }, 3000);
    return () => clearInterval(id);
  }, [statements]);

  return (
    <div className="flex min-h-screen w-full">
      <div className="absolute inset-0 opacity-95"></div>

      {/* LEFT SIDE */}

      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center overflow-hidden bg-sky-800">
        <div className="relative z-10 flex flex-col items-center text-center px-12">
          <div className="w-16 h-16 mb-8 p-4 flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl text-white">
            <LuSchool size={48} />
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white mb-4 drop-shadow-sm">
            School Management System
          </h1>
          <p className="text-sky-200 text-lg max-w-md font-medium leading-relaxed">
          {statements[index]}
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex w-full lg:w-1/2 flex-col items-center justify-center px-8 sm:px-16 bg-white">
        {/* Mobile Header (Only visible on small screens) */}
        <div className="mb-8 text-center lg:hidden flex flex-col items-center">
          <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-sky-300 shadow-md">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-slate-900">
            School Management
          </h1>
        </div>

        {/* Children Wrapper to constrain form width */}
        <div className="w-full max-w-lg">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
