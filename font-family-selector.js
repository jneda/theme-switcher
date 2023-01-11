const fontFamilies = [
  'Dancing Script',
  'Nixie One',
  'Courgette',
  'Merriweather'
];

const fontFamilyDrawer = document.querySelector('.font-family-drawer');
const fontFamilySelectorButton = document.querySelector('#font-family-button');

function selectFontFamily() {
  toggleFontFamilySelector();
  fontFamilies.forEach(fontFamily => showCaseFont(fontFamily));
}

function toggleFontFamilySelector() {
  fontFamilyDrawer.innerHTML = null;
  fontFamilyDrawer.classList.toggle('hidden');
}

function showCaseFont(fontFamily) {
  const pElement = document.createElement('p');
  pElement.textContent = 'Bâchez quelques wagons-taxis avec vos pyjamas de fakir';
  pElement.style.fontFamily = fontFamily;
  pElement.setAttribute('name', fontFamily);
  fontFamilyDrawer.appendChild(pElement);

  pElement.addEventListener('click', updateQuoteFont);
}

function updateQuoteFont(event) {
  console.log(event);
  const fontFamily = event.target.getAttribute('name');
  const quoteTextElements = document.querySelectorAll('.quote p, .quote a');
  console.log(quoteTextElements);
  quoteTextElements.forEach(element => element.style.fontFamily = fontFamily);
  toggleFontFamilySelector();
}


fontFamilySelectorButton.addEventListener('click', selectFontFamily);