import express, { Request, Response } from "express";
import { OrdersDatabase } from "../database/Database";
import Package from "../classes/Package";
import Product from "../classes/Product";
import Order from "../database/models/Order";

const ordersDB = new OrdersDatabase();
(async () => {
  await ordersDB.connect(false);
})();


const router = express.Router();
router.use(express.json())


type bodyFields = {
  packageName: string,
  products: Array<{
    name: string,
    price: number
  }>
};
type orderCreateRequest = Request<{id: string}, {}, bodyFields>
// Create new order.,
router.post("/order/:id/create", async (req: orderCreateRequest, res: Response) => {
  await ordersDB.connect(false); // Non force connect.

  if (!req.body.packageName || !req.body.products || !req.body.products.length ) {
    return res.status(400).send({ "Error": "Required fields are ('packageName', 'products', 'products.name', 'products.price')." });
  }
  
  const products: Array<Product> = [];
  for (let i = 0; i < req.body.products.length; i++) {
    const product = new Product(req.body.products[i].name, req.body.products[i].price);
    products.push(product)
  }

  const pack = new Package(req.body.packageName, products);
  const order = new Order({ "id": 123, "package": pack });
  await order.save();

  return res.status(201).send(req.body);
});


export default router;