
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('appointment').del()
    .then(function () {
      // Inserts seed entries
      return knex('appointment').insert([
        {location: 'deer valley', time: '10:15:00', user_id:'2'},
        {location: 'happy valley', time: '11:45:56', user_id:'1'},
        {location: 'exit 30', time: '13:09:12', user_id:'2'}
      ]);
    });
};
