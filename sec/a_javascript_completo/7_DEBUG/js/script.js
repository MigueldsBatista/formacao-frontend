"use strict";// Start of use strict

 //delete [].length; // SyntaxError: Cannot delete property 'length' of object

 //Exceptions


let x = 11;

if (x > 10) {
  throw new Error('x should not exceed 10. The value of x was: ' + x);
}

//finnaly

try {

if (!validation()) {
  throw new Error('Validation failed');
}

}
catch (e)
{
    console.log(e);
} finally {
    console.log('This will always run');
}