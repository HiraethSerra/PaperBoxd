import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] pt-6 px-4 md:px-10 pointer-events-none">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        <div className="flex items-center justify-between px-6 py-3 border-[3px] border-[#6C0820] shadow-[4px_4px_0px_0px_#6C0820] bg-[#3D5D91]/10 backdrop-blur-md">
          <Link to="/" className="flex flex-col leading-none select-none">
            <span className="text-xl font-black text-[#6C0820] uppercase">Paper Box</span>
          </Link>

          <div className="flex items-center gap-4 font-black uppercase text-xs">
            <button 
              onClick={() => navigate("/auth", { state: { mode: 'login' } })} 
              className="text-[#6C0820] cursor-pointer"
            >
              Login
            </button>
            <button 
              onClick={() => navigate("/auth", { state: { mode: 'signup' } })}
              className="px-4 py-2 bg-[#6C0820] text-[#F2DCDB] border-2 border-[#6C0820] shadow-[3px_3px_0px_0px_#3D5D91]"
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}