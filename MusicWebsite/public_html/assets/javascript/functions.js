var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  
  colorChange(n);

}

function colorChange(n)
{
  var color;
  if(n != 1)
  {
    document.getElementById("back-parallax").style.overflow = "visible";
  }
  if(n == 2)
  {
    color = '#510061';
  }
  if(n == 3)
  {
    color = '#0a5a94';
  }
  if(n == 4)
  {
    color = '#006117';
  }
  if(n == 5)
  {
    color = '#c38f00';
  }
  if(n == 6)
  {
    color = 'red';
  }
  if(n == 7)
  {
    color = 'black';
  }
  note1.style.fill= color;
  note2.style.fill= color;
  note3.style.fill= color;
  note4.style.fill= color;
  note5.style.fill= color;
  note6.style.fill= color;
  note7.style.fill= color;
  note8.style.fill= color;
  note9.style.fill= color;
  note10.style.fill= color;
  note11.style.fill= color;
  note12.style.fill= color;
  note13.style.fill= color;
  note14.style.fill= color;
  note15.style.fill= color;
  note16.style.fill= color;
  note17.style.fill= color;
  note18.style.fill= color;
  note19.style.fill= color;
  note20.style.fill= color;
  note21.style.fill= color;
  note22.style.fill= color;
  note23.style.fill= color;
  note24.style.fill= color;
  document.getElementById("top").style.background= color;

}

function toTop()
{
    document.getElementById("parallax").scrollTop = document.getElementById("parallax").scrollTop = 0;
}

function scrolled(x)
{

    if(x.scrollTop >= x.offsetHeight)
    {
      document.getElementById("top").style.visibility= 'visible';
    }
    else if(x.scrollTop <= x.offsetHeight)
    {
      document.getElementById("top").style.visibility= 'hidden';
    }
    
}