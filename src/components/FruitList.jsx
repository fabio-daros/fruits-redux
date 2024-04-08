import React from 'react';
import AddFruit from './AddFruit';
import Fruit from './Fruit';

const FruitList = () => {
    const fruits = [
        { id: 1, name: "Apple", quantity: 5 },
        { id: 2, name: "Banana", quantity: 10 },
        { id: 3, name: "Cherry", quantity: 15 },
    ];

    return (
        <>
            <h1>Fruit List</h1>

            <AddFruit />

            {fruits.map(fruit => (
                <Fruit key={fruit.id} fruit={fruit} />
            ))}
        </>
    );
};

export default FruitList;