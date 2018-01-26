
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employers').del()
    .then(function () {
      // Inserts seed entries
      return knex('employers').insert([
        {email: 'myco@myco.com', password: '123', jobs: '1,5', company: 'MyCo', cp: 'Sally Myco', locations: 'Phoenix', username: 'Myusername', phone: '123456789', swork: '1,5,9', iwork: '1,5,9', awork: '5,9,15', mwork: '1,2,3,4,5'},

      ]);
    });
};
