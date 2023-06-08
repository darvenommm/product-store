import Image from 'next/image';

import { clearClassName } from '@/shared/helpers/react';
import Link from 'next/link';

import type { IProduct } from '@/entities/product/types';

interface IProductCardProps extends Omit<IProduct, 'id'> {
  productId: number;
}

export function ProductCard({
  title,
  description,
  price,
  photoUrl,
  productId,
}: IProductCardProps): JSX.Element {
  const parentClassName = clearClassName(`
    flex flex-col bg rounded-lg p-3 bg-border w-[250px]
  `);

  return (
    <Link className={parentClassName} href={`/products/${productId}`}>
      <Image
        className="mb-4 h-[300px] object-contain"
        src={photoUrl}
        alt={title}
        width={300}
        height={200}
      />
      <div className="flex flex-col justify-between flex-grow">
        <div>
          <p className="mb-2">
            <span className="title">Title:</span>
            <span className="block break-words">{title}</span>
          </p>
          <p className="mb-3 max-h-[203px] overflow-hidden">
            <span className="title">Description:</span>
            <span className="block break-words">
              {description.length < 200
                ? description
                : `${description.slice(0, 200).trimEnd()}...`}
            </span>
          </p>
        </div>
        <div className="flex justify-between">
          <span className="title">Price:</span>
          <p className="important">{price}$</p>
        </div>
      </div>
    </Link>
  );
}
