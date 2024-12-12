

div = document.getElementById('demo');
btn = document.getElementById('btn')

let colors = ['green' , 'blue' , 'yellow' , 'red' , 'blueviolet' ]
let i = 0;

 btn.addEventListener('click' , ()=>{
  div.style.backgroundColor = colors[i];
   i++ ;
  if(i >= colors.length) {
    i = 0
  }
 }
)
// Slider

let sliderImg = document.querySelector('.slider-img')

let ArrayImages = [ '5.jpg', '1.jpg ', '2.jpg' , '3.jpg' , '6.jpg']

let currentImage = 0; 

let nextBtn = document.getElementById('next')

let prevBtn = document.getElementById('prev') 

// next slider
function nextSlide() { 

  if(currentImage >= ArrayImages.length -1) {
    currentImage = -1;
  } 
  currentImage++;  
 
  sliderImg.setAttribute('src' , `images/${ArrayImages[currentImage]}`)
   
} 
nextBtn.addEventListener('click' , nextSlide)


// prevvious slider
function prevSlide() {

    if(currentImage <= 0) {
      currentImage = ArrayImages.length;
    }
    currentImage--;
    sliderImg.setAttribute('src' , `images/${ArrayImages[currentImage]}`)
}
prevBtn.addEventListener('click' , prevSlide);