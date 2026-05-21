import type { Chai } from "../types.ts";    
import { Chaicard } from "./Chaicard.tsx";

interface ChailistProps {
  items: Chai[];
}

export function ChaiList({ items }: ChailistProps) {
  return (
    <div>
      {items.map((item) => (
        <Chaicard
          key={item.id}
          name={item.name}
          price={item.price}
          isSpecial={item.price > 5}
        />
      ))}
    </div>
  );
}
