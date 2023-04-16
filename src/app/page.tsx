import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col ${montserrat.variable} font-mont`}
    >
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
