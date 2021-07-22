/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');

const agent = session(app);


describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  //beforeEach(() => Videogame.sync({ force: true }))
  describe('GET /videogames', () => {
    it('should get 200', function(){
      this.timeout(10000)
      agent.get('/videogames').expect(200)
    }
    );
  });
  describe('GET /genres', () => {
    it('should get 200', async () =>
      await agent.get('/genres').expect(200))
  });
});
