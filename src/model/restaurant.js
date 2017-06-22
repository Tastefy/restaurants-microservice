import mongoose from 'mongoose'

const restaurantSchema = mongoose.Schema({
  name: String
});
export default mongoose.model('Restaurant', restaurantSchema)
