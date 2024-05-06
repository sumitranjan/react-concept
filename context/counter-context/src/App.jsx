import "./App.css";
import Cart from "./component/Cart";
import Counter from "./component/Counter";
import Item from "./component/Item";
import { CartProvider } from "./context/CartContext";
function App() {
  return (
    <>
      <Counter />
      <hr />
      <CartProvider>
        <Item name={"Mackbook Pro"} price={100000} />
        <Item name={"Pendrive"} price={2000} />
        <Item name={"Mobile"} price={25000} />
        <Cart />
      </CartProvider>
    </>
  );
}

export default App;
