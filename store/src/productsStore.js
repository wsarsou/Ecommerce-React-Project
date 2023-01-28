// Coffee: price_1MVI3aHMflWDbA3QjoL2W2OJ
// Sunglasses: price_1MVI4WHMflWDbA3QTM0PbC7X
//Camera: price_1MVI4vHMflWDbA3Q0WAcEqnA

const productsArray = [
  {
    id: 'price_1MVI3aHMflWDbA3QjoL2W2OJ',
    title: 'Coffee',
    price: 4.99,
  },
  {
    id: 'price_1MVI4WHMflWDbA3QTM0PbC7X',
    title: 'Sunglasses',
    price: 9.99,
  },
  {
    id: 'price_1MVI4vHMflWDbA3Q0WAcEqnA',
    title: 'Camera',
    price: 39.99,
  },
];

function getProductData(id) {
  let productData = productsArray.find(product => product.id === id);

  if (productData == undefined) {
    console.log('Product data does not exist for ID: ' + id);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
