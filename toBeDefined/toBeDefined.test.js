const retorna = require('./toBeDefined');

test.only('retorno', ()=>{
    expect(retorna()).toBeDefined();
});