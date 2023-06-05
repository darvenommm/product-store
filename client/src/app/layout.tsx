import './globals.css';
import 'react-toastify/dist/ReactToastify.css';

import { Inter } from 'next/font/google';

import {
  StateProvider,
  ReactQueryProvider,
  ToastifyProvider,
  ThemeProvider,
} from '@/providers';
import { Header } from '@/widgets';
import { Container } from '@/shared/ui';
import { clearClassName } from '@/shared/helpers';
import { getThemeOnServer } from '@/entities/theme/onlyServer';

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

// !!!! provider order -> stateProvider | themeProvider | ToastifyProvider !!!!

export default function RootLayout({ children }: IRootProps): JSX.Element {
  const theme = getThemeOnServer();

  return (
    <html className={theme} lang="en">
      <body className={bodyClassNames}>
        <StateProvider>
          <ReactQueryProvider>
            <ThemeProvider startTheme={theme}>
              <ToastifyProvider>
                <Header />
                <Container as="main" className="mt-5">
                  {children}
                </Container>
              </ToastifyProvider>
            </ThemeProvider>
          </ReactQueryProvider>
        </StateProvider>
      </body>
    </html>
  );
}
