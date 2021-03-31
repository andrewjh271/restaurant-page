export default function() {
  const container = document.createElement('div');
  container.classList.add('homepage-container');

  const heading = document.createElement('h1');
  heading.textContent = 'Monzú Fresh Pasta'

  const tagline = document.createElement('h4');
  tagline.textContent = 'Made from scratch in San Diego';

  container.appendChild(heading);
  container.appendChild(tagline);

  return container;
}