const { species, employees } = require('./data');
const data = require('./data');

const getSpeciesByIds = (...ids) => species.filter((specie) => ids.includes(specie.id));

function getAnimalsOlderThan(animal, age) {
  const typeSpecies = species.find((specie) => specie.name === animal);
  return typeSpecies.residents.every((element) => element.age >= age);
}

function getEmployeeByName(employeeName) {
  const exists = (obj) => obj.firstName === employeeName || obj.lastName === employeeName;
  const person = employees.find(exists);
  if (person) {
    return person;
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}
console.log(createEmployee({ id: '7ed1c9bb-8570-44f6-b718-0666b869573a', firstName: 'John', lastName: 'Doe' },{managers: [
  'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
  '9e7d4524-363c-416a-8759-8aa7e50c0992'
],
responsibleFor: [
  '0938aa23-f153-4937-9f88-4858b24d6bce',
  '89be95b3-47e4-4c5b-b687-1fabf2afa274',
  'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'
]}));
function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(speciess) {
  // seu código aqui
}

function calculateEntry(entrants) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
