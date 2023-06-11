/* eslint-disable react-refresh/only-export-components */
import { json, defer, useLoaderData, Await } from "react-router-dom";
import ProductsCmp from "../components/Products";
import Card from "../UI/Card";

const Products = () => {
  const { products } = useLoaderData();
  return (
    <Await resolve={products}>
      {(loadedProducts) => <ProductsCmp products={loadedProducts} />}
    </Await>
  );
};

export default Products;

const loaderProducts = async () => {
  const res = await fetch("http://localhost:8080/api/products");

  if (!res.ok) {
    return json({ message: "Couldn't find the products" }, { status: 404 });
  } else {
    const loadedEvents = await res.json();
    console.log(loadedEvents.data);
    return loadedEvents.data;
  }
};

export const loader = async () => {
  return defer({
    products: loaderProducts(),
  });
};
