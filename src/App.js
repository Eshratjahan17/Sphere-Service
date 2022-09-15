
import { Route, Routes } from "react-router-dom";
import './App.css';
import Blogs from "./Components/Blogs";
import AddProducts from "./Components/Dashboard/AddProducts";
import AddReview from "./Components/Dashboard/AddReview";
import Charts from "./Components/Dashboard/Charts";
import Dashboard from "./Components/Dashboard/Dashboard";
import ManageOrders from "./Components/Dashboard/ManageOrders";
import ManageProducts from "./Components/Dashboard/ManageProducts";
import ManageUsers from "./Components/Dashboard/ManageUsers";
import MyOrders from "./Components/Dashboard/MyOrders";
import MyProfile from "./Components/Dashboard/MyProfile";
import Home from './Components/Home';
import LogIn from "./Components/LogIn/LogIn";
import RequireAuth from './Components/LogIn/RequireAuth';
import SignUp from "./Components/LogIn/SignUp";
import Portfolio from "./Components/Portfolio";
import Purchase from "./Components/Purchase";
import Footer from "./Components/Shared/Footer";
import Header from './Components/Shared/Header';
import NotFound from './Components/Shared/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<Charts></Charts>}></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>
          <Route
            path="addProduct"
            element={<AddProducts></AddProducts>}
          ></Route>
          <Route
            path="manageOrders"
            element={<ManageOrders></ManageOrders>}
          ></Route>
          <Route
            path="manageProduct"
            element={<ManageProducts></ManageProducts>}
          ></Route>
          <Route
            path="manageUsers"
            element={<ManageUsers></ManageUsers>}
          ></Route>
          <Route path="myOrders" element={<MyOrders></MyOrders>}></Route>
        </Route>
        <Route path="/purchase/:id" element={<Purchase></Purchase>}></Route>

        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
