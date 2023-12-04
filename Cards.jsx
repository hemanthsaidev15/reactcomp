import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cards.css";
import Card from 'react-bootstrap/Card';

function Cards (props) {
  const [cartCount, setCartCount] = useState(0);
  const [itemsAddedtoCart, setItemsAddedToCart] = useState([]);


  const submitToCart = (item) => {
    let overallCartItems = []
    console.log("item ->", item)
    setCartCount(cartCount + 1)
    props.getCountValue(cartCount + 1)
    overallCartItems.push(...itemsAddedtoCart, item);
    console.log(overallCartItems, "<-overallCartItems")
    setItemsAddedToCart(overallCartItems)
  }
console.log(props.items)
  console.log(itemsAddedtoCart, '<-itemsAddedtoCart')
    return (
        <>
          {props.items.map((item) => {
            return (
<Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.img} />
          <Card.Body>
            <Card.Title>{item.itemName}</Card.Title>
            <Card.Text>
              {item.description}
            </Card.Text>
            <Card.Title>
            ₹{item.price}
            </Card.Title>
            <Button variant="primary" onClick={() => submitToCart(item)}>{"Add to cart"}</Button>
          </Card.Body>
        </Card>
            )
        })}
        </>
      
        
      );
} 

 export default Cards