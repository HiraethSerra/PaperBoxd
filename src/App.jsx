import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BooksSection from "./components/BooksSection";
import Ticker from "./components/Ticker";
import Community from "./components/Community";
import AuthPage from "./pages/Auth";

const NavigationWrapper = () => {
  const location = useLocation();
  if (location.pathname === "/auth") return null;
  return <Navbar />;
};

const LandingPage = () => (
  <div className="flex flex-col w-full overflow-x-hidden">
    <Hero />
    <BooksSection /> 
    <Ticker />
    <Community />
  </div>
);

export default function App() {
  return (
    <Router>
      <div className="relative w-full min-h-screen bg-paper selection:bg-[#F2AEBC] selection:text-[#6C0820]">
        <NavigationWrapper />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </div>
    </Router>
  );
}