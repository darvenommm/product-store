import { forwardRef, TextareaHTMLAttributes } from 'react';

import { clearClassName } from '@/shared/helpers';

type TextareaProps = {
  id?: string;
  className?: string;
  textareaClassName?: string;
  labelText?: string;
  errorText?: string;
  placeholder?: string;
  isFullWidth?: boolean;
} & {
  [key in keyof TextareaHTMLAttributes<HTMLTextAreaElement>]: any;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      id = String(Math.random()),
      className = '',
      textareaClassName: textareaClasses = '',
      labelText = '',
      errorText = '',
      placeholder = '',
      isFullWidth = true,
      ...otherProps
    },
    ref,
  ): JSX.Element => {
    const containerClassName = `${className}`;
    const textareaClassName = clearClassName(`
      block p-2 dark:bg-black rounded-md
      border-2 border-black dark:border-transparent
      hover:border-black/30 dark:hover:border-transparent
      focus:outline-none focus-visible:border-black/30 resize-none
      ${isFullWidth ? 'w-full' : ''}
      ${textareaClasses}
    `);

    return (
      <div className={containerClassName}>
        {labelText ? (
          <label className="block capitalize mb-2" htmlFor={id}>
            {labelText}
          </label>
        ) : null}
        <textarea
          className={textareaClassName}
          id={id}
          placeholder={placeholder}
          rows={4}
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

Textarea.displayName = 'textarea';
