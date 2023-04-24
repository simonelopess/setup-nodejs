const sayHelloWorld = require('./sayHelloWorld');

describe('Say Hello tests', () => {
    it('Should say Hello World', () => {
        const response = sayHelloWorld.sayHello();
        expect(response).toBe('Hello World')
    })

    it('Should say Hello Simone', () => {
        const response = sayHelloWorld.sayHello('Simone');
        expect(response).toBe('Hello Simone')
    })
})