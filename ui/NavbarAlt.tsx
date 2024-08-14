import Image from 'next/image';
import Link from 'next/link';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState, useEffect, useRef } from 'react';
import { useCart } from '../context/CartContext';  // Assurez-vous que le chemin est correct

export default function NavbarAlt() {
  const { cart } = useCart();

  const proceedToCheckout = async () => {
    try {
      const res = await fetch('/api/checkout_sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cart }), // On envoie l'ensemble du panier
      });

      const data = await res.json();

      if (res.ok) {
        window.location.href = data.url;
      } else {
        console.error('Erreur lors de la création de la session Stripe:', data.error);
      }
    } catch (error) {
      console.error('Erreur lors de la requête:', error);
    }
  };

  const Flyout = ({ children }: { children: React.ReactNode }) => {
    const [open, setOpen] = useState(false);
    const flyoutRef = useRef<HTMLDivElement>(null);

    const toggleFlyout = () => setOpen(prev => !prev);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (flyoutRef.current && !flyoutRef.current.contains(event.target as Node)) {
          setOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    return (
      <div className='position-relative' onClick={toggleFlyout}>
        {children}
        {open && (
          <div className='bg-white position-absolute top-0 end-100 rounded'>
            <div className='p-2 cart'>
              <h1 className='text-center'>Panier</h1>
              {cart.length > 0 ? (
                cart.map((item, index) => (
                  <p key={index}>Article ID: {item.priceId}, Quantité: {item.quantity}</p>
                ))
              ) : (
                <p>Votre panier est vide</p>
              )}
              <div className='text-center'>
                <button className='text-black' id='goToPay' onClick={proceedToCheckout}>Aller au paiement</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className='navbar-alt d-flex justify-content-between pt-1 align-items-center'>
      <Dropdown>
        <Dropdown.Toggle variant="" id="dropdown-basic" className='dropDown shake'>
          <Image
            src="/assets/bar.png"
            alt="menu déroulant"
            height={90}
            width={90}
            id='dropdown'
          />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/cart">Cart</Dropdown.Item>
          <Dropdown.Item href="/about">About</Dropdown.Item>
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

      <Flyout>
        <Image className='shake'
          id="cart"
          src="/assets/cart.png"
          alt="panier"
          height={90}
          width={90}
        />
      </Flyout>
    </div>
  );
}
