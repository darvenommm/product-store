import { ProductCard } from '@/components/product/ProductCard';
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
      <ul
        className="grid gap-4"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}
      >
        {products.map(({ id, ...productsProps }) => (
          <li key={id}>
            <ProductCard productId={Number(id)} {...productsProps} />
          </li>
        ))}
      </ul>
    </section>
  );
}
