
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('jobs').del()
    .then(function () {
      // Inserts seed entries
      return knex('jobs').insert([
        {company: 'MyCo', description: 'legal secretary', location: 'Phoenix', experience: 2.5, certifications: '', licensing: '', degrees: 'B.S.', skills: 'research, writing', estSal: 30000},

      ]);
    });
};
