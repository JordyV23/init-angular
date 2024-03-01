export interface Product {
  description: string;
  price: number;
}

// const phone: Product = {
//   description: "NokiaA1",
//   price: 150,
// };

// const tablet: Product = {
//   description: "iPad Air",
//   price: 250,
// };

export interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

export function taxCalculation(options: TaxCalculationOptions): [number, number] {
  // function taxCalculation({tax, products}:TaxCalculationOptions ): [number, number] {
  const { tax, products } = options;
  let total = 0;

  products.forEach(({ price }) => {
    total += price;
  });

  return [total, total * tax];
}

// const shoppingCart = [phone, tablet];
// const tax = 0.15;

// const [totalPrice, taxAmount] = taxCalculation({ products: shoppingCart, tax });

// console.log(totalPrice, taxAmount);


