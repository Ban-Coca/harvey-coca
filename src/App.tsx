import { BrowserRouter, Route, Routes } from 'react-router'
import { Layout } from './layout'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
