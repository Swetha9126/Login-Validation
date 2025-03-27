import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './ValidateLogin.jsx'
import './ValidateLogin.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login/>
  </StrictMode>
)
