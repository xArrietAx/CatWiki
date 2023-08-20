import Img from "next/image";
import Link from "next/link";

const cats = () => {

  const cats = [
    {
      id: "beng",
      name: "1. Bengala",
      image: "/cat-top-1.jpg",
      text: "Es muy divertido vivir con los bengalíes, pero definitivamente no son el gato para todos, o para los dueños de gatos primerizos. Extremadamente inteligentes, curiosos y activos, exigen mucha interacción y pobre del dueño que no la proporcione."
    },
    {
      id: "char",
      name: "2. Chartreux",
      image: "/cat-top-2.jpg",
      text: "El Chartreux es generalmente silencioso pero comunicativo. Las sesiones de juego cortas, combinadas con siestas y comidas, son su día perfecto. Si bien aprecian cualquier atención que les brindes, no son exigentes, sino que se contentan con seguirte con devoción, dormir en tu cama y acurrucarse contigo si no te sientes bien."
    },
    {
      id: "khao",
      name: "3. Khao Manee",
      image: "/cat-top-3.webp",
      text: "El Khao Manee es muy inteligente, con una naturaleza extrovertida e inquisitiva, sin embargo, también es muy tranquilo y relajado, lo que lo convierte en un gato faldero ideal."
    }
  ]

  return (
    <div className="flex flex-col gap-12 my-16">
      {cats.map(cat => {
        return <Cat key={cat.id} cat={cat} />
      })}
    </div>
  )
}

function Cat({ cat }) {
  return <div className="flex flex-col gap-5 md:flex-row">

    <Link href={`/Cat/${cat.id}`} className="w-full max-w-[580px] h-80 rounded-3xl mx-auto overflow-hidden cursor-pointer md:w-64 md:h-48">
      <Img className="w-full h-full object-cover transition hover:scale-110" src={cat.image} width={600} height={600} alt={cat.name} />
    </Link>

    <div className="w-fit space-y-3">
      <h2 className="font-medium text-3xl">{cat.name}</h2>
      <p>{cat.text}</p>
    </div>

  </div>
}

export default cats