/* ЗАДАНИЕ С ФУНКЦИЕЙ-КОНСТРУКТОРОМ */

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

/* ЗАДАНИЕ С КЛАССАМИ */

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
