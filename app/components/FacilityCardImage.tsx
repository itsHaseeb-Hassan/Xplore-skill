
const FacilityCardImage = ({text,src}:{text:String,src:string}) => {
  return (
    <>
     <div className="facilities-col">
                <img src={src} alt=""/>
                <h3>{text}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
    </>
  )
}

export default FacilityCardImage