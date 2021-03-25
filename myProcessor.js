'use strict';

module.exports = {
    generateRandomProjectName,
    generateRandomTaskFields
};

const Faker = require('faker');

function generateRandomProjectName(userContext, events, done) {
      const projectName = Faker.commerce.productName();
      userContext.vars.projectName = projectName;
      return done();
    }

function generateRandomTaskFields(userContext, events, done) {
//   Another random contentcould be:
//   const name = `${Faker.lorem.word()} ${Faker.music.genre()}`;
  const contentTask = Faker.company.bs();
  const dueString = `Next ${Faker.date.weekday()}`;
  userContext.vars.contentTask = contentTask;
  userContext.vars.dueString = dueString;
  return done();
}