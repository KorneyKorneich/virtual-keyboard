/* eslint-disable no-plusplus */

// import { start } from "repl";

/* eslint-disable no-unused-vars */
const EnKeys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's',
  'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'ShiftLeft', 'z', 'x', 'c', 'v', 'b', 'n', 'm',
  ',', '.', '/', 'ArrowUp', 'ShiftRight', 'Lang', 'Control', 'AltLeft', 'MetaLeft', ' ', 'MetaRight', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

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

const keyboard = document.querySelector('#keyboard');

// Добавьте обработчик события blur на textarea.

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
    || currentKeyboard[i] === 'Enter' || currentKeyboard[i] === 'Lang' || currentKeyboard[i] === 'ArrowRight'
    || currentKeyboard[i] === 'ArrowUp' || currentKeyboard[i] === 'Control' || currentKeyboard[i] === 'MetaLeft'
    || currentKeyboard[i] === 'ArrowLeft' || currentKeyboard[i] === 'ArrowDown' || currentKeyboard[i] === 'MetaRight'
    || currentKeyboard[i] === 'AltLeft' || currentKeyboard[i] === 'AltRight') {
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
    if (currentKeyboard[i] === 'ArrowLeft') {
      key.innerText = 'Left';
    }
    if (currentKeyboard[i] === 'MetaRight' || currentKeyboard[i] === 'MetaLeft') {
      key.innerText = 'Cmd';
    }
    if (currentKeyboard[i] === 'AltRight' || currentKeyboard[i] === 'AltLeft') {
      key.innerText = 'Alt';
    }
    document.querySelector('#keyboard').appendChild(key);
    // if its some meta key add class of this key
  }
}

addKeyboard();
const textarea = document.querySelector('.textarea');

function deleteCharacterBefore() {
  let { selectionStart } = textarea;
  const { value } = textarea;
  console.log(selectionStart);
  if (selectionStart === 0) {
    selectionStart = value.length;
  }
  textarea.value = value.slice(0, selectionStart - 1) + value.slice(selectionStart);
  textarea.setSelectionRange(selectionStart - 1, selectionStart - 1);
}

function deleteCharacterAfter() {
  let { selectionStart } = textarea;
  const { value } = textarea;
  console.log(selectionStart);
  if (selectionStart === 0) {
    selectionStart = value.length;
  }
  textarea.value = value.slice(0, selectionStart) + value.slice(selectionStart + 1);
  textarea.setSelectionRange(selectionStart, selectionStart);
}

document.addEventListener('keydown', (event) => {
  // const text = textarea.innerText;

  // eslint-disable-next-line max-len
  // if (event.key === 'Shift' || event.key === 'Meta' || event.key === 'Alt' || event.key === 'Control') {
  //   textarea.value += '';
  if (event.key !== event.key.data-key = )
  if (event.key === 'Tab') {
    event.preventDefault();
    const tab = '   ';
    textarea.value += tab;
  }
  if (event.key === 'Shift') {
    const pressedKey = document.querySelector(`.key[data-key="${event.code}"]`);
    pressedKey.classList.add('active');
  } else if (event.code === 'Backslash' || event.code === 'MetaLeft' || event.code === 'MetaRight'
  || event.code === 'AltRight' || event.code === 'AltLeft') {
    const pressedKey = document.querySelector(`.key[data-key="${event.code}"]`);
    pressedKey.classList.add('active');
  } else if (event.key === 'Backspace') {
    event.preventDefault();
    deleteCharacterBefore();
    console.log('delete?');
  } else if (event.key === 'Del') {
    deleteCharacterAfter();
    console.log('delete?');
  } else {
    const pressedKey = document.querySelector(`.key[data-key="${event.key}"]`);
    pressedKey.classList.add('active');
    textarea.value += event.key;
  }
});

document.addEventListener('keyup', (event) => {
  if (event.key === 'Shift') {
    const pressedKey = document.querySelector(`.key[data-key="${event.code}"]`);
    pressedKey.classList.remove('active');
  } else if (event.code === 'Backslash' || event.code === 'MetaLeft' || event.code === 'MetaRight'
  || event.code === 'AltRight' || event.code === 'AltLeft') {
    const pressedKey = document.querySelector(`.key[data-key="${event.code}"]`);
    pressedKey.classList.remove('active');
  } else {
    const pressedKey = document.querySelector(`.key[data-key="${event.key}"]`);
    pressedKey.classList.remove('active');
  }
});

keyboard.addEventListener('click', (event) => {
  const clickedKey = event.target.dataset.key;
  if (clickedKey === 'Space') {
    textarea.value += ' ';
  } else if (clickedKey === 'Tab') {
    textarea.value += '   ';
  } else if (clickedKey === 'Enter') {
    textarea.value += '\n';
  } else if (clickedKey === 'ArrowUp') {
    textarea.value += '&#8593;';
  } else if (clickedKey === 'ArrowRight') {
    textarea.value += '&#8594;';
  } else if (clickedKey === 'ArrowDown') {
    textarea.value += '&#8595;';
  } else if (clickedKey === 'ArrowLeft') {
    textarea.value += '&#8592;';
  } else if (clickedKey === 'Backslash') {
    textarea.value += '\\';
  } else if (clickedKey === '') {
    textarea.value += '&#8592;';
  } else if (clickedKey === 'Backspace') {
    console.log('click');
    deleteCharacterAfter();
  } else if (clickedKey === 'Del') {
    deleteCharacterBefore();
  } else {
    textarea.value += clickedKey;
  }
});
