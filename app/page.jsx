'use client';

import LoadingScreen from '@/components/LoadingScreen';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Experience from '@/components/sections/Experience';
import Home from '@/components/sections/Home';
import Projects from '@/components/sections/Projects';

import React, { useState } from 'react';
import Skills from "@/components/sections/Skills";


function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`relative min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-black text-gray-100`}
        style={{ backgroundImage: "url('/backgroundImage2.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <Home />
        <Experience />
        <About />
        <Skills />
        <Projects />
   
        <Contact />
      </div>
    </>
  );
}

export default App;