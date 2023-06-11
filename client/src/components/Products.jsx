import Product from "./Product";
import Card from "../UI/Card";

const Products = (props) => {
  const { products } = props.products;
  return (
    <>
      <Card className=" rounded-xl py-4 w-[30%] px-4 mx-4 shadow-lg mt-2 mb-4 items-center justify-center bg-slate-50">
        <h1 className="font-sarif font-semibold text-xl ">All Products</h1>
        <div className="grid grid-cols-2 gap-2">
          {products.map((product, i) => (
            <Product key={i} product={product} />
          ))}
        </div>
      </Card>
    </>
  );
};

export default Products;
