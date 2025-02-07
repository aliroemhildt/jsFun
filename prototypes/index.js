const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { books } = require('./datasets/books');
const { weather } = require('./datasets/weather');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');


// ===========================================================
// NOTES
// ===========================================================
/*
setup for each problem:

const result = array.prototypeMethod((params) => {
  // code
})
// return result

OR

const functionName = () => {
  let result = array.method((element) or object.array.method(element) => {
    return //code
  })
  return result
}
functionName();
*/


// ===========================================================
// SINGLE DATASETS
// ===========================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {

    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']
    const result = kitties.filter(kitty => kitty.color === 'orange').map(orangeKitty => orangeKitty.name);
    return result;

    // another way to write it:
    // const result = kitties.filter(kitty => kitty.color === 'orange');
    // return result.map(orangeKitty => orangeKitty.name);

    // another way to write it:
    // const result = kitties.filter((kitten) => {
    //   return kitten.color === 'orange';
    // }).map((orangeKittens) => {
    //   return orangeKittens.name;
    // });
    // return result;


    // Annotation:
    /*
    input: array of objects, with properties name, age, color
    output: array of strings (kitty names)
    method: filter the kitties array and return only kitty objects with the color orange
            map that array and return an array of only the names
    */

  },

  sortByAge() {
    // Sort the kitties by their age

    const result = kitties.sort((firstKitty, secondKitty) => {
      return secondKitty.age - firstKitty.age;
    });
    return result;


    // Annotation:
    /*
    input: array of kitten objects
    output: array of kitten objects, sorted by age
    method: compare the age of each kitten, return the higher age
    */

  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    const result = kitties.map(kitty => {
      kitty.age += 2;
      return kitty;
    }).sort((firstKitty, secondKitty) => {
      return secondKitty.age - firstKitty.age;
    });
    return result;



    // Annotation:
    /*
    input: array of kitten objects
    output: array of kitten objects, who are all 2 years older
    method: make a change to each item in array (map)
    */
  }
};

// -----------------------------------------------------------

// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  // why does this take in argument in test file?

  // Create an object whose keys are the names of people, and whose values are
  // arrays that include the names of the clubs that person is a part of. e.g.
  // {
  //   Louisa: ['Drama', 'Art'],
  //   Pam: ['Drama', 'Art', 'Chess'],
  //   ...etc
  // }

  membersBelongingToClubs() {

    const result = clubs.reduce((acc, club, index) => {
      club.members.forEach(name => {
        if (!acc[name]) {
          acc[name] = [];
        }
        if (!acc[name].includes(club.club)) {
          acc[name].push(club.club);
        }
      });
      return acc;
    }, {});

    return result;

    // Annotation:
    // input: array of objects, properties: club (string), memebers (array)
    //  output: object - keys that are names of each memeber, value is array
    //   of names of clubs that person is in
    // 1. reduce - add each name to an array, checking for duplicates
    // 2. map that array, look at each club and add to that person if their
    //    name is in member list
  }
};

// -----------------------------------------------------------

// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    const result = mods.map(currMod => {
      let newInfo = {
        mod: currMod.mod,
        studentsPerInstructor: currMod.students / currMod.instructors
      };
      return newInfo;
    });
    return result;

    // Annotation:
    // input: none, working with array of objects, keys: mod, students, instructors
    // output: array of objects, with keys: mod, studentsPerInstructor
    // method: map, change each object before returning
  }
};

// -----------------------------------------------------------

// DATASET: cakes from ./datasets/cakes
const cakePrompts = {

  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    const result = cakes.map(cake => {
      return {
        flavor: cake.cakeFlavor,
        inStock: cake.inStock
      };
    });

    return result;

    // Annotation:
    // input: array of cake objects
    // output: array of objects, with keys: flavor and inStock
    // method: map through cakes, return a new object that only has flavor and inStock keys
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    const result = cakes.filter(cake => {
      return cake.inStock > 0;
    });

    return result;

    // Annotation:
    // input: array of cake objects, with properties: cakeFlavor, filling, frosting, toppings, inStock
    // output: array of only the cake objects that are in stock
    // method: filter, only return cake objects if their inStock value is greater than 0
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = cakes.reduce((totalCakes, cake) => {
      totalCakes += cake.inStock;
      return totalCakes;
    }, 0);

    return result;

    // Annotation:
    // input: array of cake objects
    // output: number, total number of cakes in stock
    // method: reduce
    //  acc will start at 0
    //  for each cake, add the inStock value to the acc
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const result = cakes.reduce((allToppings, cake) => {
      cake.toppings.forEach(topping => {
        if (!allToppings.includes(topping)) {
          allToppings.push(topping);
        }
      });
      return allToppings;
    }, []);

    return result;

    // Annotation:
    // input: array of cake objects
    // output: array of ingredient names, no duplicates
    // method: reduce
    //    acc will be an empty array
    //    for each topping:
    //      add to acc if it is not already in there
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    const result = cakes.reduce((groceryList, cake) => {
      cake.toppings.forEach(topping => {
        if (!groceryList[topping]) {
          groceryList[topping] = 0;
        }
        groceryList[topping] += 1;
      });
      return groceryList;
    }, {});

    return result;

    // Annotation:
    // input: array of cake objects
    // output: one object with a key for each topping, assigned to the value of amount of topping needed
    // method:
    // iterate through cakes, look at toppings list
    // for each topping, add it to the list if it's not already in there
    // increase its count by one
  }
};

