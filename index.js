/* WRITE THE CODE FOR THE FOLLOWING FUNCTIONS */

// Input: a (number), b (number)
// Action: Add both numbers together
// Output: The result (number)
function add(a=0, b=0) {
    // write your code here
    return a+b
  }
//   console.log(add(3,9))
  
  
  // Input: number
  // Action: Check if the number given is even or not
  // Output: The result (boolean)
  function isEven(a=0) {
    // write your code here
    if(a%2===0)
    return a +" is even"
    else 
    return a +" is not even"
  }
//   console.log(isEven(40));
  
  // Input: name (string)
  // Action: Greet the user by name
  // Output: The greeting (string)
  function greet(name) {
//     // write your code here
    name=prompt("What is your name?")
     let messages= `Hello ${name}!`
    return messages
  }
//   console.log(greet())

  
  // Input: age (number)
  // Action: Check if the age is 18 or over
  // Output: The result (boolean)
  let age=Number(prompt("What is your age?"))
  
  function isAnAdult(age) {
    // write your code here
    // age=Number(prompt("What is your age?"))
    if(age>18)
    return true
    else return false
  }
//   console.log(isAnAdult())
  
  // Input: age (number)
  // Action: Check how many years are left until adulthood (18)
   // Output: The result (number)
  function yearsToAdulthood(age) {
    // write your code here
    if(age<18)
      var result=18-age
    //  return "It takes to you years"+result+"to adulthood"
    
    return "It takes to you years " +result+" to adulthood"
  }
  alert(yearsToAdulthood())
  
  // Input: person ({ age: number, name: string })
  // Action:
  //   - check if a person is an adult
  //   - if they are, greet them
  //   - if they are not, tell them to come back in X years (when they are)
  // Output: The result (string)
  function admit(number, name) {
    // write your code here
    // use greet, isAnAdult and yearsToAdulthood to help you!
    isAnAdult()
    greet()
    yearsToAdulthood()
  }
  