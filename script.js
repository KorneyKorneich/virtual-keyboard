/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
const EnKeys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's',
  'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm',
  ',', '.', '/', 'ArrowUp', 'Shift', 'Lang', 'Control', 'Alt', 'Meta', ' ', 'Meta', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

const RuKeys = [']', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ё', 'Del', 'CapsLock', 'ф', 'ы',
  'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т',
  'ь', 'б', 'ю', '/', 'ArrowUp', 'Shift', 'lang', 'Control', 'Alt', 'Meta', ' ', 'Meta', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

const currentKeyboard = EnKeys;
// document.onkeydown = function(event){
//     console.log(event.key);
//     EnKeys.push(event.key);
//     console.log(EnKeys);

const basicMarkup = `<div class="typping_space">
        <textarea name="textarea" id="" cols="30" rows="10"></textarea>
    </div>
    <div id="keyboard">
    </div>`;
document.write(basicMarkup);
// }
function addKeyboard() {
  for (let i = 0; i < currentKeyboard.length; i++) {
    const key = document.createElement('div');
    key.classList.add('key');
    if (currentKeyboard[i] === 'Backspace' || currentKeyboard[i] === 'Tab' || currentKeyboard[i] === 'CapsLock'
    || currentKeyboard[i] === 'Enter' || currentKeyboard[i] === 'Shift' || currentKeyboard[i] === 'Lang'
    || currentKeyboard[i] === 'ArrowUp' || currentKeyboard[i] === 'Control' || currentKeyboard[i] === 'Alt'
    || currentKeyboard[i] === 'Meta' || currentKeyboard[i] === 'ArrowLeft' || currentKeyboard[i] === 'ArrowDown'
    || currentKeyboard[i] === 'ArrowRight') {
      key.classList.add(`${currentKeyboard[i]}`);
    }

    key.innerText = currentKeyboard[i];
    if (currentKeyboard[i] === ' ') {
      key.classList.add('space');
      key.innerText = 'Space';
    }
    if (currentKeyboard[i] === 'Meta') {
      key.classList.add('Command');
      key.innerText = 'Cmd';
    }
    if (currentKeyboard[i] === 'ArrowUp') {
      key.innerText = 'Up';
    }
    if (currentKeyboard[i] === 'ArrowDown') {
      key.innerText = 'Down';
    }
    if (currentKeyboard[i] === 'ArrowLeft') {
      key.innerText = 'Left';
    }
    if (currentKeyboard[i] === 'ArrowRight') {
      key.innerText = 'Right';
    }
    document.querySelector('#keyboard').appendChild(key);
    // if its some meta key add class of this key
  }
}

addKeyboard();
