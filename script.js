// PANIER
let cartCount = 0;
function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
}

// SLIDER DE FOND (hero)
const hero = document.querySelector(".hero");

const images = [
  "images/b1.jpg",
  "images/b2.jpg",
  "images/b3.jpg",
  "images/b4.jpg",
  "images/b5.jpg",
  "images/b6.jpg"
];

let index = 0;

// image initiale
hero.style.backgroundImage = `url(${images[index]})`;

setInterval(() => {
  index = (index + 1) % images.length;
  hero.style.backgroundImage = `url(${images[index]})`;
}, 2000); // 5 secondes
function orderWhatsApp(productName, price) {

  const phoneNumber = "212771023456"; // TON NUMÉRO (sans +)

  const messages = [
    `Bonjour, je souhaite commander le ${productName} au prix de ${price}. Est-il disponible ?`,
    `Salam, je suis intéressé(e) par le ${productName} (${price}). Merci de me donner plus d’informations.`,
    `Bonsoir, je voudrais acheter le ${productName}. Pouvez-vous me confirmer le prix (${price}) et la livraison ?`
  ];

  // Choisir un message au hasard
  const message = messages[Math.floor(Math.random() * messages.length)];

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}
