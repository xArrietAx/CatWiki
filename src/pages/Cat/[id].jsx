import { useQuery } from "react-query";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Img from "next/image";
import { Container } from "@/components/Layout/Container";
import { Rating } from "@/components/Cat/Rating";

const OtherPhotos = dynamic(() => import("@/components/Cat/OtherPhotos"), {
  loading: () => (<div className="flex items-center justify-center h-[66vh]">
  <div className="w-10 h-10 border-2 border-b-0 border-l-0 border-r-0 border-red-500  rounded-full animate-spin" />
</div>)
})

const Cat = () => {

  const { query: { id } } = useRouter()

  const { data, isLoading, isError, refetch } = useQuery(["cat", id], async () => {
    const res = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}&limit=8&api_key=live_enyFRXhFvntlD30ivL63PwKTlPVbwGPAE9RTb3cfoajZUlHSCzf5bKdh3NxcBiK6`)
    return res.json() 
  }, {
    staleTime:Infinity,
    retry: 2,
    
  })

  if (isLoading) {
    return <Container>
      <div className="flex items-center justify-center h-[66vh]">
        <div className="w-10 h-10 border-2 border-b-0 border-l-0 border-r-0 border-yellow-500  rounded-full animate-spin" />
      </div>
    </Container>
  };

  if (isError) {
    return <Container>
    <div className="flex items-center justify-center h-[66vh]">
      <div className="flex flex-col gap-3">
      <span className="font-medium">Failed to get the cat</span>
      <button className="p-2 border rounded-md font-medium text-slate-800 shadow focus:shadow-none" onClick={refetch}>Try again</button>
      </div>
    </div>
  </Container>
  }

  if (data.length === 0) {
    return <Container>
      <div className="font-[500] text-slate-800">cat not found</div>
    </Container>
  }
  
  if (data) {
    
    const firstObj = data[0]

    const info = [
      {
        id:7432,
        text:"Temperament:",
        data: firstObj?.breeds[0].temperament || "Unknown"
      },
      {
        id:4386,
        text:"Origin:",
        data: firstObj?.breeds[0].origin || "Unknown"
      },
      {
        id:6456,
        text:"Life Span:",
        data: firstObj?.breeds[0].life_span || "Unknown"
      }
    ]

    const secondInfo = [
      {
        id:5434,
        text:"Adaptability:",
        n: firstObj?.breeds[0].adaptability || "Unknown"
      },
      {
        id:5848,
        text:"Affection level:",
        n: firstObj?.breeds[0].affection_level || "Unknown"
      },
      {
        id:9656,
        text: "Child Friendly:",
        n:firstObj?.breeds[0].child_friendly || "Unknown"
      },
      {
        id:4323,
        text:"Grooming:",
        n: firstObj?.breeds[0].grooming || "Unknown"
      },
      {
        id:9768,
        text:"Intelligence:",
        n: firstObj?.breeds[0].intelligence || "Unknown"
      },
      {
        id:9865,
        text: "Health issues:",
        n: firstObj?.breeds[0].health_issues || "Unknown"
      },
      {
        id:6487,
        text:"Social needs:",
        n: firstObj?.breeds[0].social_needs || "Unknown"
      },
      {
        id:9654,
        text: "Stranger friendly:",
        n: firstObj?.breeds[0].stranger_friendly || "Unknown"
      },
    ]

    return (
      <Container>
        
        <main className="flex flex-col">
        <div className="flex flex-col gap-14 my-5 lg:flex-row">
          
          <div className="w-full max-w-[580px] h-72 rounded-3xl mx-auto overflow-hidden lg:max-w-[380px] lg:min-w-[350px]">
            <Img className="w-full h-full object-cover shadow-md" src={firstObj?.url} width={firstObj?.width} height={firstObj?.height} alt={firstObj?.breeds[0].name} priority />
          </div>
          
          <div className="flex flex-col gap-5">
           
            <h2 className="font-bold text-3xl text-slate-800 md:text-4xl">{firstObj?.breeds[0].name}</h2>
            <p className="font-[500] leading-7 text-slate-800">{firstObj?.breeds[0].description}</p>

          {info.map(ele => {
              return <div key={ele.id} className="space-x-3">
              <span className="font-semibold">{ele.text}</span>
              <span className="font-[500] text-slate-800">
             {ele.data}
              </span>
             </div>
          })}

           {secondInfo.map(ele => {
              return <div className="flex flex-wrap items-center justify-between gap-3 w-full max-w-[350px] font-[500]" key={ele.id} >
              <span >{ele.text}</span>
              <Rating n={ele.n} />
              </div> 
            })}

          </div>
        
        </div>
          <OtherPhotos data={data} />
        </main>

      </Container>
    )
  }

}


export default Cat