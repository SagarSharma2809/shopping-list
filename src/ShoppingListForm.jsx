import { useState } from "react";

export function ShoppingListForm({ addData }) {

    const [formData, setformData] = useState({ product: "", quantity: "" });
    //we need to bind this state with the input

    const updateFormdata = (evt) => {
        setformData((currdata) => {
            return { ...currdata, [evt.target.name]: evt.target.value }
        })
    }

    const handleClick = (e) => {
        e.preventDefault();
        addData(formData);

        setformData({ product: "", quantity: "" })
    }

    return (
        <div>
            <form action="">
                <label htmlFor="productName">Product: </label>
                <input type="text" placeholder="Enter product name..." id="productName" value={formData.product} onChange={updateFormdata} name="product" />


                <label htmlFor="productQuantity">Quantity: </label>
                <input type="number" placeholder="Enter quantity" id="productQuantiy" value={formData.quantity} onChange={updateFormdata} name="quantity" />


                <button onClick={handleClick}>Add</button>

            </form>
        </div>
    )
}

export default ShoppingListForm;