const dynamicText = document.querySelector("h1 span");
const words = ["Desenvolvedor Fullstack", "Analista de Dados", "Product Owner"];

// Variáveis para rastrear a posição e deletar status da palavra
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length){
        // Se a condição é verdadeira, escreva o próximo caractere
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0){
        // Se a condição é verdadeira, remova o caractere anterior
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();