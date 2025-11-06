
// Podaci o svim putovanjima
const putovanja = {
  pariz: {
    naslov: "Unlock Paris Magic - City of Lights & Eternal Romance",
    opis: "3 days / 2 nights in the heart of Paris",
    tekst: "Enjoy the timeless romance of Paris with a visit to the Eiffel Tower, a scenic Seine River cruise, and tastings of exquisite French pastries and wines. Package includes accommodation, daily breakfast, and a personal city guide to uncover hidden gems.",
    cijena: "399 €",
    slika: "images/pariz.jpeg"
  },
  london: {
    naslov: "London Calling - Red Buses, Parks & Cozy Tea Escapes",
    opis: "5 days / 4 nights",
    tekst: "Answer the call of London with iconic red double-deckers, serene strolls through Hyde Park and Regent's Park, and cozy afternoon teas in historic tearooms. Ride the London Eye at sunset, explore Buckingham Palace, and unwind with a classic cream tea. Package includes central hotel stay, daily breakfast, and a hop-on hop-off bus pass.",
    cijena: "659 €",
    slika: "images/london.jpeg"
  },
  sevilla: {
    naslov: "Seville & Andalusia - Journey to the Heart of Spanish Soul",
    opis: "7 days all-inclusive",
    tekst: "Embark on a soul-stirring journey through Seville and Andalusia, where flamenco rhythms echo in ancient streets and the scent of orange blossoms fills the air. Explore the majestic Alcázar, wander the white villages of Ronda and Córdoba, and savor authentic tapas under starlit skies. Includes boutique accommodation, daily breakfast, flamenco evening, and guided cultural tours.",
    cijena: "799 €",
    slika: "images/sevilla.jpeg"
  }
};

// Dohvaćanje ID-a iz URL-a
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Prikaz podataka ako putovanje postoji
if (id && putovanja[id]) {
  const p = putovanja[id];
  document.getElementById("travel-header").textContent = p.naslov;
  document.getElementById("travel-description").textContent = p.opis;
  document.getElementById("travel-text").textContent = p.tekst;
  document.getElementById("travel-price").textContent = "Price: " + p.cijena;
  document.getElementById("travel-img").src = p.slika;
  document.getElementById("travel-img").alt = p.naslov;
} else {
  document.getElementById("travel-header").textContent = "Destination not found";
  document.getElementById("details").innerHTML = `
      <p>Sorry, the requested travel offer does not exist.</p>
      <a href="index.html" class="landing-button">Back to offers</a>
  `;
}


