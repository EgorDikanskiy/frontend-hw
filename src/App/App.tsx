import CatalogPage from './pages/CatalogPage'
import DetailPage from './pages/DetailPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';  

function App() {
  return (
    <BrowserRouter> 
     <Routes>
      <Route path='/catalog' element={ <CatalogPage />} />
      <Route path='/detail/:id' element={<DetailPage />} />
     </Routes>
    </BrowserRouter> 
  )
}

export default App
