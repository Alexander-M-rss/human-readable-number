module.exports = function toReadable (number) {
    let result = '';
    let mod = number % 100;
    
    if (number === 0)
        return 'zero';
    if (mod > 9 && mod < 20)
        switch (mod) {
            case 10:
                result = 'ten';
                break;
            case 11: 
                result = 'eleven';
                break;
            case 12:
                result = 'twelve';
                break;
            case 13:
                result = 'thirteen';
                break;
            case 14:
                result = 'fourteen';
                break;
            case 15:
                result = 'fifteen';
                break;
            case 16:
                result = 'sixteen';
                break;
            case 17:
                result = 'seventeen';
                break;
            case 18:
                result = 'eighteen';
                break;
            case 19:
                result = 'nineteen';
        }
    else  {
        mod = mod % 10;
        switch (mod) {
            case 1:
                result = 'one';
                break;
            case 2:
                result = 'two';
                break;
            case 3:
                result = 'three';
                break;
            case 4:
                result = 'four';
                break;
            case 5:
                result = 'five';
                break;
            case 6:
                result = 'six';
                break;
            case 7:
                result = 'seven';
                break;
            case 8:
                result = 'eight';
                break;
            case 9:
                result = 'nine';
                break;
        }
        mod = number % 10;
        mod = (number - mod) % 100;
        switch (mod) {
            case 20:
                result = 'twenty ' + result;
                break;
            case 30:
                result = 'thirty ' + result;
                break;
            case 40:
                result = 'forty '  + result;
                break;
            case 50:
                result = 'fifty '  + result;
                break;
            case 60:
                result = 'sixty '  + result;
                break;
            case 70:
                result = 'seventy '  + result;
                break;
            case 80:
                result = 'eighty '  + result;
                break;
            case 90:
                result = 'ninety '  + result;
        }
    }
    mod = number % 100;
    mod = (number - mod) % 1000;
    switch (mod) {
        case 100:
            result = 'one hundred ' + result;
            break;
        case 200:
            result = 'two hundred ' + result;
            break;
        case 300:
            result = 'three hundred ' + result;
            break;
        case 400:
            result = 'four hundred ' + result;
            break;
        case 500:
            result = 'five hundred ' + result;
            break;
        case 600:
            result = 'six hundred ' + result;
            break;
        case 700:
            result = 'seven hundred ' + result;
            break;
        case 800:
            result = 'eight hundred ' + result;
            break;
        case 900:
            result = 'nine hundred ' + result;
    }
    return result.trimEnd();
}
