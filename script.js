let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


document.getElementById('year').textContent = new Date().getFullYear();

function copyCode() {
  // Get the text from the code block
  const code = document.getElementById('code-block').innerText;

  // Create a temporary textarea to copy the code
  const tempTextarea = document.createElement('textarea');
  tempTextarea.value = code;
  document.body.appendChild(tempTextarea);

  // Select the text and copy to clipboard
  tempTextarea.select();
  document.execCommand('copy');

  // Remove the temporary textarea
  document.body.removeChild(tempTextarea);

  // Change the button text to "Copied"
  const button = document.querySelector('.ocean-shell-btn');
  button.value = 'Copied';

  // Optionally, reset the button text after a delay
  setTimeout(() => {
      button.value = 'Copy';
  }, 2000); // 2 seconds
}



function copytagCode() {
  // Get the text from the code block
  const code = document.getElementById('code-tag-block').innerText;

  // Create a temporary textarea to copy the code
  const tempTextarea = document.createElement('textarea');
  tempTextarea.value = code;
  document.body.appendChild(tempTextarea);

  // Select the text and copy to clipboard
  tempTextarea.select();
  document.execCommand('copy');

  // Remove the temporary textarea
  document.body.removeChild(tempTextarea);

  // Change the button text to "Copied"
  const button = document.querySelector('.ocean-shell-code-btn');
  button.value = 'Copied';

  // Optionally, reset the button text after a delay
  setTimeout(() => {
      button.value = 'Copy';
  }, 2000); // 2 seconds
}

















 // Wait until the DOM is fully loaded
 document.addEventListener("DOMContentLoaded", function () {
  // Get all the anchor tags inside the nav list
  const navLinks = document.querySelectorAll(".nav-list a");
  
  // Loop through each link and add a click event listener
  navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();  // Prevent the default anchor behavior
      
      // Get the target href of the clicked link
      const targetPage = link.getAttribute("href");
      
      // Access the parent document's iframe
      const contentFrame = parent.document.getElementById("content-frame");
      
      // Change the src of the iframe to the target page
      if (contentFrame) {
        contentFrame.setAttribute("src", targetPage);
      }
    });
  });
});


