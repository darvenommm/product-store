import './globals.css';
import { Inter } from 'next/font/google';

import { StateProvider, ReactQueryProvider } from '@/providers';
import { Header } from '@/widgets';

import { Children, Container } from '@/shared';

import { clearClassNames } from '@/shared';

const inter = Inter({ subsets: ['latin'] });

const bodyClassNames = clearClassNames(`
  ${inter.className}
  bg-white dark:bg-black/90
  text-black dark:text-white
`);

interface IRootProps {
  children: Children;
}

export default function RootLayout({ children }: IRootProps) {
  return (
    <html lang="en">
      <body className={bodyClassNames}>
        <StateProvider>
          <ReactQueryProvider>
            <Header />
            <Container as="main" className="mt-5">
              {children}
            </Container>
          </ReactQueryProvider>
        </StateProvider>
      </body>
    </html>
  );
}
