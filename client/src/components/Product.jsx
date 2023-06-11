import { Link } from "react-router-dom";

const Product = (props) => {
  const { _id, name, price, image } = props.product;
  return (
    <div className="container flex flex-col  shadow-lg rounded-lg cursor-pointer w-36 items-center">
      <Link to={`${_id}`}>
        <div className="image w-32 h-22">
          <img src={image} alt="Laptop Image" />
        </div>
        <div className="content text-center p-1">
          <h2 className="font-bold text-sm uppercase">{name}</h2>
        </div>
      </Link>
    </div>
  );
};

export default Product;
