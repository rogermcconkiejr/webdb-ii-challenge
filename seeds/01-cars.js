
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {make: 'Ford', model:'Mustang', vin: '1234567898756', mileage: '35678', transmission:'manual', title:'clean'},
        {make: 'Mazda', model:'Mazda3', vin: '9876543234566', mileage: '70245', transmission:'Automatic', title:'clean'},
      ]);
    });
};
