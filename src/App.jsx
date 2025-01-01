import React from 'react'
import About from './components/About.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Contacts from './components/Contacts.jsx'
import Home from './components/Home.jsx'
import Skill from './components/Skill.jsx'

const App = () => {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={ <Layout /> } >
        <Route index element={ <Home /> } />
        <Route path="about" element={ <About /> } />
        <Route path="skills" element={ <Skill />} />
        <Route path="contact" element={<Contacts />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App