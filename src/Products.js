import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
const imgProperty = { width: "180px", height: "120px", objectFit: "contain" };
const subString = (str) => {
  if (str.length > 45) {
    return str.slice(0, 60) + "...";
  }
  return str;
};
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => setProducts(result));
  }, []);
  return (
    <>
      <div className="row">
        {products.map((product) => (
          <div
            className="col-md-3"
            style={{ marginBottom: "20px" }}
            key={product.id}
          >
            <Card style={{ width: "18rem", height: "20rem" }}>
              <div className="text-center">
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={imgProperty}
                />
              </div>
              <Card.Body>
                <Card.Title title={product.title}>
                  {subString(product.title)}
                </Card.Title>
                <Card.Text>INR: {product.price}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <Button variant="primary">Add To Cart</Button>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};
export default Products;
