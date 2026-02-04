export default function Ticker() {
  const items = ["JOIN THE BOX", "COLLECT THEM ALL", "READ MORE", "SPRING 2026"];
  return (
    <div className="w-full border-y-[3px] border-[#6C0820] bg-[#6C0820] overflow-hidden py-5 font-bricolage mt-12">
      <div className="flex animate-marquee">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((item, index) => (
              <span key={index} className="mx-12 text-2xl font-black uppercase italic text-[#F2DCDB] whitespace-nowrap">
                {item} <span className="ml-12 text-[#F2AEBC]">★</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}