window.addEventListener ('keypress', cambiarColor);

function cambiarColor(e) {
    console.log(e.key);
    const tecla = e.key;
    const color;
    switch(tecla) {
        case 'a':
            color = 'blue';
            break;
        case 'v':
            color = 'green';
            break;
        case 'r':
            color = 'red';
            break;
        
    }
 }