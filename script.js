var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}



        const slider = document.getElementById('slider');
        const prev = document.getElementById('prev');
        const next = document.getElementById('next');
        let index = 0;

        function showSlide(newIndex) {
            const slides = slider.children.length;
            if (newIndex < 0) {
                index = slides - 1;
            } else if (newIndex >= slides) {
                index = 0;
            } else {
                index = newIndex;
            }
            slider.style.transform = `translateX(-${index * 100}%)`;
        }

        prev.addEventListener('click', () => showSlide(index - 1));
        next.addEventListener('click', () => showSlide(index + 1));

        setInterval(() => showSlide(index + 1), 5000);

        function toggleMenu() {
            const navbar = document.querySelector('.navbar');
            navbar.classList.toggle('show'); // Добавляем/удаляем класс "show" для раскрытия меню
        }




        document.addEventListener("DOMContentLoaded", function () {
            const burgerMenu = document.querySelector(".burger-menu");
            const navbar = document.querySelector(".navbar");
    
            burgerMenu.addEventListener("click", () => {
                navbar.classList.toggle("active");
                burgerMenu.classList.toggle("open");
            });
        });


        document.querySelectorAll(".projcard-description").forEach(function(box) {
            $clamp(box, {clamp: 6});
        });
        

// Переключение состояния выпадающего меню
document.querySelector('.language-toggle').addEventListener('click', function() {
  const languageSelector = document.querySelector('.language-selector');
  languageSelector.classList.toggle('active');
});


document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the default form submission

    // Collect form data
    const formData = new FormData(event.target);

    // Send the form data using fetch API
    fetch('/action_page.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())  // Assuming the server returns a JSON response
    .then(data => {
      console.log('Success:', data);
      alert('Form submitted successfully!');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('There was an error submitting the form.');
    });
  });

        



