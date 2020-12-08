import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, default: 0 },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const prodctSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  weightOrDimensions: { type: String, required: true },
  price: { type: Number, default: 0, required: false },
  category: { type: String, required: true },
  countInStock: { type: Number, default: 0, required: false },
  description: { type: String, required: true },
  rating: { type: Number, default: 0, required: true },
  numReviews: { type: Number, default: 0, required: true },
  reviews: [reviewSchema],
});

const productModel = mongoose.model('Product', prodctSchema);

export default productModel;
