console.log('----------Abstract Factory Method----------');

// Abstract factory
function bmvProducer(kind) {
  return kind === 'sport' ? sportCarFactory : homeCarFactory;
}

// Factories
function sportCarFactory() {
  return new Z4();
}

function homeCarFactory() {
  return new I3();
}

class Z4 {
  info() {
    console.log('[Sport Car]');
  }
}

class I3 {
  info() {
    console.log('[Home Car]');
  }
}

const produceCar = bmvProducer('sport');

const myCar = produceCar();

myCar.info();

