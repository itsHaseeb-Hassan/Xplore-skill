'use client'
import Link from 'next/link';
import { manipulateElementById } from '../Script';
const Navbar = () => {
  const showMenu = () => {
    manipulateElementById('navLinks', 'show');
};

const hideMenu = () => {
    manipulateElementById('navLinks', 'hide');
};
  return (
    <div>
    <nav>
            <Link href="/home" className="logo">Xplore
                <i className="fab fa-staylinked"></i>kill
            </Link>
            <div className="nav-links" id="navLinks">
                <i className="fa fa-times" onClick={hideMenu}></i>
                <ul>
                <li><Link href="/home" className='link'>Home</Link></li>
                <li> <Link href="/course" className='link'> Course</Link></li>
                <li> <Link href="/blog" className='link'>Blog</Link></li>
                <li> <Link href="/about" className='link'>About</Link></li>
                <li><Link href="/contact" className='link'>Contact</Link></li>
                </ul>
            </div>
            <i className="fa fa-bars" onClick={showMenu} ></i>
        </nav>
    </div>
  )
}

export default Navbar