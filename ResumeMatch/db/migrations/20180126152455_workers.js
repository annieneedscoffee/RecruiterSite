
exports.up = function(knex, Promise) {
  return knex.schema.createTable('workers', function(table){
    table.increments();
    table.string('email');
    table.string('username');
    table.string('password');
    table.string('location');
    table.boolean('relocate');
    table.decimal('experience');
    table.string('certifications');
    table.string('license');
    table.string('degrees');
    table.string('skills');
    table.string('current');
    table.string('past');
    table.string('other');
    table.string('phone');
    table.string('sjobs');
    table.string('ajobs');
    table.string('ijobs');
    table.string('mjobs');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('requests');
};
