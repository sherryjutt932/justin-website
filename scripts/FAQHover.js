const quesCards = document.getElementsByClassName('quesCard');

if(!isMobile()){
    Array.from(quesCards).forEach(card => {
    
        const moveBtn = card.querySelector('#moveBtn');
        card.addEventListener('mousemove', (e) => {
            const boxRect = card.getBoundingClientRect();
            const x = e.clientX - boxRect.left;
            const y = e.clientY - boxRect.top;
        
            const moveX = (x / boxRect.width - 0.5) * 20;
            const moveY = (y / boxRect.height - 0.5) * 20;
        
            console.log(moveX, moveY);
            gsap.to(moveBtn, { xPercent: -(moveX * 6), yPercent: -(moveY * 2), duration: 0.3 });
        });
        
        card.addEventListener('mouseleave', () => {
            console.log("leave");
            gsap.to(moveBtn, { xPercent: 0, yPercent: 0, duration: 0.3 });
        });
        
    });
    
}