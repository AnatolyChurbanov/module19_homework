/* ЗАДАНИЕ 1 */

const obj = {
  string: 'string',
  six: 6,
  123: '123',
  obj1: { obj2: 'obj2' },
}

const ownProp = obj => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) console.log(key, obj[key])
  }
}
ownProp(obj)

/* ЗАДАНИЕ 2 */

const object = {
  string: 'string',
  six: 6,
  123: '123',
  obj1: { obj2: 'obj2' },
}

const checkProp = (prop, obj) => {
  if (prop in obj) return true
  else return false
}

console.log(checkProp('string', obj))
console.log(checkProp('str', obj))

/* ЗАДАНИЕ 3 */

const noProto = () => {
  return Object.create(null)
}

console.log(noProto())


/* ЗАДАНИЕ 4 */

  function Device(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
  } 
  
  Device.prototype.plugIn = function() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
  }
  
  Device.prototype.getPowerUsed = function() {
    return this.isPlugged ? this.power : 0;
  }
  
  
  const laptop = new Device('laptop', 1500);
  const hairDryer = new Device('lights', 300);
  const tv = new Device('phone charger', 2000)
  
  console.log(laptop.getPowerUsed() + hairDryer.getPowerUsed() + tv.getPowerUsed());
  
  laptop.plugIn();
  console.log(laptop.getPowerUsed() + hairDryer.getPowerUsed() + tv.getPowerUsed());
  
  hairDryer.plugIn();
  console.log(laptop.getPowerUsed() + hairDryer.getPowerUsed() + tv.getPowerUsed());

  tv.plugIn();
  console.log(laptop.getPowerUsed() + hairDryer.getPowerUsed() + tv.getPowerUsed());

/* ЗАДАНИЕ 5 */

  class Device {
    constructor(name, power){
      this.name = name;
      this.power = power;
      this.isPlugged = false;
    }

    plugIn(){
      console.log(this.name + " is plugged!");
      this.isPlugged = true;
    }

    getPowerUsed(){
      return this.isPlugged ? this.power : 0;
    }
  }

  const computer = new Device('computer', 1200);
  const lights = new Device('lights', 650);
  const phoneCharger = new Device('phone charger', 500)

  console.log(computer.getPowerUsed() + lights.getPowerUsed() + phoneCharger.getPowerUsed());
  
  computer.plugIn();
  console.log(computer.getPowerUsed() + lights.getPowerUsed() + phoneCharger.getPowerUsed());
  
  lights.plugIn();
  console.log(computer.getPowerUsed() + lights.getPowerUsed() + phoneCharger.getPowerUsed());

  phoneCharger.plugIn();
  console.log(computer.getPowerUsed() + lights.getPowerUsed() + phoneCharger.getPowerUsed());
