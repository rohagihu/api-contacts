// Load Chance
var Chance = require("chance");

// Instantiate Chance so it can be used
var chance = new Chance();

const contactsQuantity = 1000;

module.exports = () => {
  const data = { contacts: [], teams: [] };
  // Create 1000 users
  for (let i = 0; i < contactsQuantity; i++) {
    const gender = chance.gender();
    const age = chance.age();

    data.contacts.push({
      id: i,
      firstName: chance.first({ gender: gender }),
      lastName: chance.last(),
      age: age,
      gender: gender,
      drivingLicence: age >= 18 ? chance.bool() : false,
    });
  }

  for (let i = 0; i < chance.integer({ min: 2, max: 8 }); i++) {
    const team = {};
    const teamQuantity = chance.integer({ min: 10, max: 15 });
    const teamName = chance.animal();
    team.teamName = teamName;
    team.members = [];

    for (let j = 0; j < teamQuantity; j++) {
      team.members.push(chance.integer({ min: 0, max: contactsQuantity }));
    }

    team.members = [...new Set(team.members)];

    data.teams.push(team);
  }
  return data;
};
