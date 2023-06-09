import { Link } from "react-router-dom";
import Product from "../components/Product";
import Card from "../UI/Card";

const productItems = [
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
  {
    id: 3,
    name: "laptop",
    imageUrl:
      "https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg",
    price: "34886",
    description: "Hp laptop for gaming and entertainment",
    tags: ["electronic", "laptop"],
  },
  {
    id: 4,
    name: "laptop",
    imageUrl:
      "https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg",
    price: "34886",
    description: "Hp laptop for gaming and entertainment",
    tags: ["electronic", "laptop"],
  },
];

const Products = () => {
  return (
    <Card className="">
      <h1 className="font-sarif font-semibold text-xl ">All Products</h1>
      {productItems.map((item) => (
        <Product key={item.id} product={item} />
      ))}
    </Card>
  );
};

export default Products;
