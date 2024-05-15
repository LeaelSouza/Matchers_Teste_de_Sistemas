const retorna = require('./toContain');

test('teste array', ()=>{
    expect(retorna('siga','em','frente')).toContain('em');
});