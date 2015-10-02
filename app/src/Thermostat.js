function Thermostat() {
  this.temp = 20;
  this.minTemp = 10;
  this.maxTemp = 25;
  this.powerSaver = true;
  this.energyRateColour = 'gold';
}

Thermostat.prototype.turnUpTemp = function() {
  if (this.temp >= this.maxTemp) {
    throw new Error("Max Temp Reached");
  }
  this.temp++;
  this.checkEnergyRate();
};

Thermostat.prototype.turnDownTemp = function() {
  if (this.temp <= this.minTemp) {
    throw new Error("Min Temp Reached");
  }
  this.temp--;
  this.checkEnergyRate();
};

Thermostat.prototype.resetTemp = function() {
  this.temp = 20;
  this.checkEnergyRate();
};

Thermostat.prototype.powerSaverToggle = function() {
  if (this.powerSaver === true) {
    this.powerSaver = false;
    this.maxTemp = 32;
  } else {
    this.powerSaver = true;
    this.maxTemp = 25;
    if (this.temp > 25) {
      this.temp = 25;
    }
    this.checkEnergyRate();
  };
};

Thermostat.prototype.checkEnergyRate = function() {
  if (this.temp < 20) {
    this.energyRateColour = 'olivedrab';
  } else if (this.temp < 26) {
    this.energyRateColour = 'gold';
  } else {
    this.energyRateColour = 'orangered';
  }
};
