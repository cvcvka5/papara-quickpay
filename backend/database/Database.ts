import mongoose from "mongoose";
import Package from '../classes/Package';
import Product from '../classes/Product';
import Order from './models/Order';

abstract class Database {
  protected _connected: boolean = false;

  abstract connect(force: boolean): Promise<boolean>;
}


class OrdersDatabase extends Database {

  constructor() {
    super();
  }

  async connect(force: boolean = false): Promise<boolean> {
    if (!this._connected || force) {
      await mongoose.connect("mongodb+srv://cvcvka5:1456@cluster0.vrsswjx.mongodb.net/orders/")
    }
    this._connected = true;

    return this._connected;
  }

  async addOrder(pack: Package): Promise<void> {
    if (!this._connected) { await this.connect() }

    const order = new Order({ "package": pack });
    await order.save();
  }
}

export { OrdersDatabase, Database };
