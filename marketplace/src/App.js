import Home from "./components/Home";
import ProductsList from "./components/ProductsList";
import MatrixRain from "./Matrixrain";
import "./App.css"
import Welcome from "./components/Welcome";
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from "./components/ProductDetails";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route path='/' exact element={<Welcome />} />
        <Route path='/Home' exact element={<Home />} />
        <Route path='/details/:id' exact element={<ProductDetails />} />
      </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
