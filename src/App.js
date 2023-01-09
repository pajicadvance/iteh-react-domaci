import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Navigation from './components/Navigation'
import './App.css';

function App() {
  return (
    <div className='app'>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/productlist" element={<ProductList></ProductList>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  );
}

export default App;
