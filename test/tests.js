QUnit.module("Agent#isAlive()");
QUnit.test("is false if has no sugar", function(assert) {
  var agent = new Sugarscape.Agent();
  agent.maxLifetime = 90;
  agent.age = 20;

  agent.currentSugar = 3;
  assert.ok(agent.isAlive(), "with sugar agent is alive");

  agent.currentSugar = 0;
  assert.notOk(agent.isAlive(), "no sugar should kill agent");
});

QUnit.test("Agent#growOlder()", function(assert) {
  var agent = new Sugarscape.Agent();
  agent.age = 20;

  agent.growOlder();
  assert.equal(agent.age, 21, "growOlder makes a year pass by");
});

// metabolizeSugar: function() {
//   this.currentSugar -= this.metabolizationRate
