console.warn('----------Facade----------');

class Conveyor {
  setBody() {
    console.log('[Body set!]');
  }

  setEngine() {
    console.log('[Engine set!]');
  }

  getEngine() {
    console.log('[Dismantle Engine!]');
  }

  setInterior() {
    console.log('[Interior set!]');
  }

  getInterior() {
    console.log('[Interior updated!]');
  }

  setExterior() {
    console.log('[Exterior set!]');
  }

  setWheels() {
    console.log('[Wheels set!]');
  }

  addElectronics() {
    console.log('[Added electronics!]');
  }

  paint() {
    console.log('[Car painted!]');
  }
}

class ConveyorFacade {
  constructor(car) {
    this.car = car;
  }

  assembleCar() {
    this.car.setBody();
    this.car.getEngine();
    this.car.setEngine();
    this.car.setInterior();
    this.car.setExterior();
    this.car.setWheels();
    this.car.addElectronics();
    this.car.paint();
  }

  changeEngine() {
    this.car.getEngine();
    this.car.setEngine();
  }

  changeInterior() {
    this.car.getInterior();
    this.car.setInterior();
  }
}

const conveyor = new ConveyorFacade(new Conveyor());

let car = conveyor.assembleCar();
car = conveyor.changeEngine();
car = conveyor.changeInterior();
