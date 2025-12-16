import "./product.css";
import Price from "./Price";
function Product({ title, idx, Description }) {
  let oldPrices = ["2340", "119,34", "34,443", "991,11"];
  let newPrices = ["1110", "11204", "33003", "999,011"];
  let description = [
    ["You're on a roduct", "5 programmable butons"],
    ["Because  missing", "intutive"],
    ["Make features safe coding", "happie-happie-optical"],
    ["but  feature", "lol"],
  ];
  return (
    <>
      <div className="Product">
        <h4>{title}</h4>
        <p>{description[idx][0]}</p>
        <p>{description[idx][1]}</p>
        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
      </div>
    </>
  );
}

export default Product;
