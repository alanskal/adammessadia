import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return(
    <div className='navbar'>
            <Image
        src="/assets/sitelogo.png"
        alt="logo"
        height={90}
        width={90}
        />

      {/* <Link className="about" href='/'>
      <h3>SHOP</h3>
      </Link> */}



      {/* <Link className="about" href="/about">
        <h3>ABOUT !!!!</h3>
      </Link> */}
    </div>
  )
}
