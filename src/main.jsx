import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {AuthProvider} from '@asgardeo/auth-react'

import asgardeoConfig from './asgardioConfig'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider config={asgardeoConfig}>
      <App />
    </AuthProvider>
    
  </StrictMode>,
)
