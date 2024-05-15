const soma = require('./notToBe');

test('Soma', ()=>{
    expect (soma(5,5)).not.toBe(5);
});