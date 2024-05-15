const retorna = require('./toMatch');

test.only('Teste string', ()=>{
    expect(retorna()).toMatch('Thiago');
});