import { HTMLInputTypeAttribute, forwardRef, InputHTMLAttributes } from 'react';

type InputProps = {
  id?: string;
  className?: string;
  inputClassName?: string;
  labelText?: string;
  errorText?: string;
  inputType?: HTMLInputTypeAttribute;
  placeholder?: string;
  isFullWidth?: boolean;
} & {
  [key in keyof InputHTMLAttributes<HTMLInputElement>]: any;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id = String(Math.random()),
      className = '',
      inputClassName: inputClasses = '',
      labelText = '',
      errorText = '',
      placeholder = '',
      inputType = 'text',
      isFullWidth = true,
      ...otherProps
    },
    ref,
  ): JSX.Element => {
    const containerClassName = `${className}`;
    const inputClassName = `
      block p-2 dark:bg-black rounded-md
      border-2 border-black dark:border-transparent
      hover:border-black/30 dark:hover:border-transparent
      focus:outline-none focus-visible:border-black/30
      ${isFullWidth ? 'w-full' : ''}
      ${inputClasses}
    `;

    return (
      <div className={containerClassName}>
        {labelText ? (
          <label className="block capitalize mb-2" htmlFor={id}>
            {labelText}
          </label>
        ) : null}
        <input
          className={inputClassName}
          id={id}
          type={inputType}
          placeholder={placeholder}
          {...otherProps}
          ref={ref}
        />
        {errorText ? (
          <span className="block text-rose-500">{errorText}</span>
        ) : null}
      </div>
    );
  },
);

Input.displayName = 'Input';
