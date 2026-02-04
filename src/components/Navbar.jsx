import { Search, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = false; // Toggle for testing

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] pt-6 px-4 md:px-10 pointer-events-none">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        <div className="flex items-center justify-between px-6 py-3 border-[3px] border-[#6C0820] shadow-[4px_4px_0px_0px_#6C0820] bg-[#3D5D91]/10 backdrop-blur-md">
          
          {/* LEFT: Branding & Links */}
          <div className="flex items-center">
            <Link to="/" className="flex flex-col leading-none select-none mr-12 group">
              <span className="text-xl font-black tracking-tighter text-[#6C0820] uppercase font-bricolage group-hover:text-[#3D5D91] transition-colors">Paper</span>
              <span className="text-xl font-black tracking-tighter text-[#6C0820] uppercase font-bricolage group-hover:text-[#3D5D91] transition-colors">Box</span>
            </Link>

            <div className="hidden lg:flex items-center gap-8 font-black uppercase text-xs tracking-widest text-[#6C0820] font-bricolage">
              <Link to="/" className="hover:text-[#5A86CB] transition-colors">Home</Link>
              <a href="#" className="hover:text-[#5A86CB] transition-colors">Library</a>
              <a href="#" className="hover:text-[#5A86CB] transition-colors">Browse</a>
            </div>
          </div>

          {/* RIGHT: Search & Auth */}
          <div className="flex items-center gap-6 font-black uppercase text-xs text-[#6C0820] font-bricolage">
            {/* Search Input Restored */}
            <div className="relative hidden sm:block w-48 md:w-64">
              <Menu size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3D5D91]" />
              <Input 
                placeholder="SEARCH..."
                className="bg-white/40 border-2 border-[#6C0820] rounded-none h-10 pl-10 pr-10 font-bold placeholder:text-[#6C0820]/40 text-[#6C0820] uppercase focus-visible:ring-0"
              />
              <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#3D5D91]" />
            </div>
            
            <div className="flex items-center gap-4">
              {isLoggedIn ? (
                <span className="cursor-pointer hover:underline decoration-2 underline-offset-4">Profile</span>
              ) : (
                <>
                  <button 
                    onClick={() => navigate("/auth", { state: { mode: 'login' } })}
                    className="cursor-pointer hover:text-[#3D5D91] transition-colors px-2"
                  >
                    Login
                  </button>
                  <button 
                    onClick={() => navigate("/auth", { state: { mode: 'signup' } })}
                    className="px-4 py-2 bg-[#6C0820] text-[#F2DCDB] border-2 border-[#6C0820] shadow-[3px_3px_0px_0px_#3D5D91] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all cursor-pointer"
                  >
                    Signup
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}