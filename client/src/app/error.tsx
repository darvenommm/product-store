'use client';

import { useEffect } from 'react';

interface IErrorProps {
  error: Error;
}

export default function Error({ error }: IErrorProps): JSX.Element {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-10">
      <h2 className="important text-4xl mb-2">
        Error! You can visit the site soon
      </h2>
    </div>
  );
}
