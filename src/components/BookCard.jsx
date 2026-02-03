const BookCard = ({ title, author, color }) => {
  return (
    <div className="group relative flex flex-col w-48 transition-transform hover:-translate-y-2 cursor-pointer">
      <div 
        className="h-64 w-full border-2 border-black rounded-sm shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-end p-4 transition-shadow hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
        style={{ backgroundColor: color || '#ECD0EC' }} 
      >
        <h4 className="font-bricolage font-black text-lg leading-tight uppercase text-black">
          {title}
        </h4>
      </div>
      
      <p className="mt-3 font-bricolage text-xs font-bold uppercase tracking-widest text-black/60">
        {author}
      </p>
    </div>
  );
};