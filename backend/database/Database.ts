import mongoose from "mongoose";

abstract class Database {
  protected _connected: boolean = false;

  abstract connect(force: boolean): Promise<boolean>;
}


class DatabaseQuickpay extends Database {

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
}
