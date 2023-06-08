'use client';

import { forwardRef, InputHTMLAttributes, useState, useEffect } from 'react';
import Image from 'next/image';

import type { ChangeEvent } from 'react';

type FileInputProps = {
  className?: string;
  labelText?: string;
  placeholder?: string;
  textAfter?: string;
  errorText?: string;
} & {
  [key in keyof InputHTMLAttributes<HTMLInputElement>]: any;
};

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  (
    {
      className = '',
      labelText: titleText = '',
      placeholder = 'Choose file...',
      textAfter = 'File is selected',
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

    const [imageUrl, setImageUrl] = useState<string>('');
    useEffect(() => {
      if (file) {
        setImageUrl(URL.createObjectURL(file));
      }

      return (): void => {
        URL.revokeObjectURL(imageUrl);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [file]);

    const parentClassName = `${className}`;
    const titleClassName = 'block capitalize mb-2 self-stretch cursor-pointer';
    const fileInputClassName =
      'inline-block self-start px-3 py-2 rounded-md cursor-pointer ' +
      'bg-purple-500 border-2 border-black dark:bg-red-700 ' +
      'dark:border-transparent text-white mb-1 ' +
      'peer-focus-visible:border-rose-500 dark:peer-focus-visible:border-blue-700';

    return (
      <div className={parentClassName}>
        <label className="flex flex-col cursor-pointer">
          {titleText ? (
            <span className={titleClassName}>{titleText}</span>
          ) : null}
          <input
            className="peer sr-only"
            type="file"
            accept="image/*,.jpg,.jpeg,.png,.webp,.avif,.gif"
            onInput={fileInputChangeHandler}
            ref={ref}
            {...otherProps}
          />
          <span className={fileInputClassName}>
            {!file ? placeholder : textAfter}
          </span>
          {imageUrl ? (
            <Image
              className="mt-2"
              src={imageUrl}
              alt="chosen file."
              width={160}
              height={160}
            />
          ) : null}
        </label>
        {errorText ? (
          <span className="block text-rose-500">{errorText}</span>
        ) : null}
      </div>
    );
  },
);

FileInput.displayName = 'FileInput';
