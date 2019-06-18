const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database', () => {

    let joe;

    beforeEach((done) => {
        joe = new User({ name: 'Joe' });
        job.save()
            .then(() => done());
    });

    it('finds all users with a name of joe', () => {
        joe // instance of a User
    }); 
});