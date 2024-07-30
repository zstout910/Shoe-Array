import React from 'react';

const ShoeColor = ( {color} ) => { //creates ShoeColor
  return (
    <div>
      <h2>Shoe Color</h2>
      <p>{`Selected color: ${color}`}</p>
    </div>                      //displays selected shoes color
  );                                //color comes from the ShoeList array
};

export default ShoeColor;
