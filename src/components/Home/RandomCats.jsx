import { useQuery } from "react-query";
import Img from "next/image";
import Link from "next/link";

const RandomCats = () => {

    const { data, isLoading } = useQuery(["cats"], async () => {
        const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=4&has_breeds=1&api_key=live_enyFRXhFvntlD30ivL63PwKTlPVbwGPAE9RTb3cfoajZUlHSCzf5bKdh3NxcBiK6")
        return res.json()
    }, {
        staleTime: Infinity,
        retry:2
    })

    if (isLoading) {
        return <div className="flex items-center justify-center h-40">
            <div className="w-10 h-10 border-2 border-b-0 border-l-0 border-r-0 border-yellow-500  rounded-full animate-spin" />
        </div>
    }

    if (data) {
        return <div className="grid grid-cols-1 gap-5 xs:grid-cols-2 lg:grid-cols-4">
            {data?.map(cat => {
                return <Cat cat={cat} key={cat.id} />
            })}
        </div>
    }
}


function Cat({ cat }) {
    return <div className="flex flex-col gap-3">
        <Link href={`/Cat/${cat.breeds[0].id}`} className="h-56 rounded-3xl overflow-hidden cursor-pointer">
            <Img className="w-full h-full transition object-cover hover:scale-110" src={cat.url} width={cat.width} height={cat.height} priority alt={cat.breeds[0].name} />
        </Link>
        <span className="font-medium">{cat.breeds[0].name}</span>
    </div>
}


export default RandomCats