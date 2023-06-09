import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <section className="Electronic Products flex flex-row flex-wrap">
        <Products />
        <Products />
        <Products />
      </section>

      <main className="overflow-x-auto">
        <Products />
      </main>
    </>
  );
};

export default Home;
