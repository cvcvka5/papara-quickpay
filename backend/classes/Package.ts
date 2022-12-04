import Product from "./Product";

class Package {
  private _name: string;
  private _products: Array<Product>;
  private _lastRemoval: Product | null | undefined;

  constructor(name: string, products: Array<Product>) {
    this._name = name;
    this._products = products;
  }


  takeActionBack(): void {
    if (this._lastRemoval !== null && this._lastRemoval !== undefined) {
      this._products.push(this._lastRemoval);
      this._lastRemoval = null;
    }
  }

  removeProduct(index: number): Product {
    const removedProduct = this._products.splice(index, 1)[0];

    if (removedProduct !== undefined) {
      this._lastRemoval = removedProduct;
    }

    return removedProduct 
  }

  removeLastProduct(): Product | undefined {
    const removedProduct = this._products.pop();

    if (removedProduct !== undefined) {
      this._lastRemoval = removedProduct;
    }

    return removedProduct 
  }

  addProduct(product: Product): number {
    this._products.push(product);

    return this._products.length;
  }

  
  get totalPrice(): number {
    const totalPrice = this._products.reduce((accumulator: number, product: Product) => {
      return accumulator + product.price;
    }, 0);
    return totalPrice;
  }

  get name(): string {
    return this._name;
  }

  get products(): Array<Product> {
    return this._products;
  }

}

export default Package;