class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  door: boolean;
  constructor(public key: Key) {
    this.door = false;
    this.tenants = [];
  }

  tenants: Person[];
  comeIn(person: Person): void {
    if (this.door) this.tenants.push(person);
  }
  openDoor(key: Key): void {}
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }
  openDoor(key: Key) {
    if (key === this.key) this.door = true;
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
