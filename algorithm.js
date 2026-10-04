verify = document.getElementById('verify')

verify.addEventListener('click', check)

function check() {
    place = document.getElementById('place').value
    if (place >= 37) {
    result = 'боковое'
    }
    else {
    result = 'купейное'
    }
    if (place % 2 == 0) {
    result = result + ' верхнее'
    }
    else {
    result = result + ' нижнее'
    }
    document.getElementById('result').value = result
}