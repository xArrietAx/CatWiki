import Link from "next/link";

export const Why = () => {
  return (
      <div className="flex flex-col gap-8 my-28">
      <h2 className="relative font-bold text-4xl text-yellow-950 md:text-6xl before:absolute before:-top-4 before:w-14 before:h-1 before:rounded-md before:bg-yellow-950">Why should you <br /> have a cat?</h2> 
      <p className="font-medium text-lg text-stone-600">Having a cat around you can actually trigger the release of calming chemicals in your body wich lower your stress and anxiety leves</p>
      <Link href={"https://www.berkeleyvetcenter.com/blog/meow-benefits-of-owning-a-cat/"} className="w-fit font-semibold text-yellow-900 hover:text-yellow-700">READ MORE <i className="bi bi-arrow-right text-xl" /></Link>
      </div>
  )
}
