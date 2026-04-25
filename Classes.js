class Car {
 constructor(name, year) {
    this.name = name;
    this.year = year;
  }

    age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar1 = new Car("Tata", 2014);
console.log("My Car 1:", myCar1);
console.log("My Car 1 age:", myCar1.age());


class ElectricCar extends Car {
  constructor(name, year, batteryCapacity) {
    super(name, year);
    this.batteryCapacity = batteryCapacity;
  }
  
  carDetails() {
    return "Car Name " + this.name + " and Year " + this.year + " and Battery Capacity " 
    + this.batteryCapacity;
  }

   static hello(x) {
    return "Hello " + x.name;
  }
}

const myElectricCar = new ElectricCar("Mahindra", 2020, 100);
console.log("My Electric Car:", myElectricCar);
console.log("My Electric Car age:", myElectricCar.age());
console.log("My Electric Car battery capacity:", myElectricCar.batteryCapacity);
console.log("Electric Car Details:", myElectricCar.carDetails());
console.log("Static Method Call:", ElectricCar.hello(myElectricCar));


// multiple inheritance using mixins
const CanFly = {
  fly() {
    return this.name + " can fly!";
  }
};

const CanSwim = {
  swim() {
    return this.name + " can swim!";
  }
};

class AmphibiousVehicle extends Car {
  constructor(name, year) {
    super(name, year);
  } 
}
Object.assign(AmphibiousVehicle.prototype, CanFly, CanSwim);

const myAmphibiousVehicle = new AmphibiousVehicle("AmphiCar", 1961);
console.log("My Amphibious Vehicle:", myAmphibiousVehicle);
console.log("My Amphibious Vehicle age:", myAmphibiousVehicle.age());
console.log("Amphibious Vehicle Fly:", myAmphibiousVehicle.fly());
console.log("Amphibious Vehicle Swim:", myAmphibiousVehicle.swim());
