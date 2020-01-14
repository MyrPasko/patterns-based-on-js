console.log('----------Builder----------');

class Car {
  constructor() {
    this.autopilot = false;
    this.parktronic = false;
    this.signaling = false;
  }
}

class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  addAutoPilot(autopilot) {
    this.car.autopilot = autopilot;
    return this;
  }

  addParktronic(parktronic) {
    this.car.parktronic = parktronic;
    return this;
  }

  addSignaling(signaling) {
    this.car.signaling = signaling;
    return this;
  }

  updateEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  build() {
    return this.car;
  }
}

const car1 = new CarBuilder();
const car2 = new CarBuilder()
  .addAutoPilot(true)
  .addSignaling(true);
const car3 = new CarBuilder()
  .addParktronic(true)
  .updateEngine('W12');

console.log('[Car1]', car1);
console.log('[Car2]', car2);
console.log('[Car3]', car3);
