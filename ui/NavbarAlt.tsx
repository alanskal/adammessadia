import Image from 'next/image'
import Link from 'next/link'
import Dropdown from 'react-bootstrap/Dropdown'

export default function NavbarAlt() {



  return (


    <div className='navbar-alt d-flex justify-content-between pt-1 align-items-center'>
      <Dropdown className='' >
        <Dropdown.Toggle variant="" id="dropdown-basic" className='dropDown shake'>
           <Image
            src="/assets/bar.png"
            alt="menu déroulant"
            height={90}
            width={90}
            />
        </Dropdown.Toggle>

        <Dropdown.Menu className=''>
        <Dropdown.Item href="#/action-1">Cart</Dropdown.Item>
        <Dropdown.Item href="#/action-2">About</Dropdown.Item>
      </Dropdown.Menu>

      </Dropdown>

      <Link href='/'>
      <Image id='logo' className=''
        src="/assets/sitelogo.png"
        alt="logo"
        height={180}
        width={350}
    />

      </Link>
      <Link href='/about'>
        <Image className='shake'
          src="/assets/cart.png"
          alt="panier"
          height={90}
          width={90}
        />
      </Link>
    </div>
  )
}
