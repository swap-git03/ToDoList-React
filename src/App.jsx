import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ToDoForm from './components/TodoForm'
import ToDoList from './components/TodoList'
import About from './pages/About'


const App = () => {
  return (
    <div className="app-root">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<ToDoList />} />
          <Route path="/createTask" element={<ToDoForm />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer className="footer">Made with — Simple ToDo</footer>
    </div>
  )
}


export default App