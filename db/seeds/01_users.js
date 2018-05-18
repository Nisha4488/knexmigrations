
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        { name: 'Ali', email:'ali@gmail.com', password:'ali123'},
        { name: 'Anki', email:'anki@gmail.com', password:'anki123'},
        { name: 'Nisha', email:'nish@gmail.com', password:'nisha123'}
      ]);
    });
};