// -----------------------------------------------------------

// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const result = classrooms.filter(classroom => {
      return classroom.program === 'FE';
    });

    return result;

    // Annotation:
    // input: array of classroom objects, with properties: roomLetter, program, cpacity
    // output: array of classroom objects, only the ones with a program value of 'FE'
    // method: filter, only return a classroom if its program property is equal to 'FE'
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    const result = classrooms.reduce((totalCapacity, classroom) => {
      if (classroom.program === 'FE') {
        totalCapacity.feCapacity += classroom.capacity;
      } else {
        totalCapacity.beCapacity += classroom.capacity;
      }
      return totalCapacity;
    }, {feCapacity: 0, beCapacity: 0});

    return result;

    // Annotation:
    // input: array of classroom objects, with properties: roomLetter, program, capacity
    // output: object, with keys feCapacity and beCapacity, where value is total capacity for each program
    // method: reduce
    //    acc will be an object with keys feCapacity and beCapacity
    //    for each classroom:
    //        check value of program
    //        add capacity to the corresponding key of the acc
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort((classroom1, classroom2) => {
      // need to google how the return statement of this method works
      return classroom1.capacity - classroom2.capacity;
    });

    return result;

    // Annotation:
    // input: array of classroom objects
    // output: array of classroom objects, sorted by value of capcity key
    // method: sort, when comparing two classes, return the one with the smaller capacity value
  }
};

// -----------------------------------------------------------

// DATASET: books from './datasets/books
const bookPrompts = {
  removeViolence() {
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']


    const result = books.reduce((acc, book) => {
      if (book.genre !== 'Horror' && book.genre !== 'True Crime') {
        acc.push(book.title);
      }
      return acc;
    }, []);

    return result;

    // Annotation:
    // input: array of book objects, with properties title, author, genre, published
    // output: array of book titles, only the books with genre values that are not horror or true crime
    // method: reduce
    //    acc will be an empty array
    //    check book.genre
    //    if book.genre is not horror or true crime, add book.title to acc

  },

  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    const result = books.reduce((acc, book) => {
      if (book.published, book.published >= 1990 && book.published <= 2009) {
        const newBook = {title: book.title, year: book.published};
        acc.push(newBook);
      }
      return acc;
    }, []);

    return result;

    // Annotation:
    // input: array of book objects
    // output: array of only the books with year value 1990-2009
    //    objects in returned array should have keys title and year
    // method: redue - we want an array of a different length (filter) and we want to change the objects (map)
  }
};

// -----------------------------------------------------------

// DATASET: weather from './datasets/weather
const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    const result = weather.map(weatherInfo => {
      return (weatherInfo.temperature.low + weatherInfo.temperature.high) / 2;
    });

    return result;

    // Annotation:
    // input: array of weather objects
    // output: array of average temperatures
    // method: map - we want to return the avg temp of each object, not the entire object
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    const result = weather.reduce((acc, weatherInfo) => {
      if (weatherInfo.type.includes('sunny')) {
        const message = `${weatherInfo.location} is ${weatherInfo.type}.`;
        acc.push(message);
      }
      return acc;
    }, []);
    return result;

    // Annotation:
    // input: array of weather objects
    // output: array of only objects with type keys that include sunny, returning a string that interpolates the info
    // method: reduce -> filtering through an array, but returning something new instead of the exact object
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    const result = weather.sort((a, b) => {
      return b.humidity - a.humidity;
    });
    return result[0];

    // Annotation:
    // input: array of weather objects
    // output: single weather object
    // use sort to list humidity from hightest to lowest
    // return the first item
  }
};

// -----------------------------------------------------------

