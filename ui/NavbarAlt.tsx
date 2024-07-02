import Image from 'next/image'
import Link from 'next/link'

export default function NavbarAlt() {
  return (
    <div className='navbar-alt d-flex justify-content-between pt-1 align-items-center'>
      <Image className=''
        src="/assets/bar.png"
        alt="menu déroulant"
        height={90}
        width={90}
      />
      <Link href='/'>
      <Image className='lgo'
        src="/assets/sitelogo.png"
        alt="logo"
        height={180}
        width={350}
    />

      </Link>
      <Link href='/about'>
        <Image
          src="/assets/cart.png"
          alt="panier"
          height={90}
          width={90}
        />
      </Link>
    </div>
  )
}
