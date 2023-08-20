import Link from "next/link";
import dynamic from "next/dynamic";

const RandomCats = dynamic(() => import("./RandomCats"), {
  loading: () => (<div className="flex items-center justify-center h-40">
  <div className="w-10 h-10 border-2 border-b-0 border-l-0 border-r-0 border-yellow-500  rounded-full animate-spin" />
</div>)
})

export const Discover = () => {
  return (
    <div className="flex flex-col gap-14 px-6 py-10 rounded-br-3xl rounded-bl-3xl bg-custom-brown md:p-14">
      <span className="relative font-medium text-stone-800 before:absolute before:-bottom-3 before:w-14 before:h-1 before:rounded-md before:bg-yellow-950">Most Searched Breeds</span>
      <div>
        <div className="flex flex-wrap items-end justify-between gap-5">
          <h2 className="font-bold text-4xl text-yellow-950 md:text-5xl">66+ Breeds For you <br className="hidden md:block" /> to discover</h2>
          <Link href={"/Top"} className="w-fit font-semibold text-yellow-900 hover:text-yellow-700">SEE MORE <i className="bi bi-arrow-right text-xl" /></Link>
        </div>
      </div>
      <RandomCats />
    </div>

  )
}

