import Link from 'next/link';

interface ILogoProps {
  className?: string;
}

export function Logo({ className }: ILogoProps): JSX.Element {
  return (
    <Link
      href="/"
      className={`flex items-center text-black dark:text-white hover:opacity-80 active:opacity-60 ${className}`}
    >
      <span className="self-center text-xl font-bold whitespace-nowrap">
        Product Store
      </span>
    </Link>
  );
}
