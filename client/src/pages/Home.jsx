import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Link
      to={"products"}
      className="bg-gray-700 text-white px-4 py-2 rounded-lg"
    >
      All products
    </Link>
  );
};

export default Home;
