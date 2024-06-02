import React from 'react';
import { useForm } from 'react-hook-form';

export function ValidatedShoppingListForm({ addData }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        addData(data);
        reset();

    };

    const registerOptions = {
        product: {
            required: "This is required",
            maxLength: { value: 20, message: "Maximum length is 20" }
        },
        quantity: {
            required: "This cannot be empty",
            min: { value: 1, message: "Quantity cannot be 0" }
        },
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center '>
            <div className='w-full max-w-xs mb-1 flex items-center'>
                <label htmlFor="product" className='text-md font-medium text-amber-800 w-1/2'>Product Name:</label>
                <input
                    type="text"
                    id="product"
                    placeholder='Enter product name'
                    className="w-1/2 px-3 py-2 border border-gray-400 rounded"
                    {...register("product", registerOptions.product)}
                />
            </div>
            {errors.product && <span className='text-red-600 mb-6'>{errors.product.message}</span>}

            <div className='w-full max-w-xs mb-3 flex items-center'>
                <label htmlFor="quantity" className='text-md font-medium text-amber-800 w-1/2'>Quantity:</label>
                <input
                    type="number"
                    id="quantity"
                    placeholder='Enter quantity'
                    className="w-1/2 px-3 py-2 border border-gray-400 rounded"
                    {...register("quantity", registerOptions.quantity)}
                />
            </div>
            {errors.quantity && <span className='text-red-600 mb-1'>{errors.quantity.message}</span>}

            <button type="submit" className='px-4 py-2 w-28 m-6 mb-2 bg-green-500 text-white rounded hover:bg-green-600'>ADD</button>
        </form>
    );
}

export default ValidatedShoppingListForm;
