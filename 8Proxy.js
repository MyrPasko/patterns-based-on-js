console.warn('----------Proxy----------');

class CarOpening {
  open() {
    console.log('[Opening car door]');
  }

  close() {
    console.log('[Close car door]');
  }
}

class SecuritySystem {
  constructor(door) {
    this.door = door;
  }

  open(password) {
    if (this.authenticate(password)) {
      this.door.open();
    } else {
      console.log('[Access denied!!]');
    }
  }

  authenticate(password) {
    return password === 'Ilon';
  }

  close() {
    this.door.close();
  }
}

const car = new SecuritySystem(new CarOpening());

car.open('Jack');
car.open('Ilon');
