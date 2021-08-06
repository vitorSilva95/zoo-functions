const { species, employees, prices } = require('./data');
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
  const mergeEmployeeObjects = { ...personalInfo, ...associatedWith };
  return mergeEmployeeObjects;
}

function isManager(id) {
  let employeeIsManager = false;
  const employee = employees.map((employedPerson) => employedPerson.managers);
  employee.forEach((element, index) => {
    if (element[index] === id) {
      employeeIsManager = true;
    }
  });
  return employeeIsManager;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const manager = (element) => element || [];
  const responsible = (value) => value || [];
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers: manager(managers),
    responsibleFor: responsible(responsibleFor),
  };
  employees.push(newEmployee);
}

function countAnimals(speciess) {
  const objectName = {};
  const typeSpecie = species.filter((specie) => specie.name === speciess || !speciess);
  typeSpecie.reduce((_, element) => {
    objectName[element.name] = element.residents.length;
    return objectName;
  }, [0]);
  if (typeSpecie.length < 2) {
    return Object.values(objectName)[0];
  }
  return objectName;
}

function calculateEntry(entrants) {
  if (!entrants) {
    return 0;
  }
  const adult = prices.Adult * (entrants.Adult || 0);
  const child = prices.Child * (entrants.Child || 0);
  const senio = prices.Senior * (entrants.Senior || 0);

  return adult + child + senio;
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
