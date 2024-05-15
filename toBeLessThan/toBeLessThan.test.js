const compara = require('./toBeLessThan');

test('Testando valores', ()=>{
    expect(compara(100, 200)).toBeLessThan(500);
});