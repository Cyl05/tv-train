import React, { useState } from "react";

const OrderForm = ({ onSubmit }) => {
    const [product, setProduct] = useState("");
    const [quantity, setQuantity] = useState(1);

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit({ product, quantity: Number(quantity) });
            }}
        >
            <input
                placeholder="Product name"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
            />

            <select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                data-testid='selectQuantity'
            >
                {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                        {num}
                    </option>
                ))}
            </select>

            <button data-testid="submitButton" type="submit">Place Order</button>
        </form>
    );
}

export default OrderForm;