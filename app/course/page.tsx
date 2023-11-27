import Card from "../components/Card"
import Navbar from "../components/Navbar"
import FacilityCardImage from "../components/FacilityCardImage"
const page = () => {
  return (
    <div>
        <section className="Sub-header">
        <Navbar />
        <h1>Our Courses</h1>
        </section>
        <section className="course">
        <h1>Course We Offer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
         <div className="row">
            <Card />
            <Card />
            <Card />
         </div>
         </section>
         <section className="facilities">
        <h1>Best Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
         <div className='row'>
         <FacilityCardImage text="Web Development" src="/img/course1.png" />
         <FacilityCardImage text="Artificial Intelligence" src="/img/course2.png"/>
         <FacilityCardImage text="Data Science" src="/img/course3.png"/>
         </div>
         </section>
    </div>
  )
}

export default page