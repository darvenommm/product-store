import { ThemeSwitcher } from '@/features/theme/ThemeSwitcher';
import { AuthButtons } from '@/features/user/AuthButtons';
import { Logo } from '@/components/Logo';
import { Container } from '@/shared/ui/Container';
import { Button } from '@/shared/ui/Button';
import { getThemeOnServer } from '@/entities/theme/getThemeOnServer';
import { CheckAuthentication } from '@/features/user/CheckAuthentication';
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
