//buttons and counter text

//const counter = document.querySelector(counter)
//const increaseBtn = document.querySelector('btn-increase');
//const resetBtn = document.querySelector('btn-reset');
//const decreaseBtn = document.querySelector('btn-decrease');

//increaseBtn.addEventListener('click', function(){})
class DonutMaker {
    constructor() {
        this.donutCount = 0;
        this.autoClickerCount = 0;
        this.autoClickerCost = 100;
    }

    addDonut() {
        this.donutCount += 1;
    }

    getDonutCount() {
        return this.donutCount;
    }
}
    
    const donutMaker = new DonutMaker();

const donutButton = document.getElementById('btn-increase');
const donutCountDisplay = document.getElementById('counter');


donutButton.addEventListener('click', () => {
    donutMaker.addDonut();
    donutCountDisplay.textContent = donutMaker.getDonutCount();
    checkDonutsForAutoClicker();
});