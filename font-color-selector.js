function toggleColorPicker() {
  colorPickerDrawerElement.classList.toggle('hidden');
}

const colorPickerDrawerElement = document.querySelector('.color-picker-drawer');
const colorPickerInputElement = document.querySelector('#color-picker');
const colorSelectButton = document.querySelector('#font-color-button');

colorSelectButton.addEventListener('click', toggleColorPicker);

colorPickerInputElement.addEventListener('change', (event) => {
  const fontColor = event.target.value;
  console.log(fontColor);
  const quoteElements = document.querySelectorAll('.quote p, .quote a');
  quoteElements.forEach(element => element.style.color = fontColor);
});

colorPickerInputElement.addEventListener('change', (event) => {
  toggleColorPicker();
});