import { ThemeSwitcher } from '@/features/theme';
import { AuthButtons } from '@/features/user';
import { Logo } from '@/components';
import { Container } from '@/shared/ui';
import { getThemeOnServer } from '@/entities/theme';
import { Button } from '@/shared/ui';
import Link from 'next/link';

export function Header() {
  return (
    <header className="bg py-2">
      <Container
        as="nav"
        className="flex flex-wrap justify-between items-center py-1"
      >
        <Logo />
        <div className="flex flex-wrap items-center gap-2">
          <ThemeSwitcher theme={getThemeOnServer()} />
          <Link href="/create-product">
            <Button as="span">Create Product</Button>
          </Link>
          <AuthButtons />
        </div>
      </Container>
    </header>
  );
}
