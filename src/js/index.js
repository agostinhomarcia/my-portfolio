function displayAbout() {
    let arrow = document.getElementById('animation');
    arrow.classList.toggle('rotate');
    let display = document.getElementById('about');
    display.classList.toggle('active');
}

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
}
const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo);
