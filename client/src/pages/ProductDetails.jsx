import ProductDetail from "../components/ProductDetail";
import { json, useRouteLoaderData, Await } from "react-router-dom";

const ProductDetails = () => {
  const { product } = useRouteLoaderData("product-load");
  return (
    <Await resolve={product}>
      {(productLoad) => <ProductDetail product={productLoad} />}
    </Await>
  );
};

export default ProductDetails;

export const loader = async ({ params, request }) => {
  const res = await fetch(`http://localhost:8080/api/products/${params.id}`);

  if (!res.ok) {
    return json({ message: "Could not find the product" }, { status: 404 });
  } else {
    const data = await res.json();
    console.log(data.data);
    return data.data;
  }
};
