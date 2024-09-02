// Select all links with hashes for smooth scrolling
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
})

//for Project section

$('.carousel .carousel-item').each(function () {
    var minPerSlide = 4;
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form);

        fetch('https://script.google.com/macros/s/AKfycbxgsszxqOc9iC-XNq-_RKtREZAiNAZzri4sLzzud-xZbYdz2MmmWevI6HiowfalOfJB/exec', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    alert('Form submitted successfully');
                    // Redirect to the original page
                    window.location.href = 'index.html';
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});



document.addEventListener('DOMContentLoaded', function () {
    // Array of texts for typing effect
    const texts = ["Web Developer", "Software Developer", "Coder", "Photographer"];
    let currentIndex = 0;
    let currentText = '';
    let charIndex = 0;

    // The element where typing effect is applied
    const typingElement = document.getElementById('typing');

    function type() {
        // If the entire text is typed out
        if (charIndex < texts[currentIndex].length) {
            currentText += texts[currentIndex].charAt(charIndex);
            typingElement.textContent = currentText;
            charIndex++;
            setTimeout(type, 200); // Adjust typing speed here
        } else {
            setTimeout(erase, 1000); // Adjust delay before erasing here
        }
    }

    function erase() {
        if (charIndex > 0) {
            currentText = currentText.slice(0, -1);
            typingElement.textContent = currentText;
            charIndex--;
            setTimeout(erase, 100); // Adjust erasing speed here
        } else {
            // Move to the next text in the array
            currentIndex = (currentIndex + 1) % texts.length;
            setTimeout(type, 500); // Adjust delay before typing new text here
        }
    }

    // Start the typing effect
    type();
});

