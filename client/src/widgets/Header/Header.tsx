import { ThemeSwitcher } from '@/features/theme';
import { AuthButtons } from '@/features/user';
import { Logo } from '@/components';
import { Container } from '@/shared/ui';
import { Button } from '@/shared/ui';
import { getThemeOnServer } from '@/entities/theme/onlyServer';
import { CheckAuthentication } from '@/features/user';
import Link from 'next/link';

export function Header() {
  const startTheme = getThemeOnServer();

  return (
    <header className="bg py-2 border-b-2 border-gray-800 dark:border-transparent">
      <Container
        as="nav"
        className="flex flex-wrap justify-between items-center py-1"
      >
        <Logo />
        <div className="flex flex-wrap items-center gap-2">
          <ThemeSwitcher startTheme={startTheme} />
          <CheckAuthentication message={null}>
            <Link href="/create-product">
              <Button as="span">Create Product</Button>
            </Link>
          </CheckAuthentication>
          <AuthButtons />
        </div>
      </Container>
    </header>
  );
}
