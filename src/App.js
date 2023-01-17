import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Navigation from './components/Navigation'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import './App.css';

library.add(faPlus, faChevronUp, faChevronDown);

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
