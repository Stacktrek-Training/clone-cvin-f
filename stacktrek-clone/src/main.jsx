import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import DefaultNavbar from './components/DefaultNavbar.jsx'
import DefaultSidebar from './components/DefaultSidebar.jsx'
import MainContent from './components/MainContent.jsx'
import './assets/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DefaultNavbar />
    <DefaultSidebar/>
    <MainContent />
  </React.StrictMode>,
)
