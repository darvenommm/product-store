import { AuthButtons, ThemeSwitcher } from '@/features';
import { Container, Logo } from '@/shared/ui';
import { getTheme } from '@/entities/theme';

export function Header() {
  return (
    <header className="bg py-2">
      <Container
        as="nav"
        className="flex flex-wrap justify-between items-center"
      >
        <Logo />
        <div className="flex flex-wrap">
          <ThemeSwitcher theme={getTheme()} />
          <AuthButtons />
        </div>
      </Container>
    </header>
  );
}
