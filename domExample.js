

const button = document.getElementById('changeText');
const text = document.getElementById('text');

button.addEventListener('click', function() {
    text.innerHTML = '<strong>Hello</strong> World!';
})

/**
 * document.getElementById("example").innerHTML = "<strong>Hello</strong> World!";
 * Output: Hello World! (in bold)
 *
 * document.getElementById("example").innerText = "Hello World!";
 * Output: Hello World!
 *
 * document.getElementById("example").textContent = "Hello World!";
 * Output: Hello World!
 * 
 * Key Differences:
 * HTML Parsing: innerHTML can interpret and set HTML content, whereas innerText and textContent only deal with text.
 * CSS Styling: innerText respects CSS styles and excludes hidden text, while textContent includes all text regardless of styling.
 * Performance: textContent is typically faster than innerText because it doesn't consider CSS styles.
 */