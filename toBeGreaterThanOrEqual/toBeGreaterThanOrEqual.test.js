const compara = require('./toBeGreaterThanOrEqual');

test('Compara', ()=>{
    expect(compara(100)).toBeGreaterThanOrEqual(80);
});