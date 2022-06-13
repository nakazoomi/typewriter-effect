// TYPEWRITER FX

// Execute JS Code when all DOM Content is loaded 
document.addEventListener('DOMContentLoaded',function(event){
    // Array with texts to type in typewriter
    var dataText = ["Computer Graphics", 
                    "Wordpress Websites", 
                    "HTML/CSS/JavaScript", 
                    "eCommerce-Shops"];
    
    // Keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // Check if text isn't finished yet
      if (i < (text.length)) {
        // Add next character to .typewriter-fx
       document.querySelector(".typewriter-fx").innerHTML = text.substring(0, i+1);
  
        // Wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // Text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // Call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // Start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 5000);
       }
       // Check if dataText[i] exists
      if (i < dataText[i].length) {
        // Text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // After callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // Start the text animation
    StartTextAnimation(0);
  });