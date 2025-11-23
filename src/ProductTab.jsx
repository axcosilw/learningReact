import Product from "./product.jsx";
function ProductTab() {
  let options = [<li>"tasty"</li>, <li>"sweet"</li>];
  //let options2 = { a: "yello", b: "green" };
  let options3 = ["hello", "my", "world"];

  return (
    <>
      <Product
        title="apple"
        price={3000000}
        // features={options}
        // features2={["hola"]}
        //features3={options3}
      />
      <Product title="banana" price="9000" features={options} />
      <Product title="mango" price="9k" />
    </>
  );
}

export default ProductTab;
