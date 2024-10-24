import './App.css';
import { Outlet, Route, Routes } from "react-router-dom";
import Home from './components/home';
import All from './components/all';
import Breeds from './components/breeds';
import Navbar from './components/navbar';

function App() {
  return (
    <Routes>
      <Route  index Component={Home} />
      <Route path='/' element={Layout} />
      <Route path='/all' element={All} />
      <Route  path='/breeds' element={Breeds} />
    </Routes>
  )

}

function Layout() {
  <div>
  <Navbar />
  <Outlet />
  </div>
}

export default App;