// DATASET: nationalParks from ./datasets/nationalParks
const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    const result = nationalParks.reduce((acc, park) => {
      if (park.visited) {
        acc.parksVisited.push(park.name);
      } else {
        acc.parksToVisit.push(park.name);
      }
      return acc;
    }, {parksVisited: [], parksToVisit: []});
    return result;

    // Annotation:
    // input: array of park objects, key vistited (boolean)
    // output: object with parksToVisit and parksVisited - arrays of park names
    // method:
    // reducde over nationalParks
    // acc is an object with parksToVisit and parksVisited - empty arrays
    // for each park object: check visited value
    // if true: add to acc.parksVisited
    // if false: add to acc.parksToVisit
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]


    const result = nationalParks.reduce((acc, park) => {
      acc.push({[park.location]: park.name});
      return acc;
    }, []);
    return result;

    // Annotation:
    // input: array of park objects
    // output: array of objects - key = state, value = park name
    // method:
    //    reduce over nationalParks
    //    add a new object to acc for each park
    //    this will work for the data give, but this fn is not checking for
    //      duplicates of states or park names
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    const result = nationalParks.reduce((acc, park) => {
      park.activities.forEach(activity => {
        if (!acc.includes(activity)) {
          acc.push(activity);
        }
      });
      return acc;
    }, []);
    return result;

    // Annotation:
    // input: array of park objects, with key activites - array of strings
    // output: array of all activites, no duplicates
    // method:
    //    reduce over nationaParks array
    //    look at each activity for a park (forEach)
    //    if the acc does not include the activity, add it
  }
};

// -----------------------------------------------------------

// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    const result = breweries.reduce((acc, brewery) => {
      brewery.beers.forEach(beer => {
        acc++;
      });
      return acc;
    }, 0);
    return result;

    // Annotation:
    // input: array of brewery objects - with key beers (array of beer objects)
    // output: number - total number of beers accross all breweries
    // method:
    //    reduce over breweries
    //    for each item in beers array, add 1 to acc
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    const result = breweries.reduce((acc, brewery) => {
      let beerCount = 0;
      brewery.beers.forEach(beer => {
        beerCount++;
      });
      acc.push({name: brewery.name, beerCount: beerCount});
      return acc;
    }, []);
    return result;

    // Annotation:
    // input: array of brewery objects - with keys name (string), beers (array of objects)
    // method:
    //    reduce over breweries, acc is empty array
    //    for each brewery:
    //        create beerCount var, add 1 for each item in beer array (forEach)
    //        add an object to acc - {name, beerCount}
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    const result = breweries.reduce((acc, brewery) => {
      brewery.beers.forEach(beer => {
        acc.push(beer);
      });
      return acc;
    }, []).sort((a, b) => {
      return b.abv - a.abv;
    });
    return result[0];

    // Annotation:
    // input: array of brewery objects - with key beers (array of beer objects), each with key abv (number)
    // output: the beer object with the highest abv
    // method:
    //    reduce over breweries, add each beer object to acc
    //    sort array of beers by abv (highest to lowest: <)
    //    return the first item in the list of sorted beers
  }
};


