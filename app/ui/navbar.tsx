import Link from 'next/link'


export default function Navbar() {
  return(
    <div className='navbar'>
      <Link className="about" href='/'>
      <h3>SHOP</h3>
      </Link>



      <Link className="about" href="/about">
        <h3>ABOUT !!!!</h3>
      </Link>
    </div>
  )
}
