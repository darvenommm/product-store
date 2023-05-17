import { Button } from '@/shared';

interface IAuthButtonsProps {
  className?: string;
}

export function AuthButtons({ className }: IAuthButtonsProps): JSX.Element {
  return (
    <div className={`flex items-center ${className}`}>
      <Button className="mr-2">Hello</Button>
      <Button styleType="bright">Sign up</Button>
    </div>
  );
}
