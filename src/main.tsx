import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { setBasePath } from '@awesome.me/webawesome/dist/utilities/base-path.js'
import './styles/main.scss'
import App from './App.tsx'

setBasePath('https://cdn.jsdelivr.net/npm/@awesome.me/webawesome@3.3.1/cdn/')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
