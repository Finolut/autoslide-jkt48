var nav = document.querySelector('nav');
  var bgImg = document.querySelector('.bg-img');
  var memberName = document.querySelector('.member-name');
  var autoSlideInterval;

  function changeBackground(imageName) {
    bgImg.style.animation = 'none'; // Reset animation
    clearInterval(autoSlideInterval);
    
    setTimeout(function () {
      bgImg.style.backgroundImage = 'url(img/' + imageName + '.jpg)';
      bgImg.style.opacity = '1';
      memberName.innerText = imageName.toUpperCase();
      memberName.style.fontSize = '40px';
      memberName.style.fontFamily = 'Circular, a geometric sans-serif'; 
     memberName.style.fontWeight = 'bold'; 
     memberName.style.fontStyle = 'italic'; 

      autoSlideInterval = setInterval(autoSlide, 3000);
    }, 1000);
  }

  function autoSlide() {
    // Implement logic to switch images automatically
    // For now, let's switch between 'feni', 'zee', 'shani', 'marsha'
    var currentImage = bgImg.style.backgroundImage;
    var nextImage;
    switch (currentImage) {
      case 'url("img/feni.jpg")':
        nextImage = 'zee';
        break;
      case 'url("img/zee.jpg")':
        nextImage = 'shani';
        break;
      case 'url("img/shani.jpg")':
        nextImage = 'marsha';
        break;
      case 'url("img/marsha.jpg")':
      default:
        nextImage = 'feni';
        break;
    }
    changeBackground(nextImage);
  }

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
      nav.classList.add('bg-dark', 'shadow');
    } else {
      nav.classList.remove('bg-dark', 'shadow');
    }
  });

  // Start auto-sliding on page load
  autoSlideInterval = setInterval(autoSlide, 3000);