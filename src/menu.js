export default function() {
  const container = document.createElement('div');
  container.classList.add('section-container', 'menu-container');

  const heading1 = document.createElement('h2');
  heading1.textContent = 'APPETIZERS AND SALADS';

  const plate1 = document.createElement('h3');
  plate1.textContent = 'FIORILLI PLATE | 15';
  const description1 = document.createElement('p');
  description1.textContent = 'Deep fried zucchini blossoms stuffed with cheese and mozzarella, served with a side of zucchini spaghetti, arugula and tomatoes'

  const plate2 = document.createElement('h3');
  plate2.textContent = 'GRILLED SCALLOPS | 14';
  const description2 = document.createElement('p');
  description2.textContent = 'Served over our pesto vinaigrette and toasted focaccia';

  const plate3 = document.createElement('h3');
  plate3.textContent = 'CALAMARI FRITTI | 12';
  const description3 = document.createElement('p');
  description3.textContent = 'Fried calamari served with our marinara sauce'

  const plate4 = document.createElement('h3');
  plate4.textContent = 'CLASSIC BURRATA SALAD | 15';
  const description4 = document.createElement('p');
  description4.textContent = 'Spring mix, burrata cheese, tomatoes, Italian olives, extra virgin olive oil, balsamic galze'

  const heading2 = document.createElement('h2');
  heading2.textContent = 'ITALIAN STYLE FLATBREADS';

  const plate5 = document.createElement('h3');
  plate5.textContent = 'ROSA | 15';
  const description5 = document.createElement('p');
  description5.textContent = 'Red sauce, cherry tomatoes, mozzarella, basil, grated cheese'

  const plate6 = document.createElement('h3');
  plate6.textContent = 'SPICY CALABRIAN SAUSAGE | 16';
  const description6 = document.createElement('p');
  description6.textContent = 'Red sauce, italian sausage, mushroom, Calabrian Nduja, mozzarella, grated cheese';

  const plate7 = document.createElement('h3');
  plate7.textContent = 'TARTUFO | 17';
  const description7 = document.createElement('p');
  description7.textContent = 'Burrata, truffle honey, truffle carpaccio, black pepper'

  const column1 = document.createElement('div');

  column1.appendChild(heading1);
  column1.appendChild(plate1);
  column1.appendChild(description1);
  column1.appendChild(plate2);
  column1.appendChild(description2);
  column1.appendChild(plate2);
  column1.appendChild(description2);
  column1.appendChild(plate3);
  column1.appendChild(description3);
  column1.appendChild(plate4);
  column1.appendChild(description4);

  column1.appendChild(heading2);
  column1.appendChild(plate5);
  column1.appendChild(description5);
  column1.appendChild(plate6);
  column1.appendChild(description6);
  column1.appendChild(plate7);
  column1.appendChild(description7);

  const heading3 = document.createElement('h2');
  heading3.textContent = 'PASTA';

  const plate8 = document.createElement('h3');
  plate8.textContent = 'SPAGHETTI GAMBERI E LIMONE | 20';
  const description8 = document.createElement('p');
  description8.textContent = 'Spaghetti served with a shrimp sauteed in a lemon butter and garlic sauce.';

  const plate9 = document.createElement('h3');
  plate9.textContent = 'PISTACHIO PESTO GNOCCHI | 22';
  const description9 = document.createElement('p');
  description9.textContent = 'Giant asiago-stuffed gnocchi served with a Sicilian Pistachio pesto, burrata flakes and cherry tomato';

  const plate10 = document.createElement('h3');
  plate10.textContent = 'CASARECCE AL POMODORO | 15';
  const description10 = document.createElement('p');
  description10.textContent = 'Red sauce, basil, grated pecorino cheese';

  const plate11 = document.createElement('h3');
  plate11.textContent = 'TAGLIATELLE ALLA BOLOGNESE | 17';
  const description11 = document.createElement('p');
  description11.textContent = 'Tender slow-cooked ground beef and tomato sauce, served with cheese';

  const plate12 = document.createElement('h3');
  plate12.textContent = 'PORCINI E SALSICCIA FUSILLI | 18';
  const description12 = document.createElement('p');
  description12.textContent = 'Imported porcini mushrooms, fennel sausage, cream sauce, pepper and cheese';

  const heading4 = document.createElement('h2');
  heading4.textContent = 'DESSERTS';

  const plate13 = document.createElement('h3');
  plate13.textContent = 'TIRAMISU | 8';

  const plate14 = document.createElement('h3');
  plate14.textContent = 'CANNOLI | 7';

  const plate15 = document.createElement('h3');
  plate15.textContent = 'AMALFI LEMON CAKE | 7';

  const plate16 = document.createElement('h3');
  plate16.textContent = 'ESPRESSO COFFEE | 3.5';

  const column2 = document.createElement('div');

  column2.appendChild(heading3);
  column2.appendChild(plate8);
  column2.appendChild(description8);
  column2.appendChild(plate9);
  column2.appendChild(description9);
  column2.appendChild(plate10);
  column2.appendChild(description10);
  column2.appendChild(plate11);
  column2.appendChild(description11);
  column2.appendChild(plate12);
  column2.appendChild(description12);

  column2.appendChild(heading4);
  column2.appendChild(plate13);
  column2.appendChild(plate14);
  column2.appendChild(plate15);
  column2.appendChild(plate16);
  
  container.appendChild(column1);
  container.appendChild(column2);

  return container;
}