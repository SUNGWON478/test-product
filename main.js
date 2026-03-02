
document.addEventListener('DOMContentLoaded', () => {
    const funFactButton = document.getElementById('fun-fact-button');
    const funFactDisplay = document.getElementById('fun-fact-display');

    const funFacts = [
        "Guinea pigs can sleep with their eyes open!",
        "The oldest recorded guinea pig lived to be 14 years and 10.5 months old.",
        "Guinea pigs are originally from the Andes mountains in South America.",
        "A group of guinea pigs is called a 'muddle'.",
        "They have four toes on their front feet and three on their back feet."
    ];

    funFactButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * funFacts.length);
        funFactDisplay.textContent = funFacts[randomIndex];
    });
});
