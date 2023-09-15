// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together

function FunctionWithTwoParams(param1 = 6, param2 = 9, ...restParam) {

  console.log(param1, param2, restParam);
  return param1 + param2;
}

// invoke the function and pass in two numbers
FunctionWithTwoParams(1,2);
// invoke the function and pass in more than two numbers
FunctionWithTwoParams(1,2,3,4);
// invoke the function and pass in only one number
FunctionWithTwoParams(5);
// change the function to set default values for the parameters

// again, invoke the function and pass in only one number
FunctionWithTwoParams(2);
// Rest Operator

// add a rest operator to the function's parameters

// add a line to the function's body to print the value of the rest operator
// again, invoke the function and pass in more than two numbers
FunctionWithTwoParams(2,5,3,7,6,9);
