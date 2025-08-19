import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom' 
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TodoForm from './components/TodoForm';
import About from './pages/About';

function App() {

  return (
    <>
     < BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/createTaskk' element={<TodoForm />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
