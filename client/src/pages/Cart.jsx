import CartComponent from "../components/CartComponent";
import { useLoaderData } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "laptop",
    imageUrl:
      "https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg",
    price: "34886",
    description: "Hp laptop for gaming and entertainment",
    tags: ["electronic", "laptop"],
  },
  {
    id: 2,
    name: "laptop",
    imageUrl:
      "https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg",
    price: "34886",
    description: "Hp laptop for gaming and entertainment",
    tags: ["electronic", "laptop"],
  },
];

const Cart = () => {
  return <CartComponent product={products} />;
};

export default Cart;
