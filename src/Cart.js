import CartItem from "./components/CartItem";
function Cart(props) {
    return (
        <div className="cart-items">
          <h2 >Cart</h2>
          {Object.entries(props.cart).map(([key, value]) => (<CartItem removeDecor={props.removeDecor} item={value}/>))}
          <h2>Total Price: {props.total}g</h2>
        </div>
    );

}

export default Cart;