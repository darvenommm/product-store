'use client';

import { forwardRef, InputHTMLAttributes, useState } from 'react';

import type { ChangeEvent } from 'react';

type FileInputProps = {
  className?: string;
  labelText?: string;
  errorText?: string;
} & {
  [key in keyof InputHTMLAttributes<HTMLInputElement>]: any;
};

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  (
    {
      className = '',
      labelText: titleText = '',
      errorText = '',
      ...otherProps
    },
    ref,
  ): JSX.Element => {
    const [file, setFile] = useState<File | null>(null);
    const fileInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
        setFile(event.target.files[0]);
      }
    };

    const parentClassName = `${className}`;
    const titleClassName = 'block capitalize mb-2 self-stretch cursor-pointer';
    const fileInputClassName =
      'self-start px-3 py-2 rounded-md cursor-pointer ' +
      'bg-purple-500 dark:bg-red-700 border-2 border-black ' +
      'dark:border-transparent text-white mb-1';

    return (
      <div className={parentClassName}>
        <label className="flex flex-col cursor-pointer">
          {titleText ? (
            <span className={titleClassName}>{titleText}</span>
          ) : null}
          <span className={fileInputClassName}>
            {!file ? 'Choose file...' : 'File is selected...'}
          </span>
          <input
            className="sr-only"
            type="file"
            accept="image/*,.jpg,.jpeg,.png,.webp,.avif,.gif"
            onInput={fileInputChangeHandler}
            ref={ref}
            {...otherProps}
          />
        </label>
        {errorText ? (
          <span className="block text-rose-500">{errorText}</span>
        ) : null}
      </div>
    );
  },
);

FileInput.displayName = 'FileInput';
