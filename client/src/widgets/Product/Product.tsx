import Image from 'next/image';
import { clearClassName } from '@/shared/helpers/react';

import type { IProduct } from '@/entities/product/types';

interface IProductProps extends Omit<IProduct, 'id'> {}

export function Product({
  title,
  description,
  price,
  photoUrl,
}: IProductProps): JSX.Element {
  const parentClassName = clearClassName(`
    flex bg p-4 rounded-lg bg-border
  `);

  return (
    <div className={parentClassName}>
      <Image
        className="mr-3"
        src={photoUrl}
        alt={title}
        width={200}
        height={200}
      />
      <div>
        <div>
          <span className="title">Title: </span>
          <h2 className="inline">{title}</h2>
        </div>
        <p>
          <span className="title">Description: </span>
          {description}
        </p>
        <p>
          <span className="title">Price: </span>
          <span className="important">{price}$</span>
        </p>
      </div>
    </div>
  );
}
