window.addEventListener('scroll', function() {
    if (this.scrollY > 20) {
      document.querySelector('.navbar').classList.add('sticky');
    } else {
      document.querySelector('.navbar').classList.remove('sticky');
    }
  });

  document.querySelector('.menu-btn').addEventListener('click', function() {
    document.querySelector('.navbar .menu').classList.toggle('active');
  });


const video = document.querySelectorAll('.projeto-video');
        for (let i = 0; i < video.length; i++) {
            video[i].addEventListener('mouseenter',
            function(e) {
                video[i].play()
            })
            video[i].addEventListener('mouseout',
            function(e) {
                video[i].pause()
            })
}

 function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 250 * i);
    });
  }

 const elemento = document.querySelector(".text-2");



typeWriter(elemento);

