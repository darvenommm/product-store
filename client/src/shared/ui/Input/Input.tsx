import { forwardRef, InputHTMLAttributes } from 'react';

import { clearClassName } from '@/shared/helpers';

type InputProps = {
  className?: string;
  inputClassName?: string;
  labelText?: string;
  errorText?: string;
  placeholder?: string;
  isFullWidth?: boolean;
} & {
  [key in keyof InputHTMLAttributes<HTMLInputElement>]: any;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = '',
      inputClassName: inputClasses = '',
      labelText = '',
      errorText = '',
      placeholder = '',
      isFullWidth = true,
      ...otherProps
    },
    ref,
  ): JSX.Element => {
    const parentClassName = `${className}`;
    const inputClassName = clearClassName(`
      block p-2 dark:bg-black rounded-md
      border-2 border-black dark:border-transparent
      hover:border-black/30 dark:hover:border-transparent
      focus:outline-none focus-visible:border-black/30
      [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0
      [&::-webkit-outer-spin-button]:appearance-none
      [&::-webkit-inner-spin-button]:m-0
      [&::-webkit-inner-spin-button]:appearance-none
      ${isFullWidth ? 'w-full' : ''}
      ${inputClasses}
    `);

    return (
      <div className={parentClassName}>
        <label>
          {labelText ? (
            <span className="block capitalize mb-2 cursor-pointer">
              {labelText}
            </span>
          ) : null}
          <input
            className={inputClassName}
            placeholder={placeholder}
            type="text"
            ref={ref}
            {...otherProps}
          />
          {errorText ? (
            <span className="block text-rose-500">{errorText}</span>
          ) : null}
        </label>
      </div>
    );
  },
);

Input.displayName = 'Input';
