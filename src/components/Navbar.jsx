import React from 'react'
import { Link, useLocation } from 'react-router-dom'


const Navbar = () => {
const location = useLocation()
return (
<nav className="topbar">
<div className="topbar-inner container-row">
<Link to="/" className="brand">
<span className="logo">✔</span>
<span className="brand-text">ThoughtTree ToDo</span>
</Link>


<div className="nav-links">
<Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">
Home
</Link>
<Link className={`nav-link ${location.pathname === '/createTask' ? 'active' : ''}`} to="/createTask">
Add Task
</Link>
<Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">
About
</Link>
</div>
</div>
</nav>
)
}


export default Navbar