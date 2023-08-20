import Link from 'next/link'

export function Modal({data, query, setQuery, setIsModalOpen, isModalOpen}) {
    return (
      <div className={`absolute top-0 left-0 z-50 flex items-center justify-center w-screen min-h-screen bg-slate-600 bg-opacity-60 md:hidden ${isModalOpen ? null : "hidden" }`} >
  
      <div className="flex flex-col gap-3 w-11/12 max-w-sm h-72 p-3 rounded-2xl bg-white">
  
        <div className="flex justify-end">
          <button className="px-2 rounded-md hover:bg-slate-200" onClick={() => {setIsModalOpen(false), document.body.style.overflow = "auto"}}>
            <i className="bi bi-x text-2xl" />
          </button>
        </div>
  
        <form className="flex justify-between w-full p-2 border rounded-3xl shadow-md">
  
          <input type="text" placeholder="Enter your breed" className="w-full outline-none" onChange={e => setQuery(e.target.value)}/>
  
          <i className="bi bi-search text-xl" />
  
        </form>
  
        <div className="p-2 overflow-hidden">
    <div className="search flex flex-col h-full overflow-auto">
     
      {data?.filter(e => {
        return e.name.includes(query) || e.name.toLowerCase().includes(query.toLowerCase());
      }).map(ele => (
        <Link key={ele.id} href={`/Cat/${ele.id}`} className="p-2 rounded-lg  hover:bg-slate-200" onClick={() => document.body.style.overflow = "auto"} >
          {ele.name}
        </Link>
      ))}
  
      {data?.filter(e => {
        return e.name.includes(query) || e.name.toLowerCase().includes(query.toLowerCase())
      }).length === 0 && (
          <p className="p-2">No results found</p>
        )}
    </div>
  
  </div>
  
      </div>
  
    </div>
  )
  }