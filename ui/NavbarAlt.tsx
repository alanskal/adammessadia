import Image from 'next/image'
import Link from 'next/link'
import Dropdown from 'react-bootstrap/Dropdown'
import { useShoppingCart } from "use-shopping-cart";
import { useMediaQuery } from '@mui/material'



export default function NavbarAlt() {

  const { handleCartClick } = useShoppingCart();


  const isMobile = useMediaQuery('(max-width:600px)')



  return (



  <div className="row">
    <div className='navbar-alt d-flex justify-content-between pt-1 pb-2 align-items-center col-sm-12 '>
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
        height={isMobile ? 80 : 180}
        width={isMobile ? 180 : 350}


        />

      </Link>
      <button onClick={handleCartClick}>

        <Image className='shake'
          src="/assets/cart.png"
          alt="panier"
          height={90}
          width={90}

          />
      </button>

          </div>
        </div>


  )
}
