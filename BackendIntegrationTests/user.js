/*global describe, it*/
'use strict';

const monk = require('monk');
const db = monk(process.env.MONGODB_URL || 'localhost/movied');
var chai = require('chai');
var expect = chai.expect; // Using Expect style
const bcrypt =  require('bcrypt')
const User = db.get('users');
const fetch = require('node-fetch');

describe('Routes', function () {
  beforeAll(function name(params) {
    User.create({ username: 'miguel', password: bcrypt.hash('firstPassword') });
  });
  describe('create user /', function () {
    it('should return 400 when no user provided', function (done) {
      fetch('http://localhost:3000/users', {
        method: 'POST'
      }).then((res) => {
        expect(res.status).to.equal(400);
        done();
      });
    });
    it('should handle existing users', function (done) {
      const body = {
        username: 'miguel',
        password: 'secondPassword'
      };
      fetch('http://localhost:3000/users', {
        method: 'POST',
        body: JSON.stringify(body)
      }).then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.equal('user allready exists');
        const users = User.find();
        expect(users.length).to.equal(1);
        // DOESNT OVERWRITE EXISTING USEr
        expect(users[1].password).to.equal(bcrypt.hash('firstPassword'));
        done();
      });
    });

    it('should create a new user with the hashed password', function (done) {
      const body = {
        username: 'miguel2',
        password: '123'
      };
      fetch('http://localhost:3000/users', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
      }).then(async (res) => {
        expect(res.status).to.equal(201);
        const user = await User.find({ username: 'miguel' });
        expect(user).to.exist();
        const hash = await bcrypt.hash(body.password, 10);
        expect(hash).to.equal(user.password);
      });
    });
  });
});
