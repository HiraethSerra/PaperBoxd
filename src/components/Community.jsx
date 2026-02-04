import { Star } from "lucide-react";

const MemberCard = ({ name, role }) => (
  <div className="bg-white border-[3px] border-[#6C0820] p-6 w-full md:w-[400px] shadow-[8px_8px_0px_0px_#6C0820,0px_10px_20px_rgba(108,8,32,0.1)] flex gap-6 items-center transition-all hover:-translate-y-1">
    <div className="w-32 h-32 bg-[#F2DCDB] border-2 border-[#F2AEBC] flex-shrink-0 flex items-center justify-center">
      <div className="text-[#F2AEBC] font-black text-2xl">?</div>
    </div>
    <div className="flex flex-col">
      <h4 className="font-black text-2xl uppercase text-[#6C0820] leading-none mb-1">{name}</h4>
      <p className="text-sm font-bold text-[#5A86CB] uppercase">{role}</p>
    </div>
  </div>
);

export default function Community() {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="md:w-1/2">
          <h2 className="font-black text-7xl md:text-[100px] uppercase leading-[0.85] text-[#6C0820]">Join the <br /> community</h2>
          <p className="text-2xl font-bold text-[#3D5D91] mt-4">Share your thoughts!</p>
        </div>
        <div className="md:w-1/2 flex flex-col gap-8 items-end w-full">
          <div className="bg-[#F2AEBC]/30 border-[3px] border-[#6C0820] p-6 w-full md:w-[450px] shadow-[6px_6px_0px_0px_#6C0820]">
             <div className="flex gap-1 mb-2 text-[#6C0820]"><Star size={14} className="fill-current"/><Star size={14} className="fill-current"/></div>
             <h4 className="font-black text-xl uppercase text-[#6C0820]">Frankenstein</h4>
             <p className="text-sm text-[#6C0820]/80">An annoying scientist and an ugly tall man fight.</p>
          </div>
        </div>
      </div>
      <div className="bg-[#6C0820] py-20 px-6 border-t-[3px] border-[#6C0820]">
        <h2 className="text-4xl font-black uppercase text-center text-[#F2DCDB] mb-16">Meet our members</h2>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10">
          <MemberCard name="Serra" role="Frontend Developer" />
          <MemberCard name="Lyes" role="Backend Developer" />
          <MemberCard name="Wiktor" role="Backend Developer" />
        </div>
      </div>
    </section>
  );
}