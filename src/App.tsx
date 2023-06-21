import './scss/base.scss';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './pages/Cart';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProductList/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
