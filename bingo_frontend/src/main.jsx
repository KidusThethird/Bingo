import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="7852846463-o0489pfhp7qpf4e8fl9r152libtml2ue.apps.googleusercontent.com">
    
    <Router>
    <App />
    </Router>
    </GoogleOAuthProvider>;
  </React.StrictMode>,
)
