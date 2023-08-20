import Img from "next/image";

function OtherPhotos({ data }) {

  if (data.length > 0) {
    return <div className="flex flex-col gap-8 my-14">
      <h2 className="font-bold text-xl text-slate-800 md:text-2xl">Other Photos</h2>
      <div className="otherPhotos">
        {data?.map(photo => {
          return <Img key={photo.id} className="w-full h-60 rounded-lg object-cover shadow-md" src={photo.url} width={photo.width} height={photo.height} alt={photo?.breeds[0].name} loading="lazy" />
        })}
      </div>
    </div>
  }
}

export default OtherPhotos