import React from 'react';
import { LuSchool } from 'react-icons/lu';

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex min-h-screen w-full bg-sky-700">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-600 to-sky-900 opacity-95"></div>
      {/* LEFT SIDE: Branding & Visuals 
        Hidden on mobile, takes up 50% width on large screens.
      */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center overflow-hidden border-e border-sky-300/40">
        {/* Modern Gradient Background */}
        
        {/* Abstract Background Shapes for Depth */}
        {/* Branding Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-12">
          {/* Logo Placeholder - A nice glassmorphism touch */}
          <div className="w-16 h-16 mb-8 p-4 flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl text-white">
            <LuSchool size={48} />
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-white mb-4 drop-shadow-sm">
            School Management System
          </h1>
          <p className="text-sky-100 text-lg max-w-md font-medium leading-relaxed">
            Streamline your administration, empower your educators, and focus on what matters most.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: Auth Form Container 
        Takes full width on mobile, 50% width on large screens.
      */}
      <div className="flex w-full lg:w-1/2 flex-col items-center justify-center px-8 sm:px-16 bg-sky-700">
        
        {/* Mobile Header (Only visible on small screens) */}
        <div className="mb-8 text-center lg:hidden flex flex-col items-center">
          <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-sky-300 shadow-md">
             <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-slate-900">School Management</h1>
        </div>

        {/* Children Wrapper to constrain form width */}
        <div className="w-full max-w-md">
          {children}
        </div>
        
      </div>
    </div>
  );
};

export default AuthLayout;