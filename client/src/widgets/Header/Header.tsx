import { AuthButtons } from '@/features';
import { Container, Logo } from '@/shared';

export function Header() {
  return (
    <header className="py-2 bg-gray-100 dark:bg-gray-800 shadow-md dark:shadow-none">
      <Container
        as="nav"
        className="flex flex-wrap justify-between items-center "
      >
        <Logo />
        <AuthButtons />
      </Container>
    </header>
  );
}
