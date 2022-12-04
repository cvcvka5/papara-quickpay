import mongoose from 'mongoose';
import orderSchema from '../schemas/OrderSchema';

const Order = mongoose.model("Order", orderSchema);

export default Order;