console.warn('----------Adapter----------');

class Engine2 {
  simpleInterface() {
    console.log('[Engine 2.0]');
  }
}

class EngineV8 {
  complicatedEngine() {
    console.log('[Engine V8]');
  }
}

class EngineV8Adapter {
  constructor(engine) {
    this.engine = engine;
  }

  simpleInterface() {
    return this.engine.complicatedEngine();
  }
}

const engine2 = new Engine2();
const adaptedEngineV8 = new EngineV8Adapter(new EngineV8());

class Auto {
  constructor(engine) {
    this.engine = engine;
  }

  showEngine() {
    this.engine.simpleInterface();
  }
}

const myAuto1 = new Auto(engine2);
const myAuto2 = new Auto(adaptedEngineV8);

myAuto1.showEngine();
myAuto2.showEngine();
