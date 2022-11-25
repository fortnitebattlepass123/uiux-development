function DecorItem(props) {

    function addCartHandler() {
        props.addToCart(props.item);
    }

    return (<div className="decor-item">
        <div>{props.item.name}  {props.item.price}g</div>
        <img src={props.item.img} alt={props.item.name} />
        <p>Type: {props.item.type} <br/> Rare: {props.item.rare.toString()}</p>
        <button onClick={addCartHandler}>Add to Cart</button>
    </div>);

}

export default DecorItem;