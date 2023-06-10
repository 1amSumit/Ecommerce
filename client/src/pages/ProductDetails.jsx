import ProductDetail from "../components/ProductDetail";

const product = {
  id: 1,
  name: "laptop",
  imageUrl:
    "https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg",
  price: "34886",
  description: "Hp laptop for gaming and entertainment",
  tags: ["electronic", "laptop"],
};

const ProductDetails = () => {
  return <ProductDetail product={product} />;
};

export default ProductDetails;
