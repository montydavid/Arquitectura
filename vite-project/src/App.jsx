
import './App.css'
import HookUseState from './playground/HookUseState'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeHooks from './playground/HomeHooks'
import HookUseNavigate from './playground/HookUseNavigate'
import HookUseEffect from './playground/HookUseEffect'


function App() {

  return (
   <BrowserRouter>
    <Routes>
      {/*Rutas */}
      <Route path='/' element={<HomeHooks/>} ></Route>
      <Route path='/useEffect' element={<HookUseEffect/>} ></Route>
      <Route path='/useState' element={<HookUseState/>} ></Route>
      <Route path='/useNavigate' element={<HookUseNavigate/>} ></Route>
    </Routes>
   
   </BrowserRouter>
  )
}

export default App