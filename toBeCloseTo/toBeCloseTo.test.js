const soma = require('./toBeCloseTo');

test.only('teste', ()=>{
    expect(soma(0.5, 0.6)).toBeCloseTo(1.1);
});