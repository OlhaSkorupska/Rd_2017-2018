class Clock {
    constructor() {
        this.hourHand = document.querySelector('.clock__hand--hour.clock__hand');
        this.minuteHand = document.querySelector('.clock__hand--minute.clock__hand');
        this.secondHand = document.querySelector('.clock__hand--second.clock__hand');
        this.timer();

        setInterval(() => this.timer(), 1000);
    }

    timer() {
        this.sethandRotation('clock__hand--hour');
        this.sethandRotation('clock__hand--minute');
        this.sethandRotation('clock__hand--second');
    }

    sethandRotation(hand) {
        let date = new Date();
        let hours;
        let minutes;
        let seconds;
        let percentage;
        let degree;

        switch (hand) {
            case 'clock__hand--hour':
                hours = date.getHours();
                hand = this.hourHand;
                percentage = this.numberToPercentage(hours, 12);
                break;
            case 'clock__hand--minute':
                minutes = date.getMinutes();
                hand = this.minuteHand;
                percentage = this.numberToPercentage(minutes, 60);
                break;
            case 'clock__hand--second':
                seconds = date.getSeconds();
                hand = this.secondHand;
                percentage = this.numberToPercentage(seconds, 60);
                break;
            default:
                break;
        }

        degree = this.percentageToDegree(percentage);
        hand.style.transform = `rotate(${degree}deg) translate(-50%, -50%)`;
    }

    numberToPercentage(number = 0, max = 60) {
        return (number / max) * 100;
    }

    percentageToDegree(percentage = 0) {
        return (percentage * 360) / 100;
    }
}

let clock = new Clock();
