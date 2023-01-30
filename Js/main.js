//Capturamos elementos del DOM  que seria los numeros y la pantalla de la calculadora
const keypadButtons = document.getElementsByClassName('keypad-button'); 
const display = document.querySelector('.calculator-display'); 



//Transformamos la coleccion html a un array para despues iterarlo.
const keypadButtonsArray = Array.from(keypadButtons);

//Recorremos el array de los botones y le agregamos un evento click a cada uno de ellos
keypadButtonsArray.forEach( (button) => {
button.addEventListener('click', () => {
    calculadora(button, display);
});
});

//Definimos la funcion calculadora
const calculadora = (button, display)=> {
        switch (button.innerHTML) {
        case 'C':
            borrar(display);
            break;

        case '=':
            calcular(display);
            break;
    
        default:
            actualizar(display, button);
            break;
    }

};


//Definimos las funciones que se van a ejecutar en cada caso
const calcular = (display) => {
    display.innerHTML = eval(display.innerHTML);
};
const actualizar= (display, button)=> {
    
    if(display.innerHTML == 0){
        display.innerHTML = '';
    }

    display.innerHTML += button.innerHTML;
};
const borrar = (display) => {
    if(display.innerHTML != 0) {
        display.innerHTML = 0;
    }
};

