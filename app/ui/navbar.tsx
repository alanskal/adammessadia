import Link from 'next/link'

export default function Navbar() {
  return(
    <div className='navbar'>
      <h3>ADAM MESSADIA</h3>
        <Link className="about" href="/about">
          <h3>ABOUT !!!!</h3>
        </Link>
    </div>
  )
}
