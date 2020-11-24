const HelloWorld = artifacts.require('HelloWorld');

contract("Hello World", () => {
    it("Should return hello world", async () => {
        const helloWorld = await HelloWorld.deployed();
        const result = await helloWorld.hello();
        assert(result === 'Hello World');
    });
});