import { useState } from 'react'
import React from 'react'
import './App.css'
import Home from './pages/Home'
import AddTask from './pages/AddTask'
import EditTask from './pages/EditTask'
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";


function App() {
 
 return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/AddTask' element={<AddTask />}></Route>
         <Route path='/edit/:id' element={<EditTask />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  )
}

export default App