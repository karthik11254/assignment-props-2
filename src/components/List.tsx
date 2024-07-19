import { ListDetails } from "./List.type";

export default function List(item: ListDetails) {

    return (
        <div className="item">
            <p>Name: {item.name}</p>
            <p>Color: {item.color}</p>
            <p>Price: {item.price}</p>
        </div>
    );
}