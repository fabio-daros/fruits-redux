import React, { useState } from "react";


const AddFruit = () => {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);

    const addFruit = (event) => {
        event.preventDefault();

        const fruit = {
            id: new Date(),
            name,
            quantity,
        };

        console.log("Adding fruit", fruit);
    }

    return (
        <form onSubmit={addFruit}>
            <input
                type="text"
                name={name}
                placeholder="Fruit"
                required
                onChange={(event) => setName(event.target.value)}
            />
            <input
                type="number"
                name={quantity}
                placeholder="Quantity"
                required
                onChange={(event) => setQuantity(event.target.value)}
            />
            <button type="submit">Add Fruit</button>
        </form>
    )
}

export default AddFruit;