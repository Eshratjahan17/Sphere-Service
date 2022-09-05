
import { Route, Routes } from "react-router-dom";
import './App.css';
import Blogs from "./Components/Blogs";
import Home from './Components/Home';
import LogIn from "./Components/LogIn/LogIn";
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
