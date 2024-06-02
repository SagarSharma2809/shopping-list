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

    const deleteItem = (itemId) => {
        setItems((currdata) => {

            return currdata.filter(item => itemId != item.id);
        })
        console.log("item deleted");

    }



    let count = 1;

    return (
        <>
            <div className="flex flex-row flex-wrap overflow-hidden">

                <img src="https://img.freepik.com/free-vector/shopping-cart-with-bags-gifts-concept-illustration_114360-18775.jpg" className="w-1/4 md:w-1/4 lg:w-1/4 object-contain basis-1 lg:basis-1/2  self-start" alt="shopping-cart" />

                <div className="basis-1/2 flex flex-col items-center gap-8">
                    <h1 className="mt-4 text-lg md:text-3xl font-bold text-green-700 text-center">SHOPPING LIST! Add to Cart...</h1>
                    <ValidatedShoppingListForm addData={addItem} />
                    <ul className="w-1/2 font-bold">
                        {items.map((i) =>
                            <li className="p-2 bg-sky-200 odd:bg-sky-100 flex items-center justify-between" key={i.id}>
                                <span className="text-slate-600">{count++}) </span>
                                <span className="text-green-800">{i.product}</span>
                                - <span className="text-emerald-600">{i.quantity} </span>
                                <span className="p-2 rounded-full transition duration-300 ease-in justify-self-end hover:bg-white hover:cursor-pointer" onClick={() => { deleteItem(i.id) }}>🗑️</span>
                            </li>)}
                    </ul>
                </div>



            </div>


        </>
    )
}

export default ShoppingList;