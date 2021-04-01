export default function() {
  const container = document.createElement('div');
  container.classList.add('section-container');

  const heading1 = document.createElement('h3');
  const heading2 = document.createElement('h3');
  const heading3 = document.createElement('h3');
  
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');

  heading1.textContent = 'Our Story'
  heading2.textContent = 'Our People'
  heading3.textContent = 'Our Pasta'

  p1.textContent = 'We are Monzu Fresh Pasta, serving Italian and contemporary flavors made from scratch in the heart of San Diego’s East Village. In drawing upon our European heritage and passion for hand-crafted meals, we take pride in transporting you to Italy via our home country’s most beloved staple: fresh pasta. Monzu is a Neapolitan corruption of the French term “monsieur.” Neapolitan and Sicilian Monzu were renowned professional French-trained chefs who worked for aristocracy and members of the Bourbon court in 18th and 19th century Southern Italy. They became especially popular for their ability to mix French cuisine and Southern Italian ingredients. Their secret recipes, among them many different pasta specialties, are today part of the Italian food tradition.'
  p2.textContent = 'Monzu Fresh Pasta is the family-owned creation of Neapolitan Aldo de Dominicis Rotondi and Serena Romano, a husband-wife team who share a strong belief in the Slow Food movement. Having trained with Italy\'s master pasta makers, Aldo and Serena lead the kitchen with centuries-old pasta making techniques and recipes hailing from distinct Italian regions including Sicily, Campania and Puglia.'
  p3.textContent = 'Here you’ll discover authentic fresh pastas and sauces crafted in-house using local, organic and seasonal ingredients as well as pasture-raised eggs. From ravioli to tagliatelle and lasagna, every pasta is personalized with your choice of sauce, like Bolognese and Ligurian pesto. Plus, enjoy daily and weekly specials and savor the fact that several of our dishes cater to dairy-free, vegetarian and vegan diets.'

  container.appendChild(heading1);
  container.appendChild(p1);
  container.appendChild(heading2);
  container.appendChild(p2);
  container.appendChild(heading3);
  container.appendChild(p3);

  return container;
}