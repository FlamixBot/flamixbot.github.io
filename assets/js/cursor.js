document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.pageX;
        mouseY = e.pageY;
    });

    function animate() {
        const speed = 0.25;
        currentX += (mouseX - currentX) * speed;
        currentY += (mouseY - currentY) * speed;

        cursor.style.left = `${currentX}px`;
        cursor.style.top = `${currentY}px`;

        requestAnimationFrame(animate);
    }

    animate();

    let scaleTimeout;

    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'scale(0.5)';

        clearTimeout(scaleTimeout);
    });

    document.addEventListener('mouseup', () => {
        scaleTimeout = setTimeout(() => {
            cursor.style.transform = 'scale(1)';
        }, 200);
    });
});