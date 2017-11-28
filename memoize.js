

// define memoize function which takes in a function
let memoize = func => {
  //Initialize variable to store data
  let saved = {};
  return (args) => {
    // Initialize variable result.
    let result = "";
    //Use arguments to retrieve value stored in saved object if it exists,
    //otherwise, call func and assign value to result.
    args in saved
      ? (result = saved[args])
      : (result = saved[args] = func(args));

    return result;
  };
};

foo = function(x) {
  console.log("calculating");
  return x + 5;
};

memoizedFoo = memoize(foo);
memoizedFoo(5); //Calculating 10




