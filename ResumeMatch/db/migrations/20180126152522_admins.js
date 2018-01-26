
exports.up = function(knex, Promise) {
  return knex.schema.createTable('admins', function(table){
    table.increments();
    table.string('email');
    table.string('password');
    table.string('username');
    table.string('phone');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('admins');
};
