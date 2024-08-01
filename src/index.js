import home from './home';
import about from './about';
import menu from './menu';
import contact from './contact';
import "../sass/style.scss";

const content = document.getElementById('content');
content.appendChild(home());

const tabs = document.querySelectorAll('.tab');

const clearActiveTabs = () => {
  tabs.forEach((tab) => tab.classList.remove('tab-active'));
};

const tabDisplays = { home, about, menu, contact };

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    clearActiveTabs();
    tab.classList.add('tab-active');
    content.firstChild.replaceWith(tabDisplays[tab.name]());
  });
});
