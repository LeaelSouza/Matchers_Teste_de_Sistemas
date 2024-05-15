const falso = require('./toBeFalsy');

test('testa falso', ()=>{
    expect(falso()).toBeFalsy();
});