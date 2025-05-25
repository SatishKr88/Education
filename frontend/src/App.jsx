import Homepage from './HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route>
       <Route path='/' element={<Homepage/>}/>
      </Route>
     </Routes>
     
     </BrowserRouter>

     

    </>
  )
}

export default App
