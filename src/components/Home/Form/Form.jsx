import { useState } from "react";
import { useQuery } from "react-query";
import { ShowResults } from "./ShowResults";
import { Modal } from "./Modal";

export function Form() {

  const [isOpen, setIsOpen] = useState(false)
  
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [query, setQuery] = useState("")

  const { data } = useQuery(["search"], async () => {
    const res = await fetch("https://api.thecatapi.com/v1/breeds?api_key=live_enyFRXhFvntlD30ivL63PwKTlPVbwGPAE9RTb3cfoajZUlHSCzf5bKdh3NxcBiK6")
    return res.json()
  }, {
    retry: 2
  })

  return (
    <>
      <form className="relative flex items-center justify-between gap-5 w-fit max-w-[130px] p-3 rounded-3xl bg-white md:max-w-[250px]">

        <input type="text" placeholder="Enter your breed" className="hidden w-full outline-none placeholder:text-slate-700 placeholder:font-medium md:block" onChange={e => setQuery(e.target.value)} onClick={() => setIsOpen(true)} />

        <button type="button" className="block w-full outline-none font-medium md:hidden" onClick={() => {setIsModalOpen(true), document.body.style.overflow = "hidden"}}>Search</button>

        <i className="bi bi-search text-xl" />

        <ShowResults data={data} query={query} isOpen={isOpen} setIsOpen={setIsOpen} />

      </form> 

      <Modal data={data} query={query} setQuery={setQuery} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

    </>
  );
}