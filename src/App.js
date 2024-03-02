import 'bootstrap/dist/css/bootstrap.min.css';
import Products from "./Products";
import Cart from "./Cart"
import ProductGrid from "./components/ProductGrid"
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Routes>
      <Route index element={<Products />} />  
      <Route path="cart" element={<Cart />} />
      <Route path="productgrid" element={<ProductGrid/>}/>
      </Routes>
    </div>
  );
}

export default App;
