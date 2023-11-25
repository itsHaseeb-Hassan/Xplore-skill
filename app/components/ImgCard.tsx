
const ImgCard = ({text,src}:{text:String,src:string}) => {
  return (
    <>
         <div className="campus-col">
                <img src={src} alt=""/>
                <div className="layer">
                    <h3>{text}</h3>
                </div>
            </div>
    </>
  )
}

export default ImgCard