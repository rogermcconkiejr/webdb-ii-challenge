
exports.up = function(knex) {
    return knex.schema.createTable('cars', function(tbl){
      tbl.increments();
      tbl.string('make', 128).notNullable();
      tbl.string('model', 128).notNullable();
      tbl.integer('vin').notNullable().unique();
      tbl.integer('mileage').notNullable();
      tbl.string('transmission', 100);
      tbl.string('title', 100); 
    }) 

};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
