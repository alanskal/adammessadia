import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

export default function PreviewPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Vérifie la redirection après la session de paiement
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }

    // Charger les articles du panier depuis localStorage
    const storedItems = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(storedItems);
  }, []);

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    // Crée une session Checkout avec les articles du panier
    const response = await fetch('/api/checkout_sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: cartItems }),
    });

    const session = await response.json();
    const result = await stripe.redirectToCheckout({ sessionId: session.id });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <div>
      <h1>Panier</h1>
      <ul>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <li key={index}>
              Produit ID: {cloth.priceId}, Quantité: {item.quantity}
            </li>
          ))
        ) : (
          <p>Votre panier est vide.</p>
        )}
      </ul>
      <button
        onClick={handleCheckout}
      >
        Checkout
      </button>
    </div>
  );
}
