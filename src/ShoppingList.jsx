import ValidatedShoppingListForm from "./ValidatedShoppingListForm";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export function ShoppingList() {
    const [items, setItems] = useState([]);

    //we will now create a passdown function!
    const addItem = (item) => {
        const obj = { ...item, id: uuidv4() };
        setItems((currdata) => {
            return [...currdata, obj];
        })
    }

    return (
        <>
            <div className="flex flex-row flex-wrap overflow-hidden">

                <img src="https://img.freepik.com/free-vector/shopping-cart-with-bags-gifts-concept-illustration_114360-18775.jpg" className="w-1/4 md:1/4 lg:w-1/4 object-contain basis-1 lg:basis-1/2 self-start" alt="shopping-cart" />

                <div className="basis-1/2 flex flex-col gap-8">
                    <h1 className="mt-4 text-3xl font-bold text-amber-700">Shopping List!! Add to Cart...</h1>
                    <ValidatedShoppingListForm addData={addItem} />
                    <ul>
                        {items.map((i) => <li key={i.id}>{i.product} - {i.quantity} </li>)}
                    </ul>
                </div>



            </div>


        </>
    )
}

export default ShoppingList;