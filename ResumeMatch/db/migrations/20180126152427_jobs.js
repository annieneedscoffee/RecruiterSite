exports.up = function(knex, Promise) {
  return knex.schema.createTable('jobs', function(table){
    table.increments();
    table.string('company');
    table.string('description');
    table.string('location');
    table.decimal('experience');
    table.string('certifications');
    table.string('licensing');
    table.string('degrees');
    table.string('skills');
    table.integer('estSal');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('jobs');
};
