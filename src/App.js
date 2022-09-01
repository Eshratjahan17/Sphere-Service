
import { Route, Routes } from "react-router-dom";
import './App.css';
import Blogs from "./Components/Blogs";
import Home from './Components/Home';
import Portfolio from "./Components/Portfolio";
import Header from './Components/Shared/Header';
import NotFound from './Components/Shared/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
