const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - 50 && scrollY < (sectionTop + sectionHeight - 50)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// const sections = document.querySelectorAll('section');
// const navLinks = document.querySelectorAll('nav a');

// window.addEventListener('scroll', () => {
//   let current = '';

//   sections.forEach(section => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeight;

//     if (scrollY >= sectionTop - 50 && scrollY < sectionTop + sectionHeight - 50) {
//       current = section.getAttribute('id');
//     }
//   });

//   navLinks.forEach(link => {
//     link.classList.remove('active');
//     if (link.getAttribute('href') === `#${current}`) {
//       link.classList.add('active');
//     }
//   });
// });







const navbar = document.getElementById('menuitems');
console.log(navbar)
window.addEventListener('scroll', () => {
  const sticky = navbar.offsetTop;
console.log(sticky)
  if (window.scrollY >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("menuitems");
  const stickyOffset = navbar.offsetTop;
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition >= stickyOffset) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("menuitems");
  const stickyOffset = navbar.offsetTop;
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > stickyOffset) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// Function to handle sticky navigation bar


// window.addEventListener("scroll", function() {
//   const navbar = document.getElementById("menuitems");
//   const stickyOffset = 548; // Replace with dynamic calculation if needed
//   const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

//   if (scrollPosition >= stickyOffset) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// });
// 








