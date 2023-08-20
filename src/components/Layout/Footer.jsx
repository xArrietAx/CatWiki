import { Mukta } from "next/font/google";

import { Logo } from "./Logo"

const mukta = Mukta({ subsets: ['latin'], weight: "400" })

export const Footer = () => {
  return (
    <footer className='flex flex-wrap items-center justify-between gap-3 p-5 rounded-tr-xl rounded-tl-xl mt-auto bg-custom-dark'>
      <Logo color={"white"} className={"text-3xl text-white"} size="w-36" />
      <div>
        <span className={`font-thin text-white ${mukta.className}`}>© created by <span className="font-sans font-medium">ArrietA</span></span>
      </div>
    </footer>
  )
}