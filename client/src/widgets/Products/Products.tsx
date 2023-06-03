import { Product } from '@/features/product';
import { clearClassName } from '@/shared/helpers';

import type { IProduct } from '@/entities/product';

interface IProductsProps {
  products: IProduct[];
}

export function Products({ products }: IProductsProps): JSX.Element {
  const productsContainerClassName = clearClassName(`
    grid gap-4 grid-cols-1 preLaptop:grid-cols-2
    laptop:grid-cols-3 preDesktop:grid-cols-4
    desktop:grid-cols-5 2xDesktop:grid-cols-7
    3xDesktop:grid-cols-8
  `);

  return (
    <section>
      <h2 className="sr-only">Products.</h2>
      {products.length === 0 && (
        <div className="flex justify-center mt-20">
          <p className="text-3xl text-emerald-600 font-bold">
            No products found.
          </p>
        </div>
      )}
      <div className={productsContainerClassName}>
        {products.map(({ id, ...productsProps }) => (
          <Product key={id} {...productsProps} />
        ))}
      </div>
    </section>
  );
}
