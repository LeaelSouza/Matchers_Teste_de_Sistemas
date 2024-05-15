const compara = require('./toBeLessThanOrEqual');

test.only('Compara', ()=>{
    expect(compara(10)).toBeLessThanOrEqual(50);
});