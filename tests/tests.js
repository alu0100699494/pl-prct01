var assert = chai.assert;

suite('temperatura', function(){
  // Probar Fahrenheit -> Celsius
  test('32F = 0C', function(){
    original.value = "32F";
	calculate();
	assert.deepEqual(converted.innerHTML, "0.0 Celsius");
  });
  
  // Probar Celsius -> Fahrenheit
  test('45.2C = 113.4F', function(){
    original.value = "45.2c";
	calculate();
	assert.deepEqual(converted.innerHTML, "113.4 Fahrenheit");
  });
  
  // Probar números flotantes con matinsa
  test('-30.2e-3F = -17.8C', function(){
    original.value = "-30.2e-3F";
	calculate();
	assert.deepEqual(converted.innerHTML, "-17.8 Celsius");
  });
  
  // Probar un error cualquiera
  test('32.Fc = -17.8C', function(){ // 32.F está bien, pero 32.Fc no.
    original.value = "32.Fc";
	calculate();
	assert.match(converted.innerHTML, /ERROR/);
  });
  
});