console.warn('----------Prototype----------');

class TeslaCar {
  constructor(model, price, interior, autopilot) {
    this.model = model;
    this.price = price;
    this.interior = interior;
    this.autopilot = autopilot;
  }

  produce() {
    return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
  }
}

const baseCar = new TeslaCar('S', 80000, 'black', false);

const car1 = baseCar.produce();
const car2 = baseCar.produce();
const car3 = baseCar.produce();

car1.interior = 'white';
car1.autopilot = true;

console.log('[Car1]', car1);
console.log('[Car2]', car2);
console.log('[Car3]', car3);
