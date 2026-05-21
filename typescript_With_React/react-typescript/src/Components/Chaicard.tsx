interface ChaicardProps {
  name: string;
  price: number;
  isSpecial?: boolean;
}

export function Chaicard({ name, price, isSpecial = false }: ChaicardProps) {
  return (
    <>
      <h5>
        {name}
        {isSpecial && <span>👌</span>}
      </h5>
      <h2>{price}</h2>
    </>
  );
}
