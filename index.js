var keyCodeMap = {
    whitespace: {
        9: 'tab', 13: 'enter', 32: 'space'
    },
    fn: {
        112: "f1 ", 113: "f2 ", 114: "f3 ", 115: "f4 ", 116: "f5 ", 117: "f6 ", 118: "f7 ", 119: "f8 ", 120: "f9 ", 121: "f10", 122: "f11", 123: "f12"
    },
    letter: {
        65: "A", 66: "B", 67: "C", 68: "D", 69: "E", 70: "F", 71: "G", 72: "H", 73: "I", 74: "J", 75: "K", 76: "L", 77: "M", 78: "N", 79: "O", 80: "P", 81: "Q", 82: "R", 83: "S", 84: "T", 85: "U", 86: "V", 87: "W", 88: "X", 89: "Y", 90: "Z"
    },
    number: {
        48: "0", 49: "1", 50: "2", 51: "3", 52: "4", 53: "5", 54: "6", 55: "7", 56: "8", 57: "9"
    }, 
    navigation: {
        37: "left arrow ", 38: "up arrow ", 39: "right arrow", 40: "down arrow "
    },
    symbol: {
        110: "decimal point", 186: "semi-colon", 187: "equal sign ", 188: "comma", 189: "dash ", 190: "period ", 191: "forward slash", 192: "grave accent", 219: "open bracket ", 220: "back slash ", 221: "close bracket ", 222: "single quote ",
    },
    smallNumberKey: {
        96: "numpad 0 ", 97: "numpad 1 ", 98: "numpad 2 ", 99: "numpad 3 ", 100: "numpad 4 ", 101: "numpad 5 ", 102: "numpad 6 ", 103: "numpad 7 ", 104: "numpad 8 ", 105: "numpad 9 "
    },
    modifierKey : {
        16: "shift", 17: "ctrl ", 18: "alt", 20: "caps lock",
    },
    escKey: {
        8: "backspace / delete", 46: "delete", 27: "escape",
    },
    homeKey: {
        91: "Windows Key / Left command", 92: "right window key ", 93: "Windows Menu"
    },
    computeKey : {
        106: "multiply ", 107: "add", 109: "subtract ", 111: "divide ",
    }
};

function getTypeAndChar (keyCode) {
    keyCode = '' + keyCode; 
    var type;
    var character;
    for (var index in keyCodeMap) {
        type = index;
        for (var i in keyCodeMap[index]) {
            if (i === keyCode) {
                character = keyCodeMap[index][i] ;
                return {
                    type: type,
                    character: character
                }
            }
        }
    }
    return null
}
var obj = getTypeAndChar('16');
console.log(obj);