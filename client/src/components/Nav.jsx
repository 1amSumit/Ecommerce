import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const navItems = [
  { item: "Sign In", path: "/sign" },
  { item: "Retun & Orders", path: "/return" },
];

const Nav = () => {
  const totalProducts = useSelector((state) => state.cart.totalProducts);
  return (
    <nav className="flex flex-row justify-between top-0 left-0 items-center bg-[#272c30] px-4 py-1 sticky ">
      <NavLink to="/">
        <div className="logo-container w-12 h-12">
          <img
            className="w-full"
            src="../../assests/PNG Assets/Bag 2.png"
            alt="AppLogo"
          />
        </div>
      </NavLink>
      <div className="searchBar flex flex-row gap-2 ">
        <input
          className="px-4 w-72 h-9 py-2 border-[1px] text-[#000] placeholder:text-[#000] border-gray-400  rounded-lg bg-[#fff] outline-none"
          type="search"
          placeholder="Search..."
        />
        <button
          className="px-4 cursor-pointer py-1 border-[1px] border-gray-400
          rounded-lg text-[#eee] bg-transparent hover:bg-[#333]"
          type="button"
        >
          Search
        </button>
      </div>
      <div className="navItems item-center justify-center">
        <ul className="flex flex-col sm:flex-row gap-4 pr-14">
          {navItems.map((navItem, i) => (
            <li className="text-[#eee]" key={i}>
              <NavLink to={navItem.path}>{navItem.item}</NavLink>
            </li>
          ))}
          <li className="text-[#eee] border-2 relative border-gray-700 px-2 py-1 rounded-lg">
            <NavLink to="cart" className="m-2">
              <span className="font-bold text-sm absolute top-0 right-0 ">
                {totalProducts}
              </span>
              Cart
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
