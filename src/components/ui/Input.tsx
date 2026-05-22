type InputProps = {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full rounded-md border px-4 py-3 outline-none focus:border-blue-500"
    />
  );
};

export default Input;