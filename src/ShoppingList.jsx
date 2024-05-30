import ShoppingListForm from "./ShoppingListForm";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export function ShoppingList() {
    const [items, setItems] = useState([]);

    //we will now create a passdown function!
    const addData = (item) => {
        const obj = { ...item, id: uuidv4() };
        setItems((currdata) => {
            return [...currdata, obj];
        })
    }

    return (
        <>
            <h1>Shopping List!! Add to Cart...</h1>
            <ShoppingListForm addData={addData} />
            <ul>
                {items.map((i) => <li key={i.id}>{i.product} - {i.quantity} </li>)}
            </ul>
        </>
    )
}

export default ShoppingList;