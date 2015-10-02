describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("Temperature", function() {
    it("should have a default of 20", function() {
      expect(thermostat.temp).toBe(20)
    });

    it("should have a minimum of 10", function() {
      expect(thermostat.minTemp).toBe(10)
    });

    it("should have power saver mode on automatically", function() {
      expect(thermostat.powerSaver).toEqual(true)
    });

    it("can be increased by one", function() {
      thermostat.turnUpTemp();
      expect(thermostat.temp).toBe(21)
    });

    it("can be decreased by one", function() {
      thermostat.turnDownTemp();
      expect(thermostat.temp).toBe(19)
    });

    it("cannot be increased by one if max reached", function() {
      for(var i=0; i <= 4; i++) {
        thermostat.turnUpTemp();
      }
      expect(function(){thermostat.turnUpTemp();}).toThrowError("Max Temp Reached");
    });

    it("cannot be decreased by one if min reached", function() {
      for(var i=0; i <= 9; i++) {
        thermostat.turnDownTemp();
      }
      expect(function(){thermostat.turnDownTemp();}).toThrowError("Min Temp Reached");
    });

    it("can be reset", function() {
      thermostat.turnDownTemp();
      thermostat.resetTemp();
      expect(thermostat.temp).toBe(20)
    });
  });

  describe("Power Saver Mode", function() {
    it("can be switched off", function() {
      thermostat.powerSaverToggle();
      expect(thermostat.powerSaver).toEqual(false)
    });

    it("power saver mode can be switched back on", function() {
      thermostat.powerSaverToggle();
      thermostat.powerSaverToggle();
      expect(thermostat.powerSaver).toEqual(true)
    });

    it("should have max temp of 25 when on", function() {
      expect(thermostat.maxTemp).toBe(25)
    });

    it("should have a max temp of 32 when off", function() {
      thermostat.powerSaverToggle();
      expect(thermostat.maxTemp).toBe(32)
    });
  });

  describe("Energy Rating Colour", function() {
    it("should be Green when temp is less than 20", function() {
      for(var i=0; i <= 5; i++) {
        thermostat.turnDownTemp();
      }
      thermostat.checkEnergyRate();
      expect(thermostat.energyRateColour).toBe("olivedrab")
    });

    it("should be Yellow when temp is less than 26", function() {
      expect(thermostat.energyRateColour).toBe("gold")
    });

    it("should be Red when temp is more than 25", function() {
      thermostat.powerSaverToggle();
      for(var i=0; i <= 6; i++) {
        thermostat.turnUpTemp();
      }
      thermostat.checkEnergyRate();
      expect(thermostat.energyRateColour).toBe("orangered")
    });
  });
});
