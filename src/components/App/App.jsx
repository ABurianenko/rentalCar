import './App.css'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../../pages/HomePage/HomePage'
import { Layout } from '../Layout/Layout'
import { CatalogPage } from '../../pages/CatalogPage/CatalogPage'
import { CarDetailsPage } from '../../pages/CarDetailsPage/CarDetailsPage'
import { NotFound } from '../../pages/NotFound/NotFound';

function App() {
  
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/catalog' element={<CatalogPage />} />
          <Route path='/catalog/:id' element={<CarDetailsPage />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
      
    </div>
  )
}

export default App
