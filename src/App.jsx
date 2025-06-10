import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLayout from './components/Layout/UserLayout';
import Home from './pages/Home';
import { Toaster } from 'sonner';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import CollectionPage from './pages/CollectionPage';
import ProductDetails from './components/Products/ProductDetails';
import Chekcout from './components/Cart/Checkout';
import Checkout from './components/Cart/Checkout';
import OrderConformationPage from './pages/OrderConformationPage';

const App = () => {
  return (
    <BrowserRouter>
    <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="Login" element={<Login />}/>
          <Route path="Register" element={<Register />}/>
          <Route path="Profile" element={<Profile />}/>
          <Route path="collections/:collection" element={<CollectionPage />}/>
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="checkout" element={<Checkout />}/>
          <Route path="order-confirmaton" element={<OrderConformationPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
