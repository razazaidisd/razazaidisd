"use client";

import { ToastContainer } from "react-toastify";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col`}>
      <ToastContainer />
      <About />
      <Skills />
      <Experience />
      <Contact displayContactForm />
      <Footer />
    </main>
  );
}
