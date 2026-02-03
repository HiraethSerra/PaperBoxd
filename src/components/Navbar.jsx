import { Search, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] pt-6 px-4 md:px-10 pointer-events-none">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        <div className="flex items-center justify-between px-6 py-3 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[#BA71A2]/10 backdrop-blur-md">
          
          <div className="flex items-center">
            <div className="flex flex-col leading-none select-none mr-16">
              <span className="text-xl font-black tracking-tighter text-black uppercase font-bricolage">Paper</span>
              <span className="text-xl font-black tracking-tighter text-black uppercase font-bricolage">Box</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {['Home', 'Library', 'Browse'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-sm font-black uppercase tracking-widest text-black hover:text-[#7E2A53] transition-colors font-bricolage"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative hidden sm:block w-64">
              <Menu size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-black" />
              <Input 
                placeholder="SEARCH BOOKS..."
                className="bg-white/30 border-2 border-black rounded-none h-10 pl-10 pr-10 text-xs font-bold placeholder:text-black/40 text-black uppercase"
              />
              <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-black" />
            </div>
            <span className="text-sm font-black uppercase tracking-widest text-black cursor-pointer hover:underline decoration-2 font-bricolage">
              Profile
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}