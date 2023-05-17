import './globals.css';
import { Inter } from 'next/font/google';

import { StateProvider } from '@/providers';
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
          <Header />
          <Container as="main" className="mt-4">
            {children}
          </Container>
        </StateProvider>
      </body>
    </html>
  );
}
