import { AuthButtons, ThemeSwitcher } from '@/features';
import { Logo, ProductCreateButton } from '@/components';
import { Container } from '@/shared/ui';
import { getTheme } from '@/entities/theme';

export function Header() {
  return (
    <header className="bg py-2">
      <Container
        as="nav"
        className="flex flex-wrap justify-between items-center py-1"
      >
        <Logo />
        <div className="flex flex-wrap items-center gap-2">
          <ThemeSwitcher theme={getTheme()} />
          <ProductCreateButton />
          <AuthButtons />
        </div>
      </Container>
    </header>
  );
}
