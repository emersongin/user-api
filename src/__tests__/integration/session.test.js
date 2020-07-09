const UserRepository = require('../../repositories/userRepository');

describe('repository', () => {
    it('get user id', async () => {

        const test = await UserRepository.create({
            username: "Emerson",
            password: "Dragon123",
            email: "emersonandrey_7@hotmail.com"
        });
        console.log(process.env);
        expect(test.email).toBe("emerson@and");
    });

});