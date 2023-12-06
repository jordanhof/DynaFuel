    //PRODUCT PAGE
    $(document).ready(function() {
 
      $('.color-choose input').on('click', function() {
        var bottleColor = $(this).attr('data-image');
     
        $('.active-product').removeClass('active-product');
        $('.left-column img[data-image = ' + bottleColor + ']').addClass('active-product');
        $(this).addClass('active-product');
     
        $('.active-description').removeClass('active-description');
        $('.right-column .product-description div[class = ' + bottleColor + ']').addClass('active-description');
        $(this).addClass('active-description');
     
      });
     
     });

  //SCROLL TOP BTN
  let mybutton = document.getElementById("btn-back-to-top");

  // Affichage BTN après scroll down
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  // Scroll Top après Click
  mybutton.addEventListener("click", backToTop);

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }  
//Compte a rebour

const output = document.querySelector(".timer");
const targetDate = new Date("Jan 10, 2024 12:00:00").getTime();
const interval = setInterval(() => {
    const currentDate = new Date().getTime(); // Correction ici
    const distance = targetDate - currentDate;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60) / 1000));
    output.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    if (distance < 0) {
        clearInterval(interval);
        output.innerHTML = "WELCOME!";
        output.style.textTransform = "uppercase";
    }
}, 1000);

function checkDatePlaceholder(input) {
  if (input.value !== "") {
    input.removeAttribute("placeholder");
    input.classList.add("no-placeholder");
  } else {
    input.setAttribute("placeholder", "Date de naissance");
    input.classList.remove("no-placeholder");
  }
}