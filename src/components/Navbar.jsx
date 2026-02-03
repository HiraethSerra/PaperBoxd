import { Search, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full z-50 pt-6 px-4 md:px-10 font-jetbrains">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-6 py-2 rounded-xl border border-black shadow-sm bg-[#BA71A2]/80 backdrop-blur-md">
          <div className="flex items-center">

            <div className="flex flex-col leading-none select-none mr-16"> {/* Large margin-right */}
              <span className="text-xl font-extrabold tracking-tight text-black">Paper</span>
              <span className="text-xl font-extrabold tracking-tight text-black">Box</span>
            </div>

            <div className="hidden md:flex items-center gap-6">
              {['Home', 'Library', 'Browse'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-sm font-bold text-black hover:opacity-60 transition-opacity"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative hidden sm:block w-64">
              <Menu size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/70" />
              <Input 
                placeholder="Find your next read"
                className="bg-[#ECD0EC]/90 border-none rounded-full h-9 pl-10 pr-10 text-xs placeholder:text-black/50 text-black"
              />
              <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-black/70" />
            </div>

            <span className="text-sm font-bold text-black cursor-pointer">
              Profile
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}