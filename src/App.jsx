import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-[200vh]">
      <Navbar />
      <main className="flex flex-col items-center pt-32">
        <h1 className="text-5xl font-extrabold italic text-black/20">
          PaperBoxd
        </h1>
      </main>
    </div>
  );
}