import './globals.css';
import 'react-toastify/dist/ReactToastify.css';

import { Inter } from 'next/font/google';

import {
  StateProvider,
  ReactQueryProvider,
  ToastifyProvider,
} from '@/providers';
import { Header } from '@/widgets';
import { Container } from '@/shared/ui';
import { clearClassName } from '@/shared/helpers';
import { getThemeOnServer } from '@/entities/theme';

import type { Children } from '@/shared/types';

const inter = Inter({ subsets: ['latin'] });

const bodyClassNames = clearClassName(`
  ${inter.className}
  bg-white dark:bg-black/90
  text-black dark:text-white
`);

interface IRootProps {
  children: Children;
}

export default function RootLayout({ children }: IRootProps): JSX.Element {
  const theme = getThemeOnServer();

  return (
    <html className={theme} lang="en">
      <body className={bodyClassNames}>
        <StateProvider>
          <ReactQueryProvider>
            <ToastifyProvider>
              <Header />
              <Container as="main" className="mt-5">
                {children}
              </Container>
            </ToastifyProvider>
          </ReactQueryProvider>
        </StateProvider>
      </body>
    </html>
  );
}
