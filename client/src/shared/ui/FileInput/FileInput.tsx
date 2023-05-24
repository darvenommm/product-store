import { forwardRef, InputHTMLAttributes } from 'react';

import { clearClassName } from '@/shared/helpers';

type FileInputProps = {
  id?: string;
  className?: string;
  labelText?: string;
  errorText?: string;
  isFullWidth?: boolean;
} & {
  [key in keyof InputHTMLAttributes<HTMLInputElement>]: any;
};

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  (
    {
      id = String(Math.random()),
      className = '',
      labelText = '',
      errorText = '',
      isFullWidth = true,
      ...otherProps
    },
    ref,
  ): JSX.Element => {
    const containerClassName = `${className}`;
    const FileInputClassName = clearClassName(`
      px-3 py-2 rounded-md cursor-pointer
      bg-purple-500 dark:bg-red-700
      border-2 border-black dark:border-transparent
      text-white
    `);

    return (
      <div className={containerClassName}>
        {labelText ? (
          <label className="block capitalize mb-2" htmlFor={id}>
            {labelText}
          </label>
        ) : null}
        <label className={FileInputClassName} htmlFor={id}>
          Choose a file...
        </label>
        <input
          className="sr-only"
          id={id}
          type="file"
          accept="image/*,.jpg,.jpeg,.png,.webp,.avif,.gif"
          ref={ref}
          {...otherProps}
        />
        {errorText ? (
          <span className="block text-rose-500">{errorText}</span>
        ) : null}
      </div>
    );
  },
);

FileInput.displayName = 'Input';
