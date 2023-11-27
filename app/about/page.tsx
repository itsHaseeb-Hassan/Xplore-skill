import Navbar from "../components/Navbar"
import Image from "next/image"
import Link from "next/link"
const Page = () => {
  return (
    <div>
        <section className="Sub-header">
            <Navbar />
            <h1>About Us</h1>
        </section>
        <section className="about-us">
        <div className="row">
            <div className="about-col">
                <h1>We are the world&apos;s largest University</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque in accusantium molestias maiores fuga vitae eos, ducimus officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis aspernatur, nobis tempora consequatur id aliquam asperiores voluptatum iste animi voluptatem fugiat totam excepturi dolor.</p>
                <Link href="" className="hero_btn btn link">EXPLORE NOW</Link>
            </div>
            <div className="about-col">
                <Image src="/img/about.png" alt="" width={500} height={500}/>
               
            </div>
        </div>
    </section>
    </div>
  )
}

export default Page