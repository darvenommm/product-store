import type { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Product Store | Main Page',
  description: 'The store for buying products',
};

export default function HomePage() {
  return <div>Hello World from the home page!</div>;
}
