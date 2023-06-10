import Product from "./Product";

const CartComponent = (props) => {
  const cartProducts = props.product;

  return (
    <>
      <div className="py-4">
        <h1 className="px-4 text-4xl font-semibold">Shopping Cart</h1>
        <div className="border"></div>
      </div>
      {cartProducts.map((item, i) => (
        <div key={i} className="flex flex-row gap-6">
          <div className="image w-[20%]">
            <img
              className="w-[100%] inline"
              src={item.imageUrl}
              alt="product image"
            />
          </div>
          <div className="desc">
            <p className="uppercase font-semibold text-3xl pb-1">{item.name}</p>
            <p className="uppercase text-gray-500">{item.description}</p>
            <p className="font-bold text-xl">
              <span className="text-4xl">$</span>
              {item.price}
            </p>
            <div className="dropdown border-2 w-16 rounded-lg mt-4 bg-gray-200">
              <label htmlFor="quantity">
                <span>Qty:</span>
              </label>
              <select
                className="bg-transparent outline-none"
                name="quantity"
                id="quantity"
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
            </div>
          </div>
        </div>
      ))}
      <div className="justify-center py-4 items-center flex">
        <button className="uppercase border-2 px-4 py-2 rounded-lg hover:bg-black hover:text-white duration-200">
          Bye Now
        </button>
      </div>
    </>
  );
};

export default CartComponent;
