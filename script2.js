window.addEventListener('scroll', function() {
    if (this.scrollY > 20) {
      document.querySelector('.navbar').classList.add('sticky');
    } else {
      document.querySelector('.navbar').classList.remove('sticky');
    }
  });

document.querySelector('.menu-btn').addEventListener('click', function() {
    document.querySelector('.navbar .menu').classList.toggle('active');
    document.querySelector('.menu-btn i').classList.toggle('active');
  });

document.querySelector('.menu').addEventListener('click', function() {
    document.querySelector('.navbar .menu').classList.remove('active');
})

// document.addEventListener('DOMContentLoaded', () => {
//     new TypeIt(".animated", {
//         speed: 300,
//         strings: "Yan Pedro"
//     }).go()
// })

document.querySelector('.menu').addEventListener('click', function() {
    window.scrollTo({
      scrollTo: document.querySelector('.skills'),
      behavior: 'smooth'
    });
  });

