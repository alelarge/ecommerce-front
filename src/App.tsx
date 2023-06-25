import './scss/base.scss';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './pages/Cart';
import { Route, Routes } from "react-router-dom";
import About from './pages/About';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProductList/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </>
  );
}

export default App;
