document.addEventListener('DOMContentLoaded', () => {
    // 1. 스크롤 애니메이션 (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // 2. 디데이 계산기
    const weddingDate = new Date('2026-05-23T00:00:00').getTime();
    const daysEl = document.getElementById('days');

    function updateDDay() {
        const now = new Date().getTime();
        const distance = weddingDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        
        if (days >= 0) {
            daysEl.innerText = days;
        } else {
            daysEl.innerText = Math.abs(days);
            document.getElementById('countdown').innerHTML = `결혼한 지 <span>${Math.abs(days)}</span>일 되었습니다 ❤️`;
        }
    }

    updateDDay();
});
