var btn = document.querySelector('.btnPink');

//btn.addEventListener('click', function () {
//    alert('Funkcja anonimowa');
//})

//btn.addEventListener('click', showAlert);

//function showAlert() {
//   alert('Funkcja nazwana');
//}

function changeBackground() {
    document.body.style.backgroundColor = 'pink';
}

function changeBackgroundBack() {
    document.body.style.backgroundColor = 'white';
}

btn.addEventListener('mouseover', changeBackground);
btn.addEventListener('mouseout', changeBackgroundBack);

function changeSecondHeaderText() {
    var secondHeader = document.querySelector('#secondHeader');
    secondHeader.innerHTML = "Nowy Header H2";
};

var headerH2 = document.querySelector('#secondHeader');
headerH2.addEventListener('click', changeSecondHeaderText);

var image = document.querySelector('img');

// image.addEventListener('load', function () {
//     alert('Obrazek został wczytany');
// });

image.addEventListener('error', function () {
    alert('Niestety obrazek nie został znaleziony na serwerze!');
});

document.addEventListener('keypress', function (event) {
    console.log(event);
});


function addition(number1, number2) {
    return number1 + number2;
};

function multi(number1, number2) {
    return number1 * number2;
}

function calucator2(number1, number2, operator) {
    return operator(number1, number2);
}

function subtraction(number1, number2) {
    return number1 - number2;
};

function division(number1, number2) {
    if (number2 !== 0) {
        return number1 / number2;
    }
    else {
        console.log('Pamiętaj cholero nie dziel prze zero!')
    }
};


function calucator(operator) {
    var first = parseFloat(document.getElementById('number1').value);
    var second = parseFloat(document.getElementById('number2').value);

    var result;

    switch (operator) {
        case '+':
            result = first + second;
            break;
        case '-':
            result = first - second;
            break;
        case 'x':
            result = first * second;
            break;
        case '/':
            result = first / second;
            break;
    }

    document.getElementById('result').value = result;

}

function addToList() {
    var list = document.getElementById("toDoList");
    var textToAdd = document.getElementById("textToAdd").value;
    var newLi = document.createElement("li");

    newLi.appendChild(document.createTextNode(textToAdd));
    newLi.setAttribute("id", textToAdd);

    list.appendChild(newLi);
}

function deleteFromList() {
    var list = document.getElementById("toDoList");
    
    var item = document.getElementById(document.getElementById("textToAdd").value);

    list.removeChild(item);
}

