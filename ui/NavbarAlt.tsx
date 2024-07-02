import Image from 'next/image'
import Link from 'next/link'

export default function NavbarAlt() {
  return (
    <div className='navbar-alt d-flex justify-content-between'>
      <Image className=''
        src="/assets/sorciere.png"
        alt="logo"
        height={150}
        width={350}
      />
      <Link href='/'>
      <Image className='home-btn'
        src="/assets/sorciere.png"
        alt="logo"
        height={150}
        width={350}
    />

      </Link>
      <Link href='/about'>
        <Image
          src="/assets/sorciere.png"
          alt="logo"
          height={150}
          width={350}
        />
      </Link>
    </div>
  )
}
