import Link from 'next/link'
import { useEffect } from "react";

export const ShowResults = ({data, query, isOpen, setIsOpen}) => {

    useEffect(() => {
    
      document.body.addEventListener('mousedown', () => setIsOpen(false));
    
      return () => {
        document.body.removeEventListener('mousedown', () => setIsOpen(false));
      };
      
    }, [setIsOpen]);
  
  return (
    <div className={`absolute top-16 left-0 z-20 hidden w-full h-56 rounded-2xl bg-white ${isOpen ? "md:block" : "hidden"}`} onMouseDown={e => e.stopPropagation()}>
  
      <div className="h-full p-2">
        <div className="search flex flex-col h-full overflow-auto">
          {data?.filter(e => {
            return e.name.includes(query) || e.name.toLowerCase().includes(query.toLowerCase());
          }).map(ele => (
            <Link key={ele.id} href={`/Cat/${ele.id}`} className="p-2 rounded-lg  hover:bg-slate-200" >
              {ele.name}
            </Link>
          ))}
  
          {data?.filter(e => {
            return e.name.includes(query) || e.name.toLowerCase().includes(query.toLowerCase());
          }).length === 0 && (
              <p className="p-2">No results found</p>
            )}
        </div>
  
      </div>
  
    </div>
  )

}
