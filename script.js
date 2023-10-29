function typeText() {
    const textElement = document.getElementById('my-name');
    const textToType = "Ade Hikmat Pauji Ridwan";
    let index = 0;
    let isDeleting = false;

    setInterval(function () {
        if (!isDeleting) {
            if (index < textToType.length) {
                textElement.textContent += textToType.charAt(index);
                index++;
            } else {
                isDeleting = true;
            }
        } else if (index > 0) {
            textElement.textContent = textElement.textContent.slice(0, -1);
            index--;
        } else {
            isDeleting = false;
        }
    }, 250); // Typing speed (adjust as needed)
}
// Ensure the DOM is fully loaded before running your code
document.addEventListener("DOMContentLoaded", function () {
    typeText();
});