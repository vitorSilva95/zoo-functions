const { species, employees, prices, hours } = require('./data');
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

function getValue(value, options) {
  const newObj = {};
  if (!options) {
    return value.name;
  }
  if (options.includeNames) {
    newObj[value.name] = value.residents.map((i) => i.name);
    return newObj;
  }
  if (options.sex) {
    newObj[value.name] = value.residents.filter((v) => v.sex === options.sex).map((i) => i.name);
    return newObj;
  }
}

function getAnimalMap(options) {
  const localization = species.reduce((acc, value) => {
    const key = value.location;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(getValue(value, options));
    return acc;
  }, {});
  // if (options.includeNames === true) {
  //   return localization.map((names) => names.residents.name);
  // }
  return localization;
}

function getSchedule(dayName) {
  const newObj = {};
  const days = Object.keys(hours);
  days.forEach((day) => {
    const { open, close } = hours[day];
    newObj[day] = `Open from ${open}am until ${close - 12}pm`;
    if (day === 'Monday') {
      newObj[day] = 'CLOSED';
    }
    if (day !== 'Monday') {
      return newObj[day];
    }
  });
  if (!dayName) {
    return newObj;
  }
  return { [dayName]: newObj[dayName] };
}

function getOldestFromFirstSpecies(id) {
  const employe = employees.find((eployeId) => eployeId.id === id);
  const employeResponsible = employe.responsibleFor.map((responsible) => responsible);
  const filterSpecie = species.find((specieId) => specieId.id === employeResponsible[0]);
  const olderAnimal = filterSpecie.residents.sort((a, b) => b.age - a.age)[0];
  const { name, sex, age } = olderAnimal;
  return [name, sex, age];
}

function increasePrices(percentage) {
  const increasePriceAdult = Math.round(prices.Adult * percentage) / 100;
  const increasePriceChild = Math.round(prices.Child * percentage) / 100;
  const increasePriceSenior = Math.round(prices.Senior * percentage) / 100;

  const adult = (increasePriceAdult + prices.Adult).toFixed(2);
  const child = (increasePriceChild + prices.Child).toFixed(2);
  const senior = (increasePriceSenior + prices.Senior).toFixed(2);

  prices.Adult = parseFloat(adult);
  prices.Child = parseFloat(child);
  prices.Senior = parseFloat(senior);

  return prices;
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
