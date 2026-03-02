const guineaPig = document.getElementById('guinea-pig');

// 기니피그 소리 목록 (3종류)
const sounds = [
    'https://www.soundjay.com/buttons/button-24.mp3',
    'https://www.soundjay.com/buttons/button-25.mp3',
    'https://www.soundjay.com/buttons/button-20.mp3'
];

guineaPig.addEventListener('click', () => {
    // 랜덤하게 소리 선택
    const randomIdx = Math.floor(Math.random() * sounds.length);
    const wheekSound = new Audio(sounds[randomIdx]);
    
    // 소리 재생
    wheekSound.play();

    // 애니메이션 추가
    guineaPig.classList.remove('bounce');
    void guineaPig.offsetWidth; // 리플로우 강제 (애니메이션 재시작을 위해)
    guineaPig.classList.add('bounce');
    
    // 이모지 튀어나오게 하기
    createEmojiEffect();
});

function createEmojiEffect() {
    const emoji = document.createElement('div');
    emoji.innerText = '🐹';
    emoji.style.position = 'absolute';
    emoji.style.left = (Math.random() * 80 + 10) + '%';
    emoji.style.top = '50%';
    emoji.style.fontSize = '2rem';
    emoji.style.transition = 'all 0.5s ease-out';
    emoji.style.pointerEvents = 'none';
    emoji.style.zIndex = '100';
    
    document.body.appendChild(emoji);
    
    setTimeout(() => {
        emoji.style.top = '30%';
        emoji.style.opacity = '0';
    }, 50);
    
    setTimeout(() => {
        document.body.removeChild(emoji);
    }, 600);
}
