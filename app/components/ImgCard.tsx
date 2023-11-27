import Image from "next/image"

const ImgCard = ({text,src}:{text:String,src:string}) => {
  return (
    <>
         <div className="campus-col">
          <Image src={src} alt="" width={500} height={300}/>
                <div className="layer">
                    <h3>{text}</h3>
                </div>
            </div>
    </>
  )
}

export default ImgCard