import React from "react";

const Fruit = ({ fruit }) => {
    return (
        <div className="fruit">
            <ul>
                <li>
                    <strong>Fruit: </strong> {fruit.name}
                </li>
                <li>
                    <strong>Quantity: </strong> {fruit.quantity}
                </li>
            </ul>
            <button onClick={() => alert(fruit.id)}>Remove</button>
        </div>
    );
}

export default Fruit;