// ===========================================================
// DOUBLE DATASETS
// ===========================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    const result = instructors.reduce((acc, instructor) => {
      let cohort = cohorts.find(cohort => {
        return cohort.module === instructor.module;
      });
      acc.push({name: instructor.name, studentCount: cohort.studentCount});
      return acc;
    }, []);
    return result;

    // Annotation:
    // input:
    //    array of instructor objects (with key 'name' and 'module')
    //    array of cohort objects (with key 'module' and 'studentCount')
    // output: array of objects with key for instructor name and the num of students in their mod
    // method:
    //    reduce over instructor array
    //    add an object to acc {name: instructor.name, studentCount: 0}
    //    use the mod tied to that teacher to find the object in the cohort array with the same mod - store in var
    //    use the mod var to add mod.studentCount to the studentCount of the new object
    //    add new object to acc
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    const result = cohorts.reduce((cohortInfo, cohort) => {
      const teachers = instructors.reduce((numTeachers, instructor) => {
        if (instructor.module === cohort.module) {
          numTeachers++;
        }
        return numTeachers;
      }, 0);
      cohortInfo[`cohort${cohort.cohort}`] = cohort.studentCount / teachers;
      return cohortInfo;
    }, {});
    return result;

    // Annotation:
    // input: instructor array (key: module), cohort array (keys: module, studentCount)
    // output: object with keys for each cohort and the number of students per teacher in each
    // method:
    //    reduce through cohort array (acc is empty object)
    //        create var for teacher count (numTeachers) - filter through instructor array using module number
    //        add a new key ('cohort'+cohort.cohort) with value of students per instructor (studentCount/numTeachers)
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    const result = instructors.reduce((acc, instructor) => {
      acc[instructor.name] = [];
      instructor.teaches.forEach(subject => {
        cohorts.forEach(cohort => {
          if (cohort.curriculum.includes(subject) && !acc[instructor.name].includes(cohort.module)) {
            acc[instructor.name].push(cohort.module);
          }
        });
      });
      acc[instructor.name].sort();
      return acc;
    }, {});
    return result;

    // Annotation:
    // input:
    //    instructor array - keys: module, teaches
    //    cohort array - keys: module, curriculum
    // output: object with instructor name keys, and array of modules they teach for values
    // method:
    //    reduce over instructors array (acc is {})
    //    add their name with empty array to acc
    //    iterate through teaches
    //        for each subject, iterate through cohorts
    //        if its in curriculum, add module to acc
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    const result = cohorts.reduce((acc, cohort) => {
      cohort.curriculum.forEach(subject => {
        if (!acc[subject]) {
          acc[subject] = [];
        }
      });
      return acc;
    }, {});

    instructors.forEach(instructor => {
      instructor.teaches.forEach(subject => {
        result[subject].push(instructor.name);
      });
    });

    return result;

    // Annotation:
    // input:
    //    instructor array - keys: name, teaches
    //    cohorts array - keys: curriculum
    // output: object - keys: curriculum topic,
    //                  values: instructors that teach it
    // method:
    //    reduce over cohorts array - acc is {}
    //    iterate through cohort.curriculum array
    //        if acc[subject] does not exist, add it to acc with value //        []
    //    iterate through instructors array
    //        if instructor.teaches includes acc[subject]:
    //        add instructor to acc[subject] array
  }
};

// -----------------------------------------------------------

// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {

    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    const bossNames = Object.keys(bosses);

    const result = bossNames.reduce((acc, name) => {
      let bossInfo = {bossName: bosses[name].name, sidekickLoyalty: 0};
      sidekicks.forEach(sidekick => {
        if (sidekick.boss === bossInfo.bossName) {
          bossInfo.sidekickLoyalty += sidekick.loyaltyToBoss;
        }
      });
      acc.push(bossInfo);
      return acc;
    }, []);

    return result;

    // Annotation:
    // input: bosses object with sub-objects, sidekicks array
    // output: array of objects - keys: bossName, sidekickLoyalty
    // method:
    //    use object keys to get array of boss names
    //    reduce over boss names - acc is []
    //        for each name, add an object to the acc
    //        {bossName: name, sidekickLoyalty: 0}
    //    iterate over sidekicks
    //        add loyaltyToBoss to result[sidekick.boss]
  }
};

// -----------------------------------------------------------

// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    const constellationKeys = Object.keys(constellations);

    const starsInConstellations = constellationKeys.reduce((acc, constellation) => {
      constellations[constellation].stars.forEach(star => {
        if (!acc.includes(star)) {
          acc.push(star);
        }
      });
      return acc;
    }, []);

    const result = stars.filter(star => {
      return starsInConstellations.includes(star.name);
    });

    return result;

    // Annotation:
    // input: constellations object, stars array
    // output: array of star objects if the star is listed in a constellation
    // method:
    //    create array of constellation keys
    //    reduce over constellation keys - acc is array of star names
    //    filter over stars, return if name is included in star names



  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = stars.reduce((acc, star) => {
      if (!acc[star.color]) {
        acc[star.color] = [];
      }
      acc[star.color].push(star);
      return acc;
    }, {});
    return result;

    // Annotation:
    // input: stars arrays
    // output: object - keys of star colors, value of star objects that are that color
    // method:
    //    - reduce over stars, acc is object
    //    - if the color is not a key in the obj, add it
    //    with value of []
    //    - add that star to the matching color
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.

    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    const result = stars.sort((a, b) => {
      return a.visualMagnitude - b.visualMagnitude;
    }).reduce((acc, star) => {
      if (star.constellation) {
        acc.push(star.constellation);
      }
      return acc;
    }, []);
    return result;

    // Annotation:
    // input: constellation object, stars array
    // output: array of constellation names
    // method:
    //
  }
};

// -----------------------------------------------------------

// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    const result = characters.reduce((acc, character) => {
      character.weapons.forEach(weapon => {
        acc += weapons[weapon].damage;
      });
      return acc;
    }, 0);
    return result;

    // Annotation:
    // input: characters array - keys: weapons (array)
    //        weapons array - keys: weapon objects with damage keys
    // output: sum of damage (number)
    // method:
    // reduce over characters array, acc is 0
    // for each weapon:
    //    ac += weapons[weapon].damage
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}]

    const result = characters.reduce((acc, character) => {
      charDamage = 0;
      charRange = 0;
      character.weapons.forEach(weapon => {
        charDamage += weapons[weapon].damage;
        charRange += weapons[weapon].range;
      });
      const info = {
        [character.name]: {
          damage: charDamage,
          range: charRange
        }
      };
      acc.push(info);
      return acc;
    }, []);
    return result;

    // Annotation:
    // reduce through characters, acc is []
    // calculate damge and range totals
    // push obj to acc with character name key assigned to obj
    //    with keys damage and range
  }
};

// -----------------------------------------------------------

// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    const result = movies.reduce((acc, movie) => {
      acc[movie.title] = 0;
      movie.dinos.forEach(dino => {
        if (dinosaurs[dino].isAwesome) {
          acc[movie.title]++;
        }
      });
      return acc;
    }, {});
    return result;

    // Annotation:
    // input: dinosaurs object, humans object, movies arrays
    // output: object with movie title keys, num of dinos value
    // method:
    // redue over movies, acc = {}
    // add each movie title to acc with value 0
    // for each dino in dinos array:
    //    if dinosaurs[dino].isAwesome is true, add 1 to acc
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    const result = movies.reduce((acc, movie) => {
      if (!acc[movie.director]) {
        acc[movie.director] = {};
      }

      acc[movie.director][movie.title] = 0;
      let totalAge = 0;

      movie.cast.forEach(name => {
        totalAge += ((movie.yearReleased - humans[name].yearBorn));
      });

      acc[movie.director][movie.title] = Math.floor(totalAge / movie.cast.length);
      return acc;
    }, {});
    return result;

    // Annotation:
    // output: obj with keys of movie directors --> obj with key for each movie, each with value of avg age of cast
    // method:
    // reduce over movies
    // if move director is not a key yet:
    //    add obj to acc with key of dir. name and value {}
    // acc[movie.director][movie.title] = 0
    // movie.cast.forEach:
    //    acc[movie.director][movie.title] += movie.yearReleased - humans[casMemeber].yearBorn
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */
    const names = Object.keys(humans);

    const castJP =  movies.reduce((acc, movie) => {
      movie.cast.forEach(person => {
        if (!acc.includes(person)) {
          acc.push(person);
        }
      });
      return acc;
    }, []);

    const result = names.reduce((acc, name) => {
      if (!castJP.includes(name) && acc.includes) {
        acc.push({
          name: name,
          nationality: humans[name].nationality,
          imdbStarMeterRating: humans[name].imdbStarMeterRating
        });
      }
      return acc;
    }, []);
    return result.sort((a, b) => {
      return a.nationality.toLowerCase().localeCompare(b.nationality.toLowerCase());

      // aNationality = a.nationality.toLowerCase();
      // bNationality = b.nationality.toLowerCase();
      // if (aNationality > bNationality) {
      //   return 1;
      // } if (bNationality > aNationality) {
      //   return -1;
      // }
    });


    // const result = humanNames.reduce((acc, name) => {
    //   if (!acc.includes(humans[name])) {
    //     acc.push({
    //       name: name,
    //       nationality: humans[name].nationality,
    //       imdbStarMeterRating: humans[name].imdbStarMeterRating
    //     });
    //   }
    //   return acc;
    // }, []);
    // return result.sort((a, b) => {
    //   return a.nationality.toLowerCase().localeCompare(b.nationality.toLowerCase());
    // });

    // Annotation:
    // output: array of objects with keys: name, nationality, imdbStarMeterRating
    // method:
    // Object.keys(human) --> get array of humanNames
    // iterate through human names and remove if it is listed in a JP movie
    // humanNames.reduce, acc is []
    //    add obj for that human to acc
    // sort acc by nationality key
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    const names = movies.reduce((acc, movie) => {
      movie.cast.forEach(name => {
        if (!acc.includes(name)) {
          acc.push(name);
        }
      });
      return acc;
    }, []);

    const result = names.reduce((acc, name) => {
      item = ({name: name, ages: []});
      movies.forEach(movie => {
        movie.cast.forEach(person => {
          if (person === name) {
            item.ages.push(movie.yearReleased - humans[person].yearBorn);
          }
        });
      });
      acc.push(item);
      return acc;
    }, []);

    return result;

    // Annotation:
    // reduce over movies, acc is []
    // movie.cast.forEach:
    //    if that name is not in acc, add it with value of empty array
    //    acc[name].push (movie year - human age)
    //    acc[name].sort((a,b) => a - b)
  }
};

// -----------------------------------------------------------


module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts
};
