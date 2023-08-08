import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import Layout from './pages/layout/Layout';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import NoPage from './pages//nopage/NoPage';

import Manual from "./pages/buttons/Manual";
import Footer from './Footer';

import './App.css';

function App() {
    const [selectedValue, setSelectedValue] = useState("krak");

    const handleSelectChange = (e) => {
      setSelectedValue(e.target.value);
    };

    return (
        <BrowserRouter>
            <div className='app'>
                <Routes>                  
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home selectedValue={selectedValue} handleSelectChange={handleSelectChange}/>} />
                        <Route path='travelever' element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="contact" element={<Contact />} />
                        
                        <Route path="start" element={<Manual selectedValue={selectedValue}/>} />

                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
                
                <Footer />
            </div>
            
        </BrowserRouter>
    )
}

export default App;