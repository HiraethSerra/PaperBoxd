import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function AuthPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(true);

  useEffect(() => {
    if (location.state?.mode === 'login') {
      setIsSignup(false);
    } else {
      setIsSignup(true);
    }
  }, [location.state]);

  return (
    <div className="flex h-screen w-full overflow-hidden font-bricolage bg-[#fffdf5]">
      <button 
        onClick={() => navigate("/")}
        className="absolute top-8 right-8 z-50 font-black uppercase text-xs text-[#6C0820] border-2 border-[#6C0820] px-3 py-1 bg-[#F2DCDB] shadow-[3px_3px_0px_0px_#6C0820] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
      >
        ✕ Close
      </button>

      <div className="w-1/3 bg-[#6C0820] flex flex-col items-center justify-center relative border-r-[4px] border-[#6C0820]">
        <div className="flex flex-col gap-10 text-white font-black text-4xl uppercase tracking-tighter">

          <div className="relative cursor-pointer group" onClick={() => setIsSignup(true)}>
            <div className={`relative z-10 px-10 py-4 transition-colors ${isSignup ? "text-[#6C0820]" : "text-[#F2DCDB]/40 group-hover:text-[#F2DCDB]"}`}>
              Signup
            </div>
            {isSignup && (
              <div className="absolute inset-0 bg-[#F2DCDB] border-[3px] border-[#6C0820] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] rounded-none transform -rotate-1" />
            )}
          </div>

          {/* Login Tab */}
          <div className="relative cursor-pointer group" onClick={() => setIsSignup(false)}>
            <div className={`relative z-10 px-10 py-4 transition-colors ${!isSignup ? "text-[#6C0820]" : "text-[#F2DCDB]/40 group-hover:text-[#F2DCDB]"}`}>
              Login
            </div>
            {!isSignup && (
              <div className="absolute inset-0 bg-[#F2DCDB] border-[3px] border-[#6C0820] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] rounded-none transform rotate-1" />
            )}
          </div>
        </div>
      </div>

      <div className="w-2/3 flex items-center justify-center p-12 bg-[#fffdf5] relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#5A86CB 1px, transparent 1px), linear-gradient(90deg, #5A86CB 1px, transparent 1px)', backgroundSize: '25px 25px' }} 
        />

        <div className="w-full max-w-md z-10">
          <h2 className="text-7xl font-black text-[#6C0820] uppercase mb-10 tracking-tighter leading-[0.8]">
            {isSignup ? "Join the \n Box" : "Welcome \n Back"}
          </h2>

          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            {isSignup && (
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-black text-[#3D5D91] uppercase tracking-widest">Username</label>
                <input type="text" placeholder="BOOK_LOVER" className="bg-white border-[3px] border-[#6C0820] p-4 shadow-[4px_4px_0px_0px_#6C0820] focus:shadow-none focus:translate-x-1 focus:translate-y-1 transition-all outline-none" />
              </div>
            )}

            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-black text-[#3D5D91] uppercase tracking-widest">Email</label>
              <input type="email" placeholder="HELLO@PAPERBOX.COM" className="bg-white border-[3px] border-[#6C0820] p-4 shadow-[4px_4px_0px_0px_#6C0820] focus:shadow-none focus:translate-x-1 focus:translate-y-1 transition-all outline-none" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-black text-[#3D5D91] uppercase tracking-widest">Password</label>
              <input type="password" placeholder="••••••••" className="bg-white border-[3px] border-[#6C0820] p-4 shadow-[4px_4px_0px_0px_#6C0820] focus:shadow-none focus:translate-x-1 focus:translate-y-1 transition-all outline-none" />
            </div>

            <button className="mt-4 bg-[#3D5D91] text-[#F2DCDB] font-black py-5 uppercase tracking-[0.2em] text-lg border-[3px] border-[#6C0820] shadow-[8px_8px_0px_0px_#6C0820] hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px] transition-all cursor-pointer">
              {isSignup ? "Create Account" : "Let's Go"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}