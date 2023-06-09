import Product from "./Product";
import Card from "../UI/Card";

const Products = (props) => {
  return (
    <>
      <Card className=" rounded-xl py-4 w-[30%] px-4 mx-4 shadow-lg mt-2 mb-4 items-center justify-center bg-slate-50">
        <h1 className="px-4 text-xl font-serif">Electronics Products</h1>
        <div className="grid grid-cols-2 gap-2">
          {productItems.map((product, i) => (
            <Product key={i} product={product} />
          ))}
        </div>
      </Card>
    </>
  );
};

export default Products;
