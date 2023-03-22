import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './pages/layout/Layout';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import NoPage from './pages//nopage/NoPage';

import Manual from "./pages/buttons/Manual";
import Random from "./pages/buttons/Random";

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className='app'>
                <Routes>                  
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="contact" element={<Contact />} />
                        
                        <Route path="button1" element={<Manual />} />
                        <Route path="button2" element={<Random />} />

                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </div>
            
            <div className="footer">
                Created by Max Opanasenko
            </div>
        </BrowserRouter>
    )
}

export default App;