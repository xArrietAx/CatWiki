import dynamic from "next/dynamic";
import { Container } from "@/components/Layout/Container";

const Cats = dynamic(() => import('@/components/Top/Cats'), {
  loading: () => () => (<div className="flex items-center justify-center h-40">
  <div className="w-10 h-10 border-2 border-b-0 border-l-0 border-r-0 border-yellow-500  rounded-full animate-spin" />
</div>)
})

const TopSearched = () => {  
  return (
    <Container>
        <main>
        <h1 className="mt-3 font-semibold text-4xl">Top 3 most searched breeds</h1>
       <Cats />
        </main>
    </Container>
  )
}

export default TopSearched
