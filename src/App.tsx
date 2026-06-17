import { BrowserRouter, Route, Routes } from 'react-router'
import { Layout } from './layout'
import { Home, Projects, Stack } from '@/pages'

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path='/stacks' element={<Stack/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
