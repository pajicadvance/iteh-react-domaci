import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Navigation from './components/Navigation'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faMinus, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import './App.css';

library.add(faPlus, faMinus, faChevronUp, faChevronDown);

function App() {
  const [allProducts, setAllProducts] = useState(
    [
      { id: 1, type: "Processors", name: "AMD Ryzen 5 5600X", image: "5600x.png", inCart: 0, details: 
        "Socket: AMD Socket AM4; # of Cores: 6; # of Threads: 12; Frequency: 3.7 GHz; Turbo Clock: up to 4.6 GHz; Multiplier Unlocked: Yes; TDP: 65 W" },
      { id: 2, type: "Processors", name: "AMD Ryzen 7 5800X3D", image: "5800x3d.png", inCart: 0, details: 
        "Socket: AMD Socket AM4; # of Cores: 8; # of Threads: 16; Frequency: 3.4 GHz; Turbo Clock: up to 4.5 GHz; Multiplier Unlocked: No; TDP: 105 W" },
      { id: 3, type: "Graphics Cards", name: "AMD Radeon RX 6700 XT", image: "6700xt.png", inCart: 0, details: 
        "Base Clock: 2321 MHz; Game Clock: 2424 MHz; Boost Clock: 2581 MHz; Memory Clock: 2000 MHz (16 Gbps effective); Memory Size: 12 GB; Memory Type: GDDR6" },
      { id: 4, type: "Graphics Cards", name: "Nvidia GeForce RTX 4090", image: "4090.png", inCart: 0, details: 
        "Base Clock: 2235 MHz; Boost Clock: 2520 MHz; Memory Clock: 1313 MHz (21 Gbps effective); Memory Size: 24 GB; Memory Type: GDDR6X" },
      { id: 5, type: "Motherboards", name: "Gigabyte B550M Aorus Pro-P", image: "b550maorus.png", inCart: 0, details: 
        "Socket: AM4; Form factor: mATX; Memory slots: 4" },
      { id: 6, type: "Motherboards", name: "MSI B450 Tomahawk", image: "b450tomahawk.png", inCart: 0, details: 
        "Socket: AM4; Form factor: ATX; Memory slots: 4" },
      { id: 7, type: "Memory", name: "Corsair Vengeance LPX", image: "corsairlpx.png", inCart: 0, details: 
        "Modules: 2 x 8GB; Speed: DDR4-3200" },
      { id: 8, type: "Memory", name: "G.Skill Ripjaws V", image: "ripjawsv.png", inCart: 0, details: 
        "Modules: 2 x 16GB; Speed: DDR4-3200" },
    ]
  );
  function addToCart(id) {
    const newProducts = [...allProducts];
    newProducts[id - 1].inCart++;
    setAllProducts(newProducts);
    console.log(newProducts[id - 1]);
  }
  function removeFromCart(id) {
    const newProducts = [...allProducts];
    newProducts[id - 1].inCart--;
    setAllProducts(newProducts);
    console.log(newProducts[id - 1]);
  }
  return (
    <div className='app'>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/productlist" element={<ProductList allProducts={allProducts} addToCart={addToCart}></ProductList>}></Route>
        <Route path="/cart" element={<Cart allProducts={allProducts} removeFromCart={removeFromCart}></Cart>}></Route>
      </Routes>
    </div>
  );
}

export default App;
