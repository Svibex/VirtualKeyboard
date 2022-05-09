import {keys} from './keys.js'

let lang = localStorage.getItem('lang') || 'rus';
const caseCodes = ["ShiftLeft", "ShiftRight", "CapsLock"];
const langCodes = ["ControlLeft", "AltLeft"];
let capsLock = 'lowerCase';
let pressed = new Set();
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
document.querySelector('h3').innerHTML = 'Для переключения языка комбинация: левыe Ctrl + Alt';

function changeLanguage() {
    lang === 'rus' ? lang = 'eng' : lang = 'rus'
    localStorage.setItem('lang', lang)
    const nodeList = document.querySelectorAll(".rus, .eng")
    for(let node of nodeList) {
      node.classList.toggle('hidden')
    }
}

function changeCase(keyCode) {
    const nodeList = document.querySelectorAll(".upperCase, .lowerCase")
    capsLock === 'lowerCase' ? capsLock = 'upperCase' : capsLock = 'lowerCase'
    if (keyCode === 'CapsLock') {
        for(let node of nodeList) {
            const char = node.innerText.charCodeAt(0);
            if ((char > 64 && char < 91) || (char > 96 && char < 123) || (char > 1039 && char < 1104)) {
                node.classList.toggle('hidden')
            }
        }
    }

    if (keyCode === 'ShiftLeft' || keyCode === 'ShiftRight') {
        for(let node of nodeList) {
            node.classList.toggle('hidden')
        }
    }
}

function addClassForKeys(element) {
    let currentKey = element.attributes[1].value
    if (currentKey === 'Tab' || currentKey === 'Enter' || currentKey === 'Delete' ||
    currentKey === 'ControlLeft' ||  currentKey === 'ControlRight') {
        element.classList.add('keyWidthShort')
    }
    if (currentKey === 'ShiftLeft' || currentKey === 'ShiftRight' ||
    currentKey === 'Backspace' || currentKey === 'CapsLock') {
        element.classList.add('keyWidthMiddle')
    }
    if (currentKey === 'Space') {
        element.classList.add('keyWidthLong')
    }
    else {
        element.classList.add('keyWidthCommon')
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
            addClassForKeys(key)
            row.appendChild(key)
        }
        keyboard.appendChild(row)
    }

textArea.addEventListener('input', e => {
    e.preventDefault()
    value = e.target.value
});

const keyNodeList = document.querySelectorAll('.key');
let onInput = () => textArea.value = value

function onMouseUp(e) {
    let keyCode = e.currentTarget.attributes[1].value;
    handleKeyAndMouseUpEvents(keyCode)
}
function onMouseDown(e) {
    let keyCode = e.currentTarget.attributes[1].value
    handleKeyAndMouseDownEvents(keyCode)
}

function handleKeyAndMouseDownEvents(keyCode) {
    textArea.focus();
    if(pressed.has(keyCode) && caseCodes.includes(keyCode)) return

    let keyNode = document.querySelector(`[data=${keyCode}]`);
    console.log(keyNode.innerText.charCodeAt(0));
    pressed.add(keyCode);
    let start = textArea.selectionStart;
    let end = textArea.selectionEnd;
    switch (keyCode) {
        case 'Backspace': {
            if (start === end && start>0) {
                textArea.setRangeText("", start-1, start, "end");
            } else {
                textArea.setRangeText("", start, end, "end");
            }
            value = textArea.value;
            onInput();
            break;
        }
        case 'Tab': {
            value = value + '   ';
            onInput();
            break;
        }
        case 'ShiftLeft':
        case 'ShiftRight':
        case 'CapsLock':
            {
            changeCase(keyCode);
            break;
        }
        case 'Enter': {
            value = value + '\r\n';
            onInput();
            break;
        }
        case 'MetaLeft':
        case 'AltLeft':
        case 'AltRight':
        case 'ControlLeft':
        case 'ControlRight': {
            onInput();
            break;
        }
        case 'Delete': {
            if (start === end) {
                textArea.setRangeText("", start, end + 1, "end");
            } else {
                textArea.setRangeText("", start, end, "end");
                value = textArea.value;
            }
            value = textArea.value;
            onInput();
            break;
        }
        case 'ArrowLeft': {
            if(start>0) {
                textArea.selectionStart = start - 1
                textArea.selectionEnd = start - 1
            }
            break;
        }
        case 'ArrowRight': {
            if(start>0) {
                textArea.selectionStart = start + 1
                textArea.selectionEnd = start + 1
            }
            break;
        }
        case 'ArrowUp': {
            if(start>0) {
                textArea.selectionStart = start - '\n'
                textArea.selectionEnd = start - '\n'
            }
            break;
        }
        default: {
            if(keyNode) {
                textArea.setRangeText(keyNode.innerText, start, end, "end");
                value = textArea.value;
                onInput();
            }
        }
    }
    if (keyNode) keyNode.classList.toggle('active')
    for (let code of langCodes) {
        if (!pressed.has(code)) {
            return;
        }
    }
    changeLanguage();
}

function handleKeyAndMouseUpEvents(keyCode) {
    if (keyCode) pressed.delete(keyCode);
    textArea.focus();
    let capsLockNode = document.querySelector(`[data="CapsLock"]`);
    if (keyCode === 'ShiftRight' || keyCode === 'ShiftLeft') changeCase(keyCode)
    for(let node of keyNodeList) {
        if (node !== capsLockNode && !pressed.has(node.attributes[1].value)) {
            node.classList.remove('active')
        }
    }
}



(function addEventListeners() {
    document.addEventListener('keydown', function(e) {
        e.preventDefault()
        handleKeyAndMouseDownEvents(e.code)
    })
    document.addEventListener('keyup', function(e) {
        handleKeyAndMouseUpEvents(e.code)
    });
})()

