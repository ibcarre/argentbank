import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import App from './pages/App';
import SignIn from "./pages/signin.jsx"
import User from "./pages/user.jsx"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <Router>
        <Routes>
            <Route path="/" element = {<App />} />
            <Route path="/signin" element = {<SignIn />} />
            <Route path="/user" element = {<User />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
