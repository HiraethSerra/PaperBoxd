export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center pt-32 pb-12 px-4 text-center">
      <div className="relative inline-block mb-[-25px] z-10">
        <div 
          className="absolute inset-x-[-20px] bottom-6 h-[40%] -z-10 
                     bg-[#F2AEBC] rounded-md shadow-lg shadow-[#6C0820]/10
                     -rotate-1 transform skew-x-2" 
        />
        <h2 className="text-8xl md:text-9xl font-normal text-[#6C0820] font-[Monsieur_La_Doulaise] lowercase leading-none">
          Open a book
        </h2>
      </div>
      <h3 className="text-5xl md:text-6xl font-normal text-[#3D5D91] tracking-tighter font-[Monsieur_La_Doulaise] lowercase italic">
        Open your mind
      </h3>
    </section>
  );
}