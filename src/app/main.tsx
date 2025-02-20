import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@radix-ui/themes/styles.css";
import Layout from './Layout'
import "./index.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout/>
  </StrictMode>,
)
