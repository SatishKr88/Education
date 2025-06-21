import Homepage from './HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginF from'./LoginForm';
import Dash from'./Dashboard';
function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route>
       <Route path='/' element={<Homepage/>}/>
       <Route path='/login' element={<LoginF/>}/>
       <Route path='/dashboard' element={<Dash/>}/>
      </Route>
     </Routes>
     
     </BrowserRouter>

     

    </>
  )
}

export default App
