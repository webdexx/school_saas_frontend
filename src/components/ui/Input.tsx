type InputProps = {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full rounded-md border px-4 py-3 outline-none appearance-none border-sky-300/50 bg-sky-700 text-white placeholder-sky-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${className}`}
    />
  );
};

export default Input;