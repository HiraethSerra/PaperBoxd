import { Star } from "lucide-react";

/**
 * ReviewCard Component
 * Displays individual user book reviews with a Neo-Brutalist shadow.
 */
const ReviewCard = ({ title, text, author, date }) => (
  <div className="bg-[#F2AEBC]/40 border-[3px] border-[#6C0820] p-6 w-full md:w-[450px] shadow-[6px_6px_0px_0px_#6C0820] transition-transform hover:-translate-y-1 self-end">
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          size={16} 
          className={i === 0 ? "fill-[#6C0820] text-[#6C0820]" : "text-[#6C0820]"} 
        />
      ))}
    </div>
    <h4 className="font-bricolage font-black text-xl uppercase mb-1 text-[#6C0820]">
      {title}
    </h4>
    <p className="font-bricolage text-sm leading-snug mb-4 text-[#6C0820]/80">
      {text}
    </p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full border-2 border-[#6C0820] bg-white overflow-hidden">
        <img 
          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${author}`} 
          alt="avatar" 
        />
      </div>
      <div>
        <p className="font-bricolage font-bold text-xs uppercase text-[#6C0820]">
          {author}
        </p>
        <p className="font-bricolage text-[10px] text-[#6C0820]/50 uppercase">
          {date}
        </p>
      </div>
    </div>
  </div>
);

/**
 * MemberCard Component
 * Displays community members in the wide rectangular format from the reference.
 */
const MemberCard = ({ name, role }) => (
  <div className="bg-white border-[3px] border-[#6C0820] p-6 w-full md:w-[400px] shadow-[8px_8px_0px_0px_#6C0820] flex gap-6 items-center">
    <div className="w-32 h-32 bg-[#F2DCDB] border-2 border-[#F2AEBC] flex-shrink-0 flex items-center justify-center">
      {/* Placeholder for member photo */}
      <div className="text-[#F2AEBC] font-black text-2xl">?</div>
    </div>
    <div className="flex flex-col">
      <h4 className="font-bricolage font-black text-2xl uppercase leading-none mb-1 text-[#6C0820]">
        {name}
      </h4>
      <p className="font-bricolage text-sm font-bold text-[#5A86CB] uppercase leading-none">
        {role}
      </p>
    </div>
  </div>
);

export default function Community() {
  return (
    <section className="w-full">
      {/* Upper Community Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="md:w-1/2">
          <h2 className="font-bricolage font-black text-7xl md:text-[100px] uppercase leading-[0.85] tracking-tighter mb-8 text-left text-[#6C0820]">
            Join the <br /> community
          </h2>
          <p className="font-bricolage text-2xl font-bold text-[#3D5D91] max-w-sm text-left">
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

      {/* Footer Member Section */}
      <div className="bg-[#6C0820] py-20 px-6 md:px-10 border-t-[3px] border-[#6C0820]">
        <h2 className="font-bricolage font-black text-4xl uppercase text-center text-[#F2DCDB] mb-16">
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

