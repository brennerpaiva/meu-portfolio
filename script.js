window.addEventListener("scroll", function () {
  if (this.scrollY > 20) {
    document.querySelector(".navbar").classList.add("sticky");
  } else {
    document.querySelector(".navbar").classList.remove("sticky");
  }
});

document.querySelector(".menu-btn").addEventListener("click", function () {
  document.querySelector(".navbar .menu").classList.toggle("active");
});

const video = document.querySelectorAll(".projeto-video");
for (let i = 0; i < video.length; i++) {
  video[i].addEventListener("mouseenter", function (e) {
    video[i].play();
  });
  video[i].addEventListener("mouseout", function (e) {
    video[i].pause();
  });
}

function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  textoArray.forEach((letra, i) => {
    setTimeout(() => (elemento.innerHTML += letra), 250 * i);
  });
}

const elemento = document.querySelector(".text-2");

typeWriter(elemento);

document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    // URL do seu currículo
    var url = "CV-Brenner.pdf";

    // Criando um elemento de link temporário
    var link = document.createElement("a");
    link.href = url;
    link.download = "CV-Brenner.pdf"; // Nome do arquivo de download
    link.target = "_blank";

    // Adicionando o link ao documento e clicando nele
    document.body.appendChild(link);
    link.click();

    // Removendo o link do documento
    document.body.removeChild(link);
  });
