import Link from 'next/link';

export default function Navbar() {
  return(
    <div className='navbar'>
      <Link className="about" href='/'>
      <h3>ADAM MESSAADIA</h3>
       </Link>
          <Link href="/about" className="about">
            <h3>ABOUT !!!!</h3>
          </Link>
    </div>
  )
}
