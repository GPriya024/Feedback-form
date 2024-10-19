const textArea = document.getElementById('msg');
const charCount = document.getElementById('charcount');
const warnMsg = document.getElementById('warnmsg');
const maxChar = 200;

textArea.addEventListener('input', validate);

function validate(){
    const currentLength = textArea.value.length;
    
    // Update character counter
   // charCount.textContent = `${currentLength}/${maxChar} characters`;
    charCount.textContent = currentLength  + "/" + maxChar + " " + "characters";

    // Check if the user exceeds the character limit
    if (currentLength > maxChar) {
        warnMsg.style.display = 'block';  // Show warning message
    } else {
        warnMsg.style.display = 'none';  // Hide warning message
    }
}

