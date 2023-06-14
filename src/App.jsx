import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <Header/>
      <div className="content">
        <div className="container">
          <div className="block_content pt-40">
            <div className=" d-flex justify-between align-center mb-40">
              <h1>Все кроссовки</h1>
              <div className="search_block d-flex justify-between align-center">
                <img width={15} height={15} src="/img/search.png" alt="" />
                <input type="text" placeholder="Поиск..."/>
              </div>
            </div>
            <div className="d-flex dod">
              <Card />
              <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
