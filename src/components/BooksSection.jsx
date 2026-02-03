const BookCard = ({ title, author, color }) => (
  <div className="group relative flex flex-col w-44 transition-transform hover:-translate-y-2 cursor-pointer">
    <div 
      className="h-60 w-full border-[3px] border-black rounded-sm shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-end p-4 transition-all hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
      style={{ backgroundColor: color }} 
    >
      <h4 className="font-bricolage font-black text-lg leading-tight uppercase text-black">{title}</h4>
    </div>
    <p className="mt-4 font-bricolage text-[9px] font-bold uppercase tracking-[0.2em] text-black/50">{author}</p>
  </div>
);

export default function BooksSection() {
  const books = [
    { title: "Pride & Prejudice", author: "Jane Austen", color: "#BA71A2" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", color: "#ECD0EC" },
    { title: "1984", author: "George Orwell", color: "#BA71A2" },
    { title: "The Hobbit", author: "J.R.R. Tolkien", color: "#7E2A53" },
    { title: "The Alchemist", author: "Paulo Coelho", color: "#ECD0EC" },
    { title: "Little Women", author: "Louisa May Alcott", color: "#BA71A2" },
  ];

  return (
    <section className="flex flex-col items-center py-10">
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-16 max-w-[1400px] px-10 mb-20">
        {books.map((book, index) => (
          <div key={index} className={index % 2 === 0 ? "md:mt-0" : "md:mt-12"}>
            <BookCard {...book} />
          </div>
        ))}
      </div>

      <button className="px-8 py-3 font-bricolage font-black text-lg uppercase tracking-widest text-black bg-[#BA71A2] border-[3px] border-black shadow-[4px_4px_0px_0px_#7E2A53] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer">
        Sign Up Now
      </button>
    </section>
  );
}