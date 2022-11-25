import "../Cart-Item.css";
function CartItem(props) {

    function removeCartHandler() {
        props.removeDecor(props.item[0]);
    }
    
    return (
        <div className="cart-item">
            <p>{props.item[0].name} <br/> {props.item[0].price}g</p>
            <br/> <img src={props.item[0].img} alt={props.item[0].name} />
            <button onClick={removeCartHandler}>Remove from Cart</button>
            <p>{props.item[1]}</p>
        </div>
    );

}

export default CartItem;