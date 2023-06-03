interface IInfoProps {
  children: string;
}

export function Info({ children }: IInfoProps): JSX.Element {
  return (
    <div className="flex justify-center mt-20">
      <p className="text-3xl text-emerald-600 font-bold">{children}</p>
    </div>
  );
}
