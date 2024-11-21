const words = ["UI Designer", "UX Designer", "Web Designer", "Data engineer", "VDO Editer"];
let index = 0;
let textElement = document.getElementById("dynamicText");

function typeWord() {
    let word = words[index];
    textElement.innerHTML = ""; // Clear previous word

    let i = 0;
    let typingInterval = setInterval(() => {
        textElement.innerHTML += word[i]; // Add one letter at a time
        i++;
        if (i === word.length) {
            clearInterval(typingInterval); // Stop typing once the word is fully typed
            setTimeout(() => {
                index = (index + 1) % words.length; // Cycle through the words array
                typeWord(); // Start typing the next word
            }, 1000); // Wait 1 second before starting the next word
        }
    }, 100); // Speed of typing (100 ms per character)
}

typeWord(); // Start the typing animation

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });