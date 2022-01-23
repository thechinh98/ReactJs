import "./App.css";
import Form from "./components/form/Form";
import { useDispatch } from "react-redux";
import { Routes, Route, Link, BrowserRouter as Router, } from "react-router-dom";
import UserList from "./components/userList/UserList";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar">
          <ul className="navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="userList">User List</Link>
            </li>
          </ul>
        </nav>
      <Routes>
        <Route exact path="/" element = {<Form dispatch={useDispatch} />}/>
        <Route path="/userList" element = {<UserList/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
