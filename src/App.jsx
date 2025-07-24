import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Protifolio from './Components/Protifolio/Protifolio';
import Contact from './Components/Contact/Contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';


function App() {

  let routes = createBrowserRouter([
    {
      path:"", element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "protofolio", element: <Protifolio/> }

  ]}  
  ])


  return (
    <>
    
    <RouterProvider router={routes}></RouterProvider>


    </>
  )
}

export default App
