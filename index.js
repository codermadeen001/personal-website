// scripts.js
$(document).ready(function() {
   // var text = "WELCOME TO MY PERSONAL WEBSITE";
   var text = "HI, IT`S SYEUNDA, WELCOME! ";
    var typingText = $('.typing-text');
    var typingSpeed = 150; // Speed of typing in milliseconds
    var delay = 15000; // 2 minutes delay in milliseconds

    function typeText() {
        typingText.text(''); // Clear the text
        var index = 0;

        function type() {
            if (index < text.length) {
                typingText.append(text.charAt(index));
                index++;
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(typeText, delay);
            }
        }

        type();
    }

    typeText();
});
