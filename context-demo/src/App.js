// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body'
import { CartProvider } from './context/CartContext';
function App() {
  return (
    <div className="App">
       <CartProvider>
       <Navbar/>
       <Body/>
       </CartProvider>
    </div>
  );
}

export default App;
