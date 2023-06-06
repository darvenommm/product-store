import { Product } from '@/features/product/Product';
import { Info } from '@/components/Info';

import type { IProduct } from '@/entities/product/types';

interface IProductsProps {
  products: IProduct[];
}

export function Products({ products }: IProductsProps): JSX.Element {
  return (
    <section>
      <h2 className="sr-only">Products.</h2>
      {products.length === 0 && <Info>There are no products</Info>}
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}
      >
        {products.map(({ id, ...productsProps }) => (
          <Product key={id} {...productsProps} />
        ))}
      </div>
    </section>
  );
}
