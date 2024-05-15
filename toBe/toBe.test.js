const soma = require('./toBe');

test.only('Soma', ()=>{
    expect (soma(5,5)).toBe(10);
});
