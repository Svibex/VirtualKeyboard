const keys = [
    [{
        rus: {upperCase: 'Ё', lowerCase: 'ё'},
        eng: {upperCase: '~', lowerCase: '`'},
        keyCode: 'Backquote'
    }, {
        rus: {upperCase: '!', lowerCase: '1'},
        eng: {upperCase: '!', lowerCase: '1'},
        keyCode: 'Digit1'
    }, {
        rus: {upperCase: '"', lowerCase: '2'},
        eng: {upperCase: '@', lowerCase: '2'},
        keyCode: 'Digit2'
    }, {
        rus: {upperCase: '№', lowerCase: '3'},
        eng: {upperCase: '#', lowerCase: '3'},
        keyCode: 'Digit3'
    }, {
        rus: {upperCase: ';', lowerCase: '4'},
        eng: {upperCase: '$', lowerCase: '4'},
        keyCode: 'Digit4'
    }, {
        rus: {upperCase: '%', lowerCase: '5'},
        eng: {upperCase: '%', lowerCase: '5'},
        keyCode: 'Digit5'
    }, {
        rus: {upperCase: ':', lowerCase: '6'},
        eng: {upperCase: '^', lowerCase: '6'},
        keyCode: 'Digit6'
    }, {
        rus: {upperCase: '?', lowerCase: '7'},
        eng: {upperCase: '&', lowerCase: '7'},
        keyCode: 'Digit7'
    }, {
        rus: {upperCase: '*', lowerCase: '8'},
        eng: {upperCase: '*', lowerCase: '8'},
        keyCode: 'Digit8'
    }, {
        rus: {upperCase: '(', lowerCase: '9'},
        eng: {upperCase: '(', lowerCase: '9'},
        keyCode: 'Digit9'
    }, {
        rus: {upperCase: ')', lowerCase: '0'},
        eng: {upperCase: ')', lowerCase: '0'},
        keyCode: 'Digit0'
    }, {
        rus: {upperCase: '_', lowerCase: '-'},
        eng: {upperCase: '_', lowerCase: '-'},
        keyCode: 'Minus'
    }, {
        rus: {upperCase: '+', lowerCase: '='},
        eng: {upperCase: '+', lowerCase: '='},
        keyCode: 'Equal'
    }, {
        rus: {upperCase: '← Backspace', lowerCase: '← Backspace'},
        eng: {upperCase: '← Backspace', lowerCase: '← Backspace'},
        keyCode: 'Backspace'
    }], [{
        rus: {upperCase: 'Tab ↹', lowerCase: 'Tab ↹'},
        eng: {upperCase: 'Tab ↹', lowerCase: 'Tab ↹'},
        keyCode: 'Tab'
    }, {
        rus: {upperCase: 'Й', lowerCase: 'й'},
        eng: {upperCase: 'Q', lowerCase: 'q'},
        keyCode: 'KeyQ'
    }, {
        rus: {upperCase: 'Ц', lowerCase: 'ц'},
        eng: {upperCase: 'W', lowerCase: 'w'},
        keyCode: 'KeyW'
    }, {
        rus: {upperCase: 'У', lowerCase: 'у'},
        eng: {upperCase: 'E', lowerCase: 'e'},
        keyCode: 'KeyE'
    }, {
        rus: {upperCase: 'К', lowerCase: 'к'},
        eng: {upperCase: 'R', lowerCase: 'r'},
        keyCode: 'KeyR'
    }, {
        rus: {upperCase: 'Е', lowerCase: 'е'},
        eng: {upperCase: 'T', lowerCase: 't'},
        keyCode: 'KeyT'
    }, {
        rus: {upperCase: 'Н', lowerCase: 'н'},
        eng: {upperCase: 'Y', lowerCase: 'y'},
        keyCode: 'KeyY'
    }, {
        rus: {upperCase: 'Г', lowerCase: 'г'},
        eng: {upperCase: 'U', lowerCase: 'u'},
        keyCode: 'KeyU'
    }, {
        rus: {upperCase: 'Ш', lowerCase: 'ш'},
        eng: {upperCase: 'I', lowerCase: 'i'},
        keyCode: 'KeyI'
    }, {
        rus: {upperCase: 'Щ', lowerCase: 'щ'},
        eng: {upperCase: 'O', lowerCase: 'o'},
        keyCode: 'KeyO'
    }, {
        rus: {upperCase: 'З', lowerCase: 'з'},
        eng: {upperCase: 'P', lowerCase: 'p'},
        keyCode: 'KeyP'
    }, {
        rus: {upperCase: 'Х', lowerCase: 'х'},
        eng: {upperCase: '{', lowerCase: '['},
        keyCode: 'BracketLeft'
    }, {
        rus: {upperCase: 'Ъ', lowerCase: 'ъ'},
        eng: {upperCase: '}', lowerCase: ']'},
        keyCode: 'BracketRight'
    }, {
        rus: {upperCase: '/', lowerCase: '&#92;'},
        eng: {upperCase: '|', lowerCase: '&#92;'},
        keyCode: 'Backslash'
    }, {
        rus: {upperCase: '&#8594; Delete', lowerCase: '&#8594; Delete'},
        eng: {upperCase: '&#8594; Delete', lowerCase: '&#8594; Delete'},
        keyCode: 'Delete'
    },],
    [{
        rus: {upperCase: 'Caps lock', lowerCase: 'Caps lock'},
        eng: {upperCase: 'Caps lock', lowerCase: 'Caps lock'},
        keyCode: 'CapsLock'
    }, {
        rus: {upperCase: 'Ф', lowerCase: 'ф'},
        eng: {upperCase: 'A', lowerCase: 'a'},
        keyCode: 'KeyA'
    }, {
        rus: {upperCase: 'Ы', lowerCase: 'ы'},
        eng: {upperCase: 'S', lowerCase: 's'},
        keyCode: 'KeyS'
    }, {
        rus: {upperCase: 'В', lowerCase: 'в'},
        eng: {upperCase: 'D', lowerCase: 'd'},
        keyCode: 'KeyD'
    }, {
        rus: {upperCase: 'А', lowerCase: 'а'},
        eng: {upperCase: 'F', lowerCase: 'f'},
        keyCode: 'KeyF'
    }, {
        rus: {upperCase: 'П', lowerCase: 'п'},
        eng: {upperCase: 'G', lowerCase: 'g'},
        keyCode: 'KeyG'
    }, {
        rus: {upperCase: 'Р', lowerCase: 'р'},
        eng: {upperCase: 'H', lowerCase: 'h'},
        keyCode: 'KeyH'
    }, {
        rus: {upperCase: 'О', lowerCase: 'о'},
        eng: {upperCase: 'J', lowerCase: 'j'},
        keyCode: 'KeyJ'
    }, {
        rus: {upperCase: 'Л', lowerCase: 'л'},
        eng: {upperCase: 'K', lowerCase: 'k'},
        keyCode: 'KeyK'
    }, {
        rus: {upperCase: 'Д', lowerCase: 'д'},
        eng: {upperCase: 'L', lowerCase: 'l'},
        keyCode: 'KeyL'
    }, {
        rus: {upperCase: 'Ж', lowerCase: 'ж'},
        eng: {upperCase: ':', lowerCase: ';'},
        keyCode: 'Semicolon'
    }, {
        rus: {upperCase: 'Э', lowerCase: 'э'},
        eng: {upperCase: '"', lowerCase: '&apos;'},
        keyCode: 'Quote'
    }, {
        rus: {upperCase: '↵ Enter', lowerCase: '↵ Enter'},
        eng: {upperCase: '↵ Enter', lowerCase: '↵ Enter'},
        keyCode: 'Enter'
    },],
    [{
        rus: {upperCase: '⇑ Shift', lowerCase: '⇑ Shift'},
        eng: {upperCase: '⇑ Shift', lowerCase: '⇑ Shift'},
        keyCode: 'ShiftLeft'
    }, {
        rus: {upperCase: 'Я', lowerCase: 'я'},
        eng: {upperCase: 'Z', lowerCase: 'z'},
        keyCode: 'KeyZ'
    }, {
        rus: {upperCase: 'Ч', lowerCase: 'ч'},
        eng: {upperCase: 'X', lowerCase: 'x'},
        keyCode: 'KeyX'
    }, {
        rus: {upperCase: 'С', lowerCase: 'с'},
        eng: {upperCase: 'C', lowerCase: 'c'},
        keyCode: 'KeyC'
    }, {
        rus: {upperCase: 'М', lowerCase: 'м'},
        eng: {upperCase: 'V', lowerCase: 'v'},
        keyCode: 'KeyV'
    }, {
        rus: {upperCase: 'И', lowerCase: 'и'},
        eng: {upperCase: 'B', lowerCase: 'b'},
        keyCode: 'KeyB'
    }, {
        rus: {upperCase: 'Т', lowerCase: 'т'},
        eng: {upperCase: 'N', lowerCase: 'n'},
        keyCode: 'KeyN'
    }, {
        rus: {upperCase: 'Ь', lowerCase: 'ь'},
        eng: {upperCase: 'M', lowerCase: 'm'},
        keyCode: 'KeyM'
    }, {
        rus: {upperCase: 'Б', lowerCase: 'б'},
        eng: {upperCase: '<', lowerCase: ','},
        keyCode: 'Comma'
    }, {
        rus: {upperCase: 'Ю', lowerCase: 'ю'},
        eng: {upperCase: '>', lowerCase: '.'},
        keyCode: 'Period'
    }, {
        rus: {upperCase: ',', lowerCase: '.'},
        eng: {upperCase: '?', lowerCase: '/'},
        keyCode: 'Slash'
    }, {
        rus: {upperCase: '▲', lowerCase: '▲'},
        eng: {upperCase: '▲', lowerCase: '▲'},
        keyCode: 'ArrowUp'
    }, {
        rus: {upperCase: '⇑ Shift', lowerCase: '⇑ Shift'},
        eng: {upperCase: '⇑ Shift', lowerCase: '⇑ Shift'},
        keyCode: 'ShiftRight'
    },],
    [{
        rus: {upperCase: 'Ctrl', lowerCase: 'Ctrl'},
        eng: {upperCase: 'Ctrl', lowerCase: 'Ctrl'},
        keyCode: 'ControlLeft'
    }, {
        rus: {upperCase: 'Win', lowerCase: 'Win'},
        eng: {upperCase: 'Win', lowerCase: 'Win'},
        keyCode: 'langKey'
    }, {
        rus: {upperCase: 'Alt', lowerCase: 'Alt'},
        eng: {upperCase: 'Alt', lowerCase: 'Alt'},
        keyCode: 'AltLeft'
    }, {
        rus: {upperCase: '&emsp;', lowerCase: '&emsp;'},
        eng: {upperCase: '&emsp;', lowerCase: '&emsp;'},
        keyCode: 'Space'
    }, {
        rus: {upperCase: 'Alt', lowerCase: 'Alt'},
        eng: {upperCase: 'Alt', lowerCase: 'Alt'},
        keyCode: 'AltRight'
    }, {
        rus: {upperCase: '◄', lowerCase: '◄'},
        eng: {upperCase: '◄', lowerCase: '◄'},
        keyCode: 'ArrowLeft'
    }, {
        rus: {upperCase: '▼', lowerCase: '▼'},
        eng: {upperCase: '▼', lowerCase: '▼'},
        keyCode: 'ArrowDown'
    }, {
        rus: {upperCase: '►', lowerCase: '►'},
        eng: {upperCase: '►', lowerCase: '►'},
        keyCode: 'ArrowRight'
    }, {
        rus: {upperCase: 'Ctrl', lowerCase: 'Ctrl'},
        eng: {upperCase: 'Ctrl', lowerCase: 'Ctrl'},
        keyCode: 'ControlRight'
    }],
];

