import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
      axios.get('https://64900b2b1e6aa71680ca6966.mockapi.io/items').then(res =>{
        setItems(res.data);
      })      
      axios.get('https://64900b2b1e6aa71680ca6966.mockapi.io/cart').then(res =>{
        setCartItems(res.data);
      })
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://64900b2b1e6aa71680ca6966.mockapi.io/cart',obj)
    setCartItems((prev) => [...prev, obj]);
  };

  const onChangeInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onDelete = (id) => {
    axios.delete(`https://64900b2b1e6aa71680ca6966.mockapi.io/cart/${id}`)
    setCartItems(((prev) => prev.filter(item => item.id !== id)))
  }

  return (
    <div>
      <div className="wrapper clear">
        <Header onClickOpen={() => setCartOpened(true)} />
        {cartOpened ? 
          <Drawer onDelete = {onDelete} items={cartItems} onClose={() => setCartOpened(false)} />
        : null}
        <div className="content">
          <div className="container">
            <div className="block_content pt-40">
              <div className=" d-flex justify-between align-center mb-40">
                <h1>Все кроссовки</h1>
                <div className="search_block d-flex justify-between align-center">
                  <img width={15} height={15} src="/img/search.png" alt="" />
                  <input
                    onChange={onChangeInput}
                    value={searchValue}
                    type="text"
                    placeholder="Поиск..."
                  />
                  {
                    searchValue &&
                    <img
                      onClick={() => setSearchValue('')}
                      className="clear cu-p"
                      src="/img/btn-remove.svg"
                      alt=""
                    />
                  }
                </div>
              </div>
              <div className="d-flex">
                <div className="container">
                  <div className="d-flex flex-wrap">
                    {items.filter(item => item.title.toLowerCase().includes(searchValue)).map((el) => (
                      <Card key={el.id} onAddToCart={onAddToCart} items={el} />
                    ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
