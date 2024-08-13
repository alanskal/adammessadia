const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { cart } = req.body;

      // Vérifie que le panier contient des articles
      if (!cart || cart.length === 0) {
        return res.status(400).json({ error: 'Votre panier est vide' });
      }

      // Création des lignes d'articles pour Stripe à partir du panier
      const line_items = cart.map(item => ({
        price: item.priceId,
        quantity: item.quantity,
      }));

      // Créer une session de paiement Stripe
      const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });

      res.json({ url: session.url });
    } catch (err) {
      console.error('Error in Stripe checkout session:', err.message);
      res.status(err.statusCode || 500).json({ error: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
