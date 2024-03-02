import React from 'react'
import { Button, Card } from "react-bootstrap";
import Menu from './Menu'
import { useSelector, useDispatch } from 'react-redux'
import { subString } from './const';
import { removeProduct } from './store/CartSlice';
const imgProperty = { width: "180px", height: "120px", objectFit: "contain" };
function Cart() {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch()
  const removeCartItem = (id) => {
    dispatch(removeProduct(id));
  }
  const cart = products?.map((product) => (
    <div
      className="col-md-12"
      style={{ marginBottom: "20px" }}
      key={product.id}
    >
      <Card>
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={imgProperty}
          />
        </div>
        <Card.Body className='text-center'>
          <Card.Title title={product.title}>
            {subString(product.title)}
          </Card.Title>
          <Card.Text>INR: {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <Button variant="danger" onClick={() => removeCartItem(product.id)}>Remove</Button>
        </Card.Footer>
      </Card>
    </div>
  ))
  return (
    <>
      <Menu />
      <h2 className="text-center">Cart page</h2>
      <div className="row">
        {cart}
      </div>
    </>
  )
}

export default Cart
