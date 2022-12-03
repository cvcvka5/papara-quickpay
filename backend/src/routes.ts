import express, { Request, Response } from "express";

const router = express.Router();
router.use(express.json())


type orderCreateRequest = Request<{id: string}, {}, {price: number}>
// Create new order.,
router.post("/order/:id/create", (req: orderCreateRequest, res: Response) => {
  const id = req.params.id;
  const price = req.body.price;

  if (!price) {
    return res.status(400).send({ "Error": "The query parameter 'price' is required." });
  }


  return res.status(201).send({id, price});
});


export default router;