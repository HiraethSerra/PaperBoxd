import { Star } from "lucide-react";

const ReviewCard = ({ title, text, author, date }) => (
  <div className="bg-[#ECD0EC]/50 border-[3px] border-black p-6 w-full md:w-[450px] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 self-end">
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} className={i === 0 ? "fill-black" : "text-black"} />
      ))}
    </div>
    <h4 className="font-bricolage font-black text-xl uppercase mb-1">{title}</h4>
    <p className="font-bricolage text-sm leading-snug mb-4">{text}</p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full border-2 border-black bg-white overflow-hidden">
        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${author}`} alt="avatar" />
      </div>
      <div>
        <p className="font-bricolage font-bold text-xs uppercase">{author}</p>
        <p className="font-bricolage text-[10px] text-black/50 uppercase">{date}</p>
      </div>
    </div>
  </div>
);

const MemberCard = ({ name, role }) => (
  <div className="bg-white border-[3px] border-black p-6 w-full md:w-[400px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex gap-6 items-center">
    <div className="w-32 h-32 bg-[#eee] border-2 border-[#ECD0EC] flex-shrink-0 flex items-center justify-center">
      <div className="text-[#ECD0EC]/50 font-black text-2xl">?</div>
    </div>
    <div className="flex flex-col">
      <h4 className="font-bricolage font-black text-2xl uppercase leading-none mb-1">{name}</h4>
      <p className="font-bricolage text-sm font-bold text-black/40 uppercase leading-none">{role}</p>
    </div>
  </div>
);

export default function Community() {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="md:w-1/2">
          <h2 className="font-bricolage font-black text-7xl md:text-[100px] uppercase leading-[0.85] tracking-tighter mb-8 text-left">
            Join the <br /> community
          </h2>
          <p className="font-bricolage text-2xl font-bold text-black/80 max-w-sm text-left">
            Share your thoughts with your friends!
          </p>
        </div>
        
        <div className="md:w-1/2 flex flex-col gap-8 items-end w-full">
          <ReviewCard 
            title="Frankenstein" 
            text="An annoying scientist and an ugly tall man fight over who is more depressed." 
            author="Sarah" 
            date="Feb 22, 2015"
          />
          <ReviewCard 
            title="Of Mice and Men" 
            author="Kate" 
            text="I don't like depressing writing. If I want to be depressed, I'll just think, not read." 
            date="Jan 21, 2015"
          />
        </div>
      </div>

      <div className="bg-[#7E2A53] py-20 px-6 md:px-10 border-t-[3px] border-black">
        <h2 className="font-bricolage font-black text-4xl uppercase text-center text-black mb-16">
          Meet our members
        </h2>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10">
          <MemberCard name="Serra" role="Frontend Developer" />
          <MemberCard name="Lyes" role="Backend Developer" />
          <MemberCard name="Wiktor" role="Backend Developer" />
        </div>
      </div>
    </section>
  );
}