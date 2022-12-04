import mongoose from 'mongoose';
import Package from '../../classes/Package';

const orderSchema = new mongoose.Schema({
  package: Package
})

export default orderSchema;