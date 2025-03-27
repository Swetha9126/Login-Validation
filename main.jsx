import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './ValidateLogin'
//import App from './uses'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login/>
  </StrictMode>
)
