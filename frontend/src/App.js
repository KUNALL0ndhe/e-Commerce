import { Flex } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import ProductScreen from "./screens/ProductScreen";
import ViewScreen from "./screens/ViewScreen";
import PerfumeScreen from "./screens/PerfumeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";

const App = () => {
  return (
    <BrowserRouter>
      
        <Header />
        <Flex as='main' fontFamily='Montserrat' direction='column' w='100%' px='2' color='black'  bgColor='white'>
        <Routes>
        <Route path="/" element={<ViewScreen />}/>
          <Route path="/home" element={<HomeScreen />}/>
          <Route path="/perfume" element={<PerfumeScreen />}/>
          <Route path='home/product/:id' element={<ProductScreen />} />
          <Route path='/cart' element={<CartScreen/>} />
          <Route path='/cart/:id' element={<CartScreen />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/register' element={<RegisterScreen />} />
          <Route path='/profile' element={<ProfileScreen />} />
          <Route path='/shipping' element={<ShippingScreen />} />
          <Route path='/payment' element={<PaymentScreen />} />
          <Route path="/placeorder" element={<PlaceOrderScreen />} />
          <Route path="/order/:id" element={<OrderScreen />} />
          <Route path='/admin/userlist' element={<UserListScreen />} />
          <Route path='/admin/user/:id/edit' element={<UserEditScreen/>} />
          <Route path='/admin/productlist' element= {<ProductListScreen />} />
          <Route path='/admin/product/:id/edit' element={<ProductEditScreen />} />
          <Route path='/admin/orderlist' element={<OrderListScreen />} />
        </Routes>
        </Flex>
        <Footer />
    </BrowserRouter>
  );
};


export default App;
