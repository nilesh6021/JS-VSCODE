const accountId = 10001
let accountEmail = "hitesh@google.com"
let accountPassword = "12345"
let accountCity = "Jaipur"
let state ="GUJ"


// accountId = 2 // not allowed


accountEmail = "nilesh@google.com"
accountPassword = "cms@123"
accountCity = "Kolhapur"
state ="Maharashtra"


console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId ,accountEmail,accountPassword,accountCity,state]);