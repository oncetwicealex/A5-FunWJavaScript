function makeBigger(){
    const textArea = document.getElementById("text-input");
    textArea.style.fontSize = "24pt";

}

//applies or remoces fancy styles based on selected radio button
function applyFancy() {
    console.log("applyFancy() called");
    const textArea = document.getElementById("text-input");

    if (document.getElementById("fancy-shmancy").checked) {
        // Fancy styles
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    
      } else if (document.getElementById("boring-betty").checked) {
        // Reset styles
        textArea.style.fontWeight = "normal";
        textArea.style.color = "initial";
        textArea.style.textDecoration = "none";
    
      } else if (document.getElementById("moo").checked) {
        let text = textArea.value;
        let sentences = text.split(".");
        sentences = sentences.map(s => {
            let trimmed = s.trim();
            if(!trimmed) return "";

            let words = trimmed.split(" ");
            words[words.length - 1] += "-Moo";

            return words.join(" ");
        });

        let output = sentences.filter(s => s).join(". ");
        if (text.trim().endsWith(".")) {
            output += ".";
          }

        // Uppercase
        textArea.value = output;
        textArea.value = textArea.value.toUpperCase();
      }
    }




