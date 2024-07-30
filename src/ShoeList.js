import React from 'react';
import './App.css';

// The array of shoes with name, price, and color
const shoes = [
  { name: "Nike Air Max", price: 120, color: "Red" },
  { name: "Adidas Ultraboost", price: 180, color: "Blue" },
  { name: "Crocs", price: 40, color: "Green" },
  { name: "Nike Dunks ", price: 125, color: "White" },
  { name: "Converse", price: 55, color: "Black" }
];

// The ShoeList component
const ShoeList = ({ onColorChange }) => {
  return (                                        //sets up button onCLick to display shoes color based on the above info
    <div>
      <h1>Shoe List</h1>
      <ul>
        {shoes.map((shoe, index) => (                       /*get info for shoe from the array */
          <li key={index}>
            <button onClick={() => onColorChange(shoe.color)}>
              {shoe.name} - ${shoe.price}
            </button>
          </li>
        ))}
      </ul>
    </div>                      //sets shoe name and price to display in top section and color to display after clicked
  );
};

export default ShoeList;
