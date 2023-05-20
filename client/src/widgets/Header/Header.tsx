import { AuthButtons } from '@/features';
import { Container, Logo } from '@/shared';

export function Header() {
  return (
    <header className="bg py-2">
      <Container
        as="nav"
        className="flex flex-wrap justify-between items-center"
      >
        <Logo />
        <AuthButtons />
      </Container>
    </header>
  );
}
