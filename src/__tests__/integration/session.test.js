const UserRepository = require('../../repositories/userRepository');

describe('repository', () => {
    it('get user id', async () => {

        const test = await UserRepository.create({
            username: "Emerson", 
            password: "dragon123", 
            email: "emerson@and"
        });
        console.log(process.env);
        expect(test.email).toBe("emerson@and");
    });

});