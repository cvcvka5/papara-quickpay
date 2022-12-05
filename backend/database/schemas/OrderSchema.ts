import mongoose from 'mongoose';
import Package from '../../classes/Package';

const orderSchema = new mongoose.Schema({
  id: Number
})

orderSchema.loadClass(Package);

export default orderSchema;