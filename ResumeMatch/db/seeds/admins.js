
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('admins').del()
    .then(function () {
      // Inserts seed entries
      return knex('admins').insert([
        {email: 'char.anne.spencer@gmail.com', password: 'testentry25', username: 'admin2', phone: '773-494-5811'},
      ]);
    });
};
