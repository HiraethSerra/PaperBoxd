const BookCard = ({ title, author, color, cover }) => (
  <div className="group relative flex flex-col w-44 transition-transform hover:-translate-y-2 cursor-pointer">
    <div 
      className="relative h-60 w-full border-[3px] border-[#6C0820] shadow-[6px_6px_0px_0px_#6C0820] overflow-hidden transition-all group-hover:shadow-[2px_2px_0px_0px_#6C0820] group-hover:translate-x-[4px] group-hover:translate-y-[4px]"
      style={{ backgroundColor: color }} 
    >
      {cover ? (
        <img 
          src={cover} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : null}

      <div className="absolute inset-x-0 bottom-0 bg-[#F2DCDB]/90 border-t-2 border-[#6C0820] p-3">
        <h4 className="font-bricolage font-black text-sm leading-tight uppercase text-[#6C0820]">
          {title}
        </h4>
      </div>
    </div>

    <p className="mt-4 font-bricolage text-[9px] font-bold uppercase tracking-widest text-[#3D5D91]">
      {author}
    </p>
  </div>
);

export default function BooksSection() {
  const books = [
    { 
      title: "The Great Gatsby", 
      author: "F. Scott Fitzgerald", 
      color: "#F2AEBC",
      cover: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=400" 
    },
    { 
      title: "1984", 
      author: "George Orwell", 
      color: "#F2DCDB",
      cover: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=400"
    },
    { 
      title: "The Hobbit", 
      author: "J.R.R. Tolkien", 
      color: "#5A86CB",
      cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=400"
    },
    { 
      title: "Dune", 
      author: "Frank Herbert", 
      color: "#F2AEBC",
      cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=400"
    },
    { 
      title: "Hamlet", 
      author: "Shakespeare", 
      color: "#F2DCDB",
      cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400"
    },
    { 
      title: "Emma", 
      author: "Jane Austen", 
      color: "#5A86CB",
      cover: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=400"
    },
  ];

  return (
    <section className="flex flex-col items-center py-10">
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-20 max-w-[1400px] px-10 mb-24">
        {books.map((book, index) => (
          <div key={index} className={index % 2 === 0 ? "md:mt-0" : "md:mt-16"}>
            <BookCard {...book} />
          </div>
        ))}
      </div>

      <button className="px-10 py-3 font-bricolage font-black text-xl uppercase tracking-widest text-white bg-[#3D5D91] border-[3px] border-[#6C0820] shadow-[5px_5px_0px_0px_#6C0820] hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all cursor-pointer">
        Sign Up Now
      </button>
    </section>
  );
}