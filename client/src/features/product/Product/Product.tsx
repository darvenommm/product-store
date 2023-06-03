import Image from 'next/image';

import { clearClassName } from '@/shared/helpers';

import type { IProduct } from '@/entities/product';

interface IProductProps extends Omit<IProduct, 'id'> {}

export function Product({
  title,
  description,
  price,
  photoUrl,
}: IProductProps): JSX.Element {
  const parentClassName = clearClassName(`
    flex flex-col bg rounded-lg p-3 border-2
    border-gray-800 dark:border-transparent
  `);
  const titleClassName = 'text-blue-600 font-bold';

  return (
    <div className={parentClassName}>
      <Image
        className="mb-4 max-h-[400px]"
        src={photoUrl}
        alt={title}
        width={200}
        height={200}
      />
      <div className="flex flex-col justify-between flex-grow">
        <div>
          <p className="mb-2">
            <span className={titleClassName}>Title:</span>{' '}
            <span className="block break-words">{title}</span>
          </p>
          <p className="mb-3 max-h-[203px] overflow-hidden">
            <span className={titleClassName}>Description:</span>
            <span className="block break-words">{description}</span>
          </p>
        </div>
        <div className="flex justify-between">
          <span className={titleClassName}>Price:</span>
          <p className="text-rose-800 font-bold">{price}</p>
        </div>
      </div>
    </div>
  );
}
