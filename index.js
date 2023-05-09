

const printNum = () => {
    for (let i = 0; i <= 100; i++) {
        setTimeout(() => console.log(i), 1000)
    }
}

printNum()

/*
2. Given the array below:
myArr = ['12-24-2014', '09-2022-23', '12-30-2021', '08-02-2021', '07-15-2018', '2019-12-14', '2022-14-12']
the array above has serveral dates, written in order month-day-year
Write the code inside function fixDate(array) below to transform the array to new
format dates day-month-year
expected result: ['24-12-2014', '23-09-2022', '30-12-2021', '08-02-2021', '15-07-2018', '14-12-2019', '14-12-2022'] . 
You only need to produce the same array as expected result, no need to consider other 
possibility.
 */

let myArr = [
    '12-24-2014',
    '09-2022-23',
    '12-30-2021',
    '08-02-2021',
    '07-15-2018',
    '2019-12-14',
    '2022-14-12',
  ];
const fixDate = (array) => {

const newArr = array.map((date) => {
    const splitDate = date.split('-');
    //sort array in ascending order
    splitDate.sort((a, b) => {
      return a - b;
    });
    if (splitDate[0] <= splitDate[1]) {
      //swap places of date and month in splitDate array
      //(not completely optimal but we can't know which <12 is month or day anyway)
      [splitDate[0], splitDate[1]] = [splitDate[1], splitDate[0]];
      date = splitDate.join('-');
    }
    return date;
  });
  return newArr;
};
let newArr = fixDate(myArr);
console.log(newArr);



    /* provide your code here */
    
        const diff = to.getTime() - from.getTime();
      
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
        return `${days} days - ${hours} hours - ${minutes} minutes - ${seconds} seconds`;

    const timer = counter(dateFrom, dateTo);
    console.log(timer);
      



    /*  provide your code here */
const generateNewFolderName = (existingFolders) => {
    let folderName = 'New Folder'
    let counter = 0

    while (existingFolders.includes(folderName)) {
        counter++
        folderName = `New Folder (${counter})`
    }

    existingFolders.push(folderName)
};
let folder = [];
generateNewFolderName(folder);
generateNewFolderName(folder);
generateNewFolderName(folder);
generateNewFolderName(folder);
console.log(folder); //expect to see ['New Folder', 'New Folder (1)', 'New Folder (2)', 'New Folder (3)']



/* 5. Write a higher order function in JavaScript called debounce that can be used to debounce a callback function. 
The debounce function should take two arguments: the callback function to debounce and the delay time in milliseconds. 
The debounced function returned by debounce should wait until the delay time has passed before calling the callback function. 
If the debounced function is called again within the delay time, the timer should be reset and the callback function should be called after the delay time has passed. 
Your solution should be implemented in JavaScript without using any third-party libraries or frameworks. */

const debounce = (callback, timer) => {

let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback();
    }, timer);
  };
};
const debounced = debounce(
  () => console.log("this should print out only once"),
  1000
);

for (let i = 0; i < 5; i++) {

    debounced();
}


/* 6. Create a function called cacheFunc that takes another function as an argument and returns a new function. 
The new function should cache the result of the original function for each set of arguments that it's called with. 
If the new function is called with the same arguments again, it should return the cached result, instead of calling the original function again. 
The new function should have a cache property that stores the cached results. */

const cacheFunc = (callback) => {
    const cache = {} //stores the cached results here

    return (...args) => {
        const key = JSON.stringify(args) // Using JSON.stringity to convert the arg. into a string

        if (cache.hasOwnProperty(key)) { // this method is used to check if the cache object has a property with the given key
            return cache[key]
        } else {
            const result = callback(...args)
            cache[key] = result
            return result
        }
    }
}


const addition = (a, b) => {
    console.log("addition of " + a + " and " + b)
    return a + b
}
const subtraction = (a, b) => {
    console.log("subtraction of " + a + " and " + b)
    return a - b
}
const cacheAddition = cacheFunc(addition)
const cacheSubtraction = cacheFunc(subtraction)
console.log(cacheAddition(10, 5)) 
console.log(cacheAddition(10, 5))
console.log(cacheAddition(10, 9)) 
console.log(cacheAddition(10, 9)) 
console.log(cacheSubtraction(10, 5)) 
console.log(cacheSubtraction(10, 5)) 


/* 7. Check the code below, fix the bug and complete withMetrics to make the final console.log
print out the expect result */
const createRecipe = (name, instructions) => {

    return {
        name,
        instructions,
        printInstructions: function () {
          console.log(`Instructions for ${this.name}:`);
          console.log(
            this.instructions +
              `for ${this.time} seconds. Contain ${this.calories} calories`
          );
        },
      };
    };

    return (args) => {
        return {
          ...args,
          time,
          calories,
        };
      };
    
    
  
    const pancakeRecipe = withMetrics(
      30,
      200
    )(createRecipe('Pancakes', 'Mix flour, eggs, and milk. Cook on a griddle.'));

    pancakeRecipe.printInstructions();