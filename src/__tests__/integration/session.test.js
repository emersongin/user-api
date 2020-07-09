const UserRepository = require('../../repositories/userRepository');

describe('repository', () => {
    it('get user id', async () => {
        let user = await UserRepository.create({
            username: "Emerson",
            password: "Dragon123",
            email: "emersonandrey_7@hotmail.com"
        });

        expect(user.email).toBe("emersonandrey_7@hotmail.com");
    });

});