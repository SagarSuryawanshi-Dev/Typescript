import type { Chai } from "../types/listTypes.tsx";
import { Card } from "./typescriptComponent.tsx";

interface ChailistProps {
    items: Chai[]
}

export function List({items}: ChailistProps) {
    return (
        <div>
            {items.map((chai) =>(
                <Card
                key={chai.id}
                name={chai.name}
                price={chai.price}
                isSpecial={false}
                />

                
            ))}
        </div>
    )
}

export default List;