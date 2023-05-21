import { AuthButtons, ThemeSwitcher } from '@/features';
import { Container, Logo } from '@/shared/ui';

export function Header() {
  return (
    <header className="bg py-2">
      <Container
        as="nav"
        className="flex flex-wrap justify-between items-center"
      >
        <Logo />
        <div className="flex">
          <ThemeSwitcher />
          <AuthButtons />
        </div>
      </Container>
    </header>
  );
}
