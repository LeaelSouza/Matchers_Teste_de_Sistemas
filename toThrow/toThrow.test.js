const divide = require('./toThrow');

test.only('Teste de divisão', ()=>{
    expect(divide(10, 0)).toThrow();
});