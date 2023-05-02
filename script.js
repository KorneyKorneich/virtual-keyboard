const EnKeys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's',
  'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'ShiftLeft', 'z', 'x', 'c', 'v', 'b', 'n', 'm',
  ',', '.', '/', 'ArrowUp', 'ShiftRight', 'Lang', 'Control', 'AltLeft', 'MetaLeft', ' ', 'MetaRight', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

const RuKeys = [']', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ё', 'Del', 'CapsLock', 'ф', 'ы',
  'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'ShiftLeft', 'я', 'ч', 'с', 'м', 'и', 'т',
  'ь', 'б', 'ю', '/', 'ArrowUp', 'ShiftRight', 'Lang', 'Control', 'Alt', 'Meta', ' ', 'Meta', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
let lang = localStorage.getItem('keyboardLayout') || 'en';
console.log(lang);
let currentKeyboard = '';
if (lang === 'en') currentKeyboard = EnKeys;
else currentKeyboard = RuKeys;
// const currentKeyboard = EnKeys;
console.log(currentKeyboard);
// const currentKeyboard = EnKeys;
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

function saveKeyboardLayout(layout) {
  localStorage.setItem('keyboardLayout', layout);
}

function addKeyboard(current) {
  keyboard.innerHTML = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < current.length; i++) {
    const key = document.createElement('div');
    key.classList.add('key');
    if (current[i] === '\\') {
      key.dataset.key = 'Backslash';
    } else {
      key.dataset.key = current[i];
    }

    const metaKeys = [
      'Backspace', 'Tab', 'CapsLock', 'Enter', 'Lang', 'ArrowRight', 'ArrowUp', 'Control',
      'MetaLeft', 'ArrowLeft', 'ArrowDown', 'MetaRight', 'AltLeft', 'AltRight',
    ];

    if (metaKeys.includes(current[i])) {
      key.classList.add(current[i]);
    }
    key.innerText = current[i];

    switch (current[i]) {
      case '\\':
        key.classList.add('Backslash');
        break;

      case ' ':
        key.classList.add('space');
        key.innerText = 'Space';
        break;

      case 'ShiftLeft':
      case 'ShiftRight':
        key.classList.add(current[i]);
        key.innerText = 'Shift';
        break;

      case 'ArrowUp':
        key.innerText = 'Up';
        break;

      case 'ArrowDown':
        key.innerText = 'Down';
        break;

      case 'ArrowLeft':
        key.innerText = 'Left';
        break;

      case 'ArrowRight':
        key.innerText = 'Right';
        break;

      case 'MetaLeft':
      case 'MetaRight':
        key.innerText = 'Cmd';
        break;

      case 'AltLeft':
      case 'AltRight':
        key.innerText = 'Alt';
        break;
      default:
        break;
    }
    document.querySelector('#keyboard').appendChild(key);
    // if its some meta key add class of this key
  }
}

addKeyboard(currentKeyboard);

function toggleKeyboardLayout() {
  console.log('click');
  console.log(currentKeyboard);
  const newLayout = lang === 'en' ? 'ru' : 'en';
  lang = newLayout;
  saveKeyboardLayout(newLayout);
  console.log(newLayout);
  if (newLayout === 'en') addKeyboard(EnKeys);
  else addKeyboard(RuKeys);
}

const textarea = document.querySelector('.textarea');

function deleteCharacterBefore() {
  let { selectionStart } = textarea;
  const { value } = textarea;
  if (selectionStart === 0) {
    selectionStart = value.length;
  }
  textarea.value = value.slice(0, selectionStart - 1) + value.slice(selectionStart);
  textarea.setSelectionRange(selectionStart - 1, selectionStart - 1);
}

function deleteCharacterAfter() {
  let { selectionStart } = textarea;
  const { value } = textarea;
  if (selectionStart === 0) {
    selectionStart = value.length;
  }
  textarea.value = value.slice(0, selectionStart) + value.slice(selectionStart + 1);
  textarea.setSelectionRange(selectionStart, selectionStart);
}

const handleTab = (event) => {
  event.preventDefault();
  const tab = '   ';
  textarea.value += tab;
};

const handleControl = (event) => {
  const pressedKey = document.querySelector(`.key[data-key="${event.key}"]`);
  pressedKey.classList.add('active');
};

const handleEnter = (event) => {
  const pressedKey = document.querySelector(`.key[data-key="${event.key}"]`);
  pressedKey.classList.add('active');
  textarea.value += '\n ';
};

const handleShift = (event) => {
  const pressedKey = document.querySelector(`.key[data-key="${event.code}"]`);
  pressedKey.classList.add('active');
};

const handleMetaAlt = (event) => {
  const pressedKey = document.querySelector(`.key[data-key="${event.code}"]`);
  pressedKey.classList.add('active');
};

const handleBackspace = (event) => {
  event.preventDefault();
  deleteCharacterBefore();
};

const handleDel = () => {
  deleteCharacterAfter();
};

const handleArrowUp = (event) => {
  event.preventDefault();
  const pressedKey = document.querySelector(`.key[data-key="${event.key}"]`);
  pressedKey.classList.add('active');
  textarea.innerHTML += '&#8593;';
};

const handleArrowRight = (event) => {
  event.preventDefault();
  const pressedKey = document.querySelector(`.key[data-key="${event.key}"]`);
  pressedKey.classList.add('active');
  textarea.innerHTML += '&#8594;';
};

const handleArrowDown = (event) => {
  event.preventDefault();
  const pressedKey = document.querySelector(`.key[data-key="${event.key}"]`);
  pressedKey.classList.add('active');
  textarea.innerHTML += '&#8595;';
};

const handleArrowLeft = (event) => {
  event.preventDefault();
  const pressedKey = document.querySelector(`.key[data-key="${event.key}"]`);
  pressedKey.classList.add('active');
  textarea.innerHTML += '&#8592;';
};

const handleBackslash = (event) => {
  const pressedKey = document.querySelector(`.key[data-key="${event.key}"]`);
  pressedKey.classList.add('active');
  textarea.innerHTML += '\\';
};

const handleDefault = (event) => {
  const pressedKey = document.querySelector(`.key[data-key="${event.key}"]`);
  if (!pressedKey) {
    event.preventDefault();
    console.log(event.key);
    console.log('russian');
    alert('раскладка!');
    textarea.value += '';
  } else {
    pressedKey.classList.add('active');
    textarea.value += event.key;
  }
};

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'Tab':
      handleTab(event);
      break;
    case 'Control':
      handleControl(event);
      break;
    case 'Enter':
      handleEnter(event);
      break;
    case 'Shift':
      handleShift(event);
      break;
    case 'Backspace':
      handleBackspace(event);
      break;
    case 'Del':
      handleDel();
      break;
    case 'ArrowUp':
      handleArrowUp(event);
      break;
    case 'ArrowRight':
      handleArrowRight(event);
      break;
    case 'ArrowDown':
      handleArrowDown(event);
      break;
    case 'ArrowLeft':
      handleArrowLeft(event);
      break;
    case 'Backslash':
      handleBackslash(event);
      break;
    case 'MetaLeft':
    case 'MetaRight':
    case 'AltRight':
    case 'AltLeft':
      handleMetaAlt(event);
      break;
    default:
      handleDefault(event);
      break;
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
    if (!pressedKey) {
      event.preventDefault();
      console.log(event.key);
      console.log('russian');
      alert('раскладка!');
    } else {
      pressedKey.classList.remove('active');
    }
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
    textarea.innerHTML += '&#8593;';
  } else if (clickedKey === 'ArrowRight') {
    textarea.innerHTML += '&#8594;';
  } else if (clickedKey === 'ArrowDown') {
    textarea.innerHTML += '&#8595;';
  } else if (clickedKey === 'ArrowLeft') {
    textarea.innerHTML += '&#8592;';
  } else if (clickedKey === 'Backslash') {
    textarea.value += '\\';
  } else if (clickedKey === 'Control') {
    textarea.value += '';
  } else if (clickedKey === 'ShiftRight' || clickedKey === 'ShiftLeft') {
    textarea.value += '';
  } else if (clickedKey === 'Del') {
    deleteCharacterAfter();
  } else if (clickedKey === 'Backspace') {
    deleteCharacterBefore();
  } else if (clickedKey === 'Lang') {
    toggleKeyboardLayout();
  } else if (clickedKey === 'Backslash' || clickedKey === 'MetaLeft' || clickedKey === 'MetaRight'
  || clickedKey === 'AltRight' || clickedKey === 'AltLeft') {
    textarea.value += '';
  } else {
    textarea.value += clickedKey;
  }
});
