type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({
  children,
}: AuthLayoutProps) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-sky-700">
      {children}
    </div>
  );
};

export default AuthLayout;