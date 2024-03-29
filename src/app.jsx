import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Home, About, Project, Contact } from './pages'

const App = () => {
    return (
    <main className='bg-slate-300/20 h-full w-full'>
      <Router>
          <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        </Router>
    </main>
    )
}

export default App;