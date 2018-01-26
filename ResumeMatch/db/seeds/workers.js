
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('workers').del()
    .then(function () {
      // Inserts seed entries
      return knex('workers').insert([
        {email: 'biff@gmail.com', username: 'biffbiff', password: '456', location: 'Phoenix', relocate: true, experience: 3.5, certifications: 'compliance specialist', license: 'AZ', degrees: 'J.D.', skills: 'compliance, drafting, research, litigation', current: 'attorney', past: 'intern', other: 'interested in IP work', phone: '1002003000', sjobs: '1,5,6', ajobs: '1,5,6', ijobs: '5', mjobs: '5,6'},

      ]);
    });
};
