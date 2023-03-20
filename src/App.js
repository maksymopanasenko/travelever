import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './Layout';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';
import NoPage from './NoPage';

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className='app'>  
                <Routes>                  
                    <Route path='/' element={<Layout/>}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>  
                
            </div>
        </BrowserRouter>
    )
}

export default App;