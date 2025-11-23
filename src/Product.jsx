import "./product.css";

function Product({ title, price, features, features3 }) {
  let isDiscount = price > 30000;
  let styles = { backgroundColor: isDiscount ? "blue" : null };
  return (
    <>
      <div className="Product" style={styles}>
        <h4>Product title:{title}</h4>
        <p>Product's price:{price / 2}</p>

        {isDiscount && <p>discount of 5%</p>}
      </div>
    </>
  );
}

export default Product;
