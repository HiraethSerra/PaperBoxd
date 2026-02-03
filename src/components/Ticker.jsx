export default function Ticker() {
  const items = ["READING MADE SIMPLE", "READING MADE SIMPLE", "READING MADE SIMPLE", "READING MADE SIMPLE"];
  return (
    <div className="w-full border-y-[3px] border-black bg-[#BA71A2] overflow-hidden py-4 font-bricolage mt-10">
      <div className="flex animate-marquee">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((item, index) => (
              <span key={index} className="mx-10 text-xl font-black uppercase italic text-black whitespace-nowrap">
                {item} <span className="ml-10 text-[#ECD0EC]">★</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}