let lang = localStorage.getItem('lang') || 'rus';
let capsLock = 'lowerCase';
let value = ''
const BODY = document.querySelector('body')
const TITLE = document.createElement('h1')
const textArea = document.createElement('textarea')
const keyboard = document.createElement('div')
const DESCRIPTION = document.createElement('h2')
const CHANGELANGUAGE = document.createElement('h3')

BODY.appendChild(TITLE)
document.querySelector('h1').innerHTML = 'RSS Virtual keyboard by Svibex';

BODY.appendChild(textArea)
textArea.classList.add('textarea')

BODY.appendChild(keyboard)
keyboard.classList.add('keyboard')

BODY.appendChild(DESCRIPTION)
document.querySelector('h2').innerHTML = 'Клавиатура создана в операционной системе Windows';

BODY.appendChild(CHANGELANGUAGE)
document.querySelector('h3').innerHTML = 'Для переключения языка комбинация: левыe Alt + Shift';

function changeLanguage() {
    lang === 'rus' ? lang = 'eng' : lang = 'rus'
    localStorage.setItem('lang', lang)
    const nodeList = document.querySelectorAll(".rus, .eng")
    for(let node of nodeList) {
      node.classList.toggle('hidden')
    }
}

function changeCase() {
    capsLock === 'lowerCase' ? capsLock = 'upperCase' : capsLock = 'lowerCase'
    const nodeList = document.querySelectorAll(".upperCase, .lowerCase")
    for(let node of nodeList) {
        node.classList.toggle('hidden')
    }
}

    for (let i=0; i<keys.length; i++) {
        let row = document.createElement('div')
        row.classList.add('row')
        for (let j=0;j<keys[i].length;j++) {
            let key = document.createElement('div')
            key.classList.add('key')
            key.setAttribute('data', keys[i][j].keyCode)
            key.addEventListener('mousedown', onMouseDown)
            key.addEventListener('mouseup', onMouseUp)
            key.innerHTML = `
            <div class="rus ${lang === "rus" ? '' : 'hidden'}">
                <div class="upperCase ${capsLock === "upperCase" ? '' : 'hidden'}">${keys[i][j].rus.upperCase}</div>
                <div class="lowerCase ${capsLock === "lowerCase" ? '' : 'hidden'}">${keys[i][j].rus.lowerCase}</div>
            </div>
            <div class="eng ${lang === "eng" ? '' : 'hidden'}">
                <div class="upperCase ${capsLock === "upperCase" ? '' : 'hidden'}">${keys[i][j].eng.upperCase}</div>
                <div class="lowerCase ${capsLock === "lowerCase" ? '' : 'hidden'}">${keys[i][j].eng.lowerCase}</div>
            </div>
            `
            row.appendChild(key)
        }
        keyboard.appendChild(row)
    }

textArea.addEventListener('input', e => value = e.target.value);
const keyNodeList = document.querySelectorAll('.key');
onInput = () => textArea.value = value;

function onMouseDown(e) {
    if (e.currentTarget.attributes[1].value === 'CapsLock') {
        document.querySelector(`[data=${e.currentTarget.attributes[1].value}]`).classList.toggle('active')
        changeCase()
    }
    else {
    const target = e.currentTarget.attributes[1].value;
    document.querySelector(`[data=${target}]`).classList.add('active')
    value += e.target.innerText;
    onInput();
    }
}

function onMouseUp() {
        for (let key of keyNodeList) {
            if (key.attributes[1].value !== 'CapsLock') {
                key.classList.remove('active')
            }
        }
}

function runOnKeys(func, ...codes) {
    let pressed = new Set();

    document.addEventListener('keydown', function(event) {
        pressed.add(event.code);

        for (let code of codes) {
            if (!pressed.has(code)) {
                return;
            }
        }
        pressed.clear();

        func();
    });

    document.addEventListener('keyup', function(event) {
        pressed.delete(event.code);
    });

}

runOnKeys(
    () =>
        changeLanguage(),
    "ShiftLeft",
    "AltLeft"
);

document.addEventListener('keydown', e => {
    console.log(e.code);
    if (e.code === 'CapsLock') {
        document.querySelector(`[data=${e.code}]`).classList.toggle('active')
        changeCase()
    }
    else {
        document.querySelector(`[data=${e.code}]`).classList.add('active')
        textArea.focus()
    }
})

document.addEventListener('keyup', e => {
    if (e.code === 'CapsLock') {
        return
    }
    else {
        document.querySelector(`[data=${e.code}]`).classList.remove('active')
    }
})

