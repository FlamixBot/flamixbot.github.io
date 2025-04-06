document.addEventListener('DOMContentLoaded', () => {
    const days = document.querySelectorAll('.start-countdown .days .timer-value .digit');
    const hours = document.querySelectorAll('.start-countdown .hours .timer-value .digit');
    const minutes = document.querySelectorAll('.start-countdown .minutes .timer-value .digit');
    const seconds = document.querySelectorAll('.start-countdown .seconds .timer-value .digit');

    const countdownDate = new Date('2025-05-01T18:00:00').getTime();

    function updateDigit(element, newValue, index) {
        const previousValue = element.innerText;
        if (parseInt(previousValue) < newValue) {
            element.classList.add('go-up');
            element.classList.remove('go-down');
        } else if (parseInt(previousValue) > newValue) {
            element.classList.add('go-down');
            element.classList.remove('go-up');
        }
        element.innerText = newValue;
    }

    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hoursLeft = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);

        updateDigit(days[0], String(daysLeft).padStart(2, 0)[0], 0);
        updateDigit(days[1], String(daysLeft).padStart(2, 0)[1], 1);

        updateDigit(hours[0], String(hoursLeft).padStart(2, 0)[0], 0);
        updateDigit(hours[1], String(hoursLeft).padStart(2, 0)[1], 1);

        updateDigit(minutes[0], String(minutesLeft).padStart(2, 0)[0], 0);
        updateDigit(minutes[1], String(minutesLeft).padStart(2, 0)[1], 1);

        updateDigit(seconds[0], String(secondsLeft).padStart(2, 0)[0], 0);
        updateDigit(seconds[1], String(secondsLeft).padStart(2, 0)[1], 1);

        if (distance < 0) {
            clearInterval(countdown);
            document.querySelector('.start-countdown').innerHTML = '<h1>Countdown finished!</h1>';
        }
    }, 100);

    const digits = document.querySelectorAll('.start-countdown .digit');
    digits.forEach(digit => {
        digit.addEventListener('animationend', () => {
            digit.classList.remove('go-up', 'go-down');
        });
    });
});