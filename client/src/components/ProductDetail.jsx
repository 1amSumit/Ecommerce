import { cartAction } from "../store/Cart";
import { useDispatch } from "react-redux";
import { useState } from "react";

const ProductDetail = (props) => {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState(false);

  const { image, name, _id, description, price } = props.product;

  const addToCart = () => {
    dispatch(
      cartAction.addToCart({
        _id,
        name,
        image,
        description,
        price,
      })
    );

    setAddedToCart(true);
  };
  const byeNow = () => {};

  return (
    <>
      <div className="container grid grid-cols-2  ">
        <div className="imageSide items-center px-6 py-4">
          <img src={image} className="w-[70%]" alt="Product Image" />
        </div>
        <div className="totalSide  items-center p-8">
          <h1 className="font-semibold uppercase font-sans  text-4xl pb-1">
            {name}
          </h1>
          <p className="text-lg text-gray-600 uppercase pb-4">{description}</p>
          <p className="font-bold text-2xl pb-2">
            <span className="text-4xl">$</span>
            {price}
          </p>
          <div className="btns flex flex-row gap-2">
            <button
              onClick={byeNow}
              className="w-36 uppercase bg-[#555] hover:text-gray-700 hover:bg-neutral-300 duration-200 border-2 px-3 py-2 rounded-lg text-gray-100"
            >
              Bye now
            </button>
            <button
              onClick={addToCart}
              className=" text-gray-600 uppercase hover:bg-[#111] hover:text-gray-100 duration-200 border-2 px-4 py-2 rounded-lg  w-36 relative"
              disabled={addedToCart}
            >
              {addedToCart && (
                <span className="absolute top-0 right-0 ">✔️</span>
              )}
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
