// Scroll to Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = "↑ Top";
scrollToTopButton.style.position = "fixed";
scrollToTopButton.style.bottom = "20px";
scrollToTopButton.style.right = "20px";
scrollToTopButton.style.display = "none";
scrollToTopButton.style.padding = "10px 15px";
scrollToTopButton.style.backgroundColor = "#1abc9c";
scrollToTopButton.style.color = "white";
scrollToTopButton.style.border = "none";
scrollToTopButton.style.borderRadius = "5px";
scrollToTopButton.style.cursor = "pointer";
document.body.appendChild(scrollToTopButton);

// Show button on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

// Scroll to top on button click
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Dynamic Year in Footer
const footer = document.querySelector('.footer');
const yearSpan = document.createElement('span');
yearSpan.textContent = new Date().getFullYear();
footer.appendChild(document.createTextNode(' © '));
footer.appendChild(yearSpan);

// Greeting Message Based on Time
const greetingElement = document.createElement('h4');
const currentHour = new Date().getHours();
let greetingMessage;

if (currentHour < 12) {
    greetingMessage = "Good Morning!";
} else if (currentHour < 18) {
    greetingMessage = "Good Afternoon!";
} else {
    greetingMessage = "Good Evening!";
}

greetingElement.textContent = greetingMessage;
const header = document.querySelector('.header');
header.appendChild(greetingElement);

// Select all text-containing elements across the document
const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');

// Loop through each selected element
textElements.forEach(element => {
    // Add mouseover event listener
    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = "#FFA07A"; // Highlight with a salmon color
        element.style.transition = "background-color 0.3s ease"; // Smooth transition
    });

    // Add mouseout event listener
    element.addEventListener('mouseout', () => {
        element.style.backgroundColor = "transparent"; // Reset background color
    });
});

const images = document.querySelectorAll('.project-section img');
const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = `
    <div class="modal-content">
        <span class="close">&times;</span>
        <img src="" alt="Project Image">
        <p id="project-details"></p>
    </div>
`;
document.body.appendChild(modal);

images.forEach(image => {
    image.addEventListener('click', () => {
        const modalImg = modal.querySelector('img');
        modalImg.src = image.src;
        modal.style.display = 'block';
    });
});

modal.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none';
});
