
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Produto from './pages/Produto/Produto';
import Cliente from './pages/Cliente/Cliente';
import Pedido from './pages/Pedido/Pedido';

function App() {

  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/Produto" Component={Produto}/>
          <Route path="/Cliente" Component={Cliente}/>
          <Route path="/Pedido" Component={Pedido}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
