import React from 'react';
import '../App.css';
import TodoList from '../components/TodoList';

const Home = () => {
  return (
    <div>
      <h1 className="text-center text-success searchbar">To Do Application</h1>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
          Filters
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><a className="dropdown-item" href="#">Completed</a></li>
          <li><a className="dropdown-item" href="#">Not Comleted</a></li>
        </ul>
      </div>
      <TodoList />
    </div>
  );
};

export default Home;