export default function () {
  const container = document.createElement('div');
  container.classList.add('section-container');

  const heading1 = document.createElement('h3');
  const heading2 = document.createElement('h3');
  const heading3 = document.createElement('h3');

  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');

  heading1.textContent = 'Address';
  heading2.textContent = 'Phone';
  heading3.textContent = 'Email';

  p1.innerHTML = '455 10th Avenue <br> San Diego, CA 92101';
  p2.textContent = '619.255.5032';
  p3.textContent = 'info@monzufreshpasta.com';

  container.appendChild(heading1);
  container.appendChild(p1);
  container.appendChild(heading2);
  container.appendChild(p2);
  container.appendChild(heading3);
  container.appendChild(p3);

  return container;
}
