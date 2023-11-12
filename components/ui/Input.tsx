import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  type?: string;
}

const Input: FC<InputProps> = ({
  name,
  label = undefined,
  type = "text",
  className,
  ...rest
}) => {
  return (
    <div className={`input-wrapper`}>
      {label && (
        <label htmlFor={name} className="block mb-2 text-sm text-neutral-500">
          {label}
        </label>
      )}
      <input
        id={name}
        type={type}
        className={`h-10 border rounded px-3 transition hover:border-neutral-400 focus:border-blue-500 ${className}`}
        {...rest}
      />
    </div>
  );
};

export default Input;
