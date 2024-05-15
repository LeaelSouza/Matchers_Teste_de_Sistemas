const compara = require('./toBeGreaterThan');

test('compara', ()=>{
    expect(compara(50)).toBeGreaterThan(20);
});