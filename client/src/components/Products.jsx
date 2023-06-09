import Product from "./Product";
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
];

const Products = () => {
  return productItems.map((product, i) => (
    <>
      <Card key={i} className="flex flex-row">
        <Product key={i} product={product} />
      </Card>
    </>
  ));
};

export default Products;
