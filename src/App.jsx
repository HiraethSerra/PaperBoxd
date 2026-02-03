import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BooksSection from "./components/BooksSection";
import Community from "./components/Community";
import Ticker from "./components/Ticker";

export default function App() {
  return (
    <div className="w-full">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <BooksSection />
        <Ticker /> 
        <Community />
      </main>
    </div>
  );
}