import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import New from './component/New';
import Block from './component/Block';
import Update from './component/Update';
import Private from './private';
import Login from './component/Login/Login';



function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/login' element={<Login/>} />        
      <Route element={<Private />}>  
      <Route path='/' element={<Home/>} />        
      <Route path='/block/:id' element={<Block/>} />        
      <Route path='/update/:id' element={<Update/>} />  
      <Route path='/new' element={<New/>} />        
      </Route>         
    </Routes>
    </BrowserRouter>
  );
}

export default App;
