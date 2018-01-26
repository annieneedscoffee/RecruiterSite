exports.up = function(knex, Promise) {
  return knex.schema.createTable('employers', function(table){
    table.increments();
    table.string('email');
    table.string('password');
    table.string('jobs');
    table.string('company');
    table.string('cp');
    table.string('locations');
    table.string('username');
    table.string('phone');
    table.string('swork');
    table.string('iwork');
    table.string('awork');
    table.string('mwork');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('employers')
};
