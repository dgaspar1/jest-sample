const bcrypt = require('bcryptjs');

const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('User', ()=> {
    beforeEach(async ()=>{
        await truncate();
    });

    it('should encrypt user password', async () => {
        const user = await User.create({
            name: 'Denys',
            email: 'denysp.gaspar@gmail.com',
            password: '123'
        });


        const isEqual = await bcrypt.compare('123', user.password_hash);

        expect(isEqual).toBe(true);
    });
});
