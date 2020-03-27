exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          userName: "computer",
          password: "user",
          department: "admin"
        },
        {
          id: 2,
          userName: "user",
          password: "pass",
          department: "admin"
        }
      ]);
    });
};
