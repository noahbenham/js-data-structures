let input = {
  "products": [
      {
          "name": "iPad",
          "cost": "799",
          "color": "grey",
          "maker": "Apple"
      },
      {
          "name": "Surface",
          "cost": "899",
          "color": "black",
          "maker": "Microsoft"
      },
      {
          "name": "iPhone",
          "cost": "799",
          "color": "grey",
          "maker": "Apple"
      },
      {
          "name": "Google Phone",
          "cost": "499",
          "color": "white",
          "maker": "Google"
      },
      {
          "name": "Lumia 950",
          "cost": "599",
          "color": "black",
          "maker": "Microsoft",
          "toString": "🌕"
      }
  ],
  "exclusions": [
      {
          "key": "maker",
          "value": "Apple"
      },
      {
          "key": "maker",
          "value": "Google"
      },
      {
          "key": "toString",
          "value": "🌕"
      }
  ]
}

// should return a list of the products which don't meet any of the exclusions.

/** in this case output [{
          "name": "Surface",
          "cost": "899",
          "color": "black",
          "maker": "Microsoft"
      }];
*/

function filter(input) {
  const { products, exclusions } = input;

  return products.filter(product => !exclusions.find(exclusion =>
    product[exclusion.key] === exclusion.value));
}

console.log(filter(input));
