/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
const EnKeys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's',
  'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'ShiftLeft', 'z', 'x', 'c', 'v', 'b', 'n', 'm',
  ',', '.', '/', 'ArrowUp', 'ShiftRight', 'Lang', 'Control', 'Alt', 'Meta', ' ', 'Meta', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

const RuKeys = [']', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ё', 'Del', 'CapsLock', 'ф', 'ы',
  'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'ShiftLeft', 'я', 'ч', 'с', 'м', 'и', 'т',
  'ь', 'б', 'ю', '/', 'ArrowUp', 'ShiftRight', 'lang', 'Control', 'Alt', 'Meta', ' ', 'Meta', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

const currentKeyboard = EnKeys;
// document.onkeydown = function(event){
//     console.log(event.key);
//     EnKeys.push(event.key);
//     console.log(EnKeys);

const basicMarkup = `<div class="typping_space">
        <textarea class="textarea" name="textarea" autofocus cols="30" rows="10"></textarea>
    </div>
    <div id="keyboard">
    </div>`;
document.write(basicMarkup);

function addKeyboard() {
  for (let i = 0; i < currentKeyboard.length; i++) {
    const key = document.createElement('div');
    key.classList.add('key');
    if (currentKeyboard[i] === '\\') {
      key.dataset.key = 'Backslash';
    } else {
      key.dataset.key = currentKeyboard[i];
    }
    if (currentKeyboard[i] === 'Backspace' || currentKeyboard[i] === 'Tab' || currentKeyboard[i] === 'CapsLock'
    || currentKeyboard[i] === 'Enter' || currentKeyboard[i] === 'Shift' || currentKeyboard[i] === 'Lang'
    || currentKeyboard[i] === 'ArrowUp' || currentKeyboard[i] === 'Control' || currentKeyboard[i] === 'Alt'
    || currentKeyboard[i] === 'Meta' || currentKeyboard[i] === 'ArrowLeft' || currentKeyboard[i] === 'ArrowDown'
    || currentKeyboard[i] === 'ArrowRight') {
      key.classList.add(`${currentKeyboard[i]}`);
    }

    key.innerText = currentKeyboard[i];
    if (currentKeyboard[i] === '\\') {
      key.classList.add('Backslash');
    }
    if (currentKeyboard[i] === ' ') {
      key.classList.add('space');
      key.innerText = 'Space';
    }
    if (currentKeyboard[i] === 'ShiftLeft') {
      key.classList.add('ShiftLeft');
      key.innerText = 'Shift';
    }
    if (currentKeyboard[i] === 'ShiftRight') {
      key.classList.add('ShiftRight');
      key.innerText = 'Shift';
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

const textarea = document.querySelector('.textarea');

document.addEventListener('keydown', (event) => {
  textarea.focus();
  // const text = textarea.innerText;

  // eslint-disable-next-line max-len
  // if (event.key === 'Shift' || event.key === 'Meta' || event.key === 'Alt' || event.key === 'Control') {
  //   textarea.innerHTML += '';
  if (event.key === 'Tab') {
    event.preventDefault();
    const tab = '   ';
    textarea.value += tab;
  }
  if (event.key === 'Shift') {
    const pressedKey = document.querySelector(`.key[data-key="${event.code}"]`);
    pressedKey.classList.add('active');
  } else if (event.code === 'Backslash') {
    const pressedKey = document.querySelector(`.key[data-key="${event.code}"]`);
    console.log(pressedKey);
    console.log(event.code);
    console.log(event);
    pressedKey.classList.add('active');
  } else {
    const pressedKey = document.querySelector(`.key[data-key="${event.key}"]`);
    pressedKey.classList.add('active');
  }

  //  else if (event.key === 'Backspace') {

  // }
  //  else {
  //   textarea.innerHTML += event.key;
  // }
});

document.addEventListener('keyup', (event) => {
  if (event.key === 'Shift') {
    const pressedKey = document.querySelector(`.key[data-key="${event.code}"]`);
    pressedKey.classList.remove('active');
  } else if (event.code === 'Backslash') {
    const pressedKey = document.querySelector(`.key[data-key="${event.code}"]`);
    pressedKey.classList.remove('active');
  } else {
    const pressedKey = document.querySelector(`.key[data-key="${event.key}"]`);
    pressedKey.classList.remove('active');
  }
});
