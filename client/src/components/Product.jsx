import { Link } from "react-router-dom";

const Product = (props) => {
  const { id, name, price, description, imageUrl, tags } = props.product;
  return (
    <div className="container flex flex-col  shadow-lg rounded-lg cursor-pointer w-36 items-center">
      <Link to={`/products/${id}`}>
        <div className="image w-32 h-22">
          <img src={imageUrl} alt="Laptop Image" />
        </div>
        <div className="content text-center p-2">
          <h2 className="font-bold text-lg uppercase">{name}</h2>
          <p className="">
            <spna className="font-bold text-xl">$</spna>
            {price}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
