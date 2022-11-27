import "./App.css";
import { useState, useEffect } from "react";
import data from "./assets/furniture.json";
import DecorItem from "./components/DecorItem";
import Cart from "./Cart";

/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [decorData, setDecorData] = useState(data);
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);
  const [filterSort, setFilterSort] = useState(["all", "all", "none"]);
  const allTypes = [...new Set(data.map((item) => item.type))];

  function sortArray(e) {
    e = e.target.value;
    console.log(e);
    const copyData = [...filterSort];
    copyData[2] = e;
    setFilterSort(copyData);
  }

  function filterRare(e) {
    e = e.target.value;
    if (e === "true") {
      e = true;
    } else if (e === "false") {
      e = false;
    } 
    console.log(e);
    
    const copyData = [...filterSort];
    copyData[1] = e;
    setFilterSort(copyData);
  }

  function filterType(e) {
    e = e.target.value;
    console.log(e);
    const copyData = [...filterSort];
    copyData[0] = e;
    setFilterSort(copyData);
  }

  

  useEffect(() => {
    function filterAndSort() {
      let copyData = [...data];
     
      if (filterSort[0] !== "all") {
        console.log("filtering type");
        copyData = copyData.filter((item) => item.type === filterSort[0]);
      }

      if (filterSort[1] !== "all") {
        console.log("filtering rare");
        copyData = copyData.filter((item) => item.rare === filterSort[1]);
      }
      if (filterSort[2] === "lowToHigh") {
        copyData.sort((a, b) => a.price - b.price);
      } else if (filterSort[2] === "highToLow") {
        copyData.sort((a, b) => b.price - a.price);
      }
      setDecorData(copyData);
    }
    filterAndSort();
  }, [filterSort]);


  function removeDecor(item) {
    cart[item.name] = [cart[item.name][0], cart[item.name][1] - 1];
    if (cart[item.name][1] === 0) {
      delete cart[item.name];
    }
    setCart(cart);

    setTotal(total - item.price);
  }
  const addToCart = (item) =>{
    
    if (cart[item.name] !== undefined){
      cart[item.name] = [item, cart[item.name][1] + 1];
    } else {
      cart[item.name] = [item, 1];
    }
    console.log(cart);
    setCart(cart);
    setTotal(total + item.price);
  }

  function resetItems() {
    setDecorData([...data]);
    setFilterSort(["all", "all", "none"]);
  }

  
  return (
    <div className="App">
      <div className="left">
        <div className="title-container">
          <h1>Stardew Valley Furniture Store</h1>
        </div>
        <div className="filter-sort">
          <div className="sort-container">
            Sort
            <select value={filterSort[2]}  onChange={sortArray}>
              <option value="none">None</option>
              <option value="lowToHigh">Price Low To High</option>
              <option value="highToLow" >Price High To Low</option>
            </select>
          </div>
          <div className="filter-container">
            Filter by type
            <fieldset onChange={filterType}>
              <label key="none">
                <input type="radio" name="type" value="all" checked={filterSort[0] === "all"} />
                All
              </label>
              {allTypes.map((type) => (
                <label key={type}>
                  <input type="radio" name="type" value={type} checked={filterSort[0] === type}/>
                  {type}
                </label>
              ))}
            </fieldset>
            Filter by rarity
            <fieldset onChange={filterRare}>
              <label key="none">
                <input type="radio" name="rare" value="all" checked={filterSort[1] === "all"}/>
                  All
                </label>
              <label key="rare">
                <input type="radio" name="rare" value="true" checked={filterSort[1] === true} />
                  Rare
              </label>
              <label key="not rare">
                <input type="radio" name="rare" value="false" checked={filterSort[1] === false}/>
                  Not Rare
              </label>
            </fieldset>
            <button onClick={resetItems}>Reset</button>
          </div>
        </div>
        
        <div className="items">
          { //sort by price
          decorData.map((item, index) => (
            <div className="item"><DecorItem addToCart={addToCart} item={item} />
            </div>
        ))}
        </div>
      </div>
      <div className="right">
        <div className="cart">
            {<Cart cart={cart} total={total} removeDecor={removeDecor}/>}

        </div>
      </div>
    </div>
  );
}

export default App;
