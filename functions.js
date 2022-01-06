
let sampleArr = [1,2,3,4,5,6]; //Array to be used by functions 1-10

//--------------------------------------------------------------------
//#1 MyEach function


function myEach(arr, cb) //function to iterate through each element
{
    for(let i=0; i < arr.length; i++) //for loop to traverse each array element
    {
    cb(arr[i]); //callback function is invoked, and values are printed
    }
}

function addTwo(x) //callback function
{
    console.log(x+2); //prints out the element plus two
}

console.log("#1: MyEach function \n");

myEach(sampleArr,addTwo); //call myEach function

//-------------------------------------------------------------------
//#2 myMap function


function myMap(arr, cb) //function to traverse elements and create a new array
{
    arrayMap = [];  //new empty array
    for (let i = 0; i<arr.length; i++) //traverses entire array
    {
        arrayMap[i]=(cb(arr[i])); //index of new array equals the callback
    }
    return arrayMap; //returns the new array
}

function addThree(x) //callback function
{
    return x + 3; //returns the element plus three
}

console.log("\n #2: myMap function \n");

console.log(myMap(sampleArr, addThree));  //calls myMap function

//-------------------------------------------------------------------
//#3 myFilter function


function myFilter(arr, cb) //function to check a condition against elements
{
    arrayFilter=[]
    for (let i = 0; i<arr.length; i++) //traverses the array
    {
        if(cb(arr[i]))
        {
        arrayFilter.push(arr[i]);  //invoke callback function and print out values in array
        }
    }
    return arrayFilter;
}

function greaterThanThree(x) //callback function
{
        return x>3; //returns bool for element greater than 3
}


console.log("\n #3: myFilter function \n");

console.log(myFilter(sampleArr, greaterThanThree));  //calls myFilter array

//-------------------------------------------------------------------
//#4 mySome function


function mySome(arr, cb)  //function to check if any array elements pass condition
{
    for (let i = 0; i<arr.length; i++) //traverses array
    {
        if(cb(arr[i]))  //checks bool using callback function
        {
            return true;  //return true and end
        }
    }
        return false;  //return false and end (no elements passed condition)
}

function lessThanThree(x) //callback function
{
    return x < 3; //returns bool value that checks if element is less than three
}


console.log("\n #4: mySome function \n");

console.log(mySome(sampleArr, lessThanThree));  //calls mySome function

//-------------------------------------------------------------------
//#5 myEvery function


function myEvery(arr, cb) //function to check if every element of array passes a condition
{
    for (let i = 0; i<arr.length; i++) //traverses array
    {
        if(!(cb(arr[i])))  //checks callback bool value 
        {
            return false;  //if element is not even, return false and end
        }
    }
        return true;  //if all elements are even, return true
}

function isEven(x) //callback function with condition
{
    return (x%2==0);  //return bool value that checks if elements are even
}


console.log("\n #5: myEvery function \n");

console.log(myEvery(sampleArr, isEven)); //calls myEvery function

//-------------------------------------------------------------------
//#6 myReduce function


function myReduce(arr, cb)  //function to reduce array into one value
{
    let finalResult = 0;
    for (let i = 0; i<arr.length; i++)  //traverses array
    {
        finalResult = cb(finalResult, arr[i]);  //uses callback function to set finalResult equal to the addition of all elements
    }
    return finalResult; //return the final result sum
}

function isAdd(x,y) //callback function
{
    return (x+y); //returns the addition of two values
}


console.log("\n #6: myReduce function \n");

console.log(myReduce(sampleArr, isAdd));  //calls myReduce function

//-------------------------------------------------------------------
//#7 myIncludes function


function myIncludes(arr, targetElem)  //function to check if an element is in an array
{
    for(let i = 0; i <arr.length; i++) //traverses array
    {
        if(arr[i] == targetElem)  //checks if element in array equals target element
        {
            return true;  //return true if target element is found
        }
    }
    return false;  //return false if element is not present
}


console.log("\n #7: myIncludes function \n");

console.log(myIncludes(sampleArr, 5)); //call myIncludes function

//-------------------------------------------------------------------
//#8 myIndexOf function


function myIndexOf(arr, targetElem) //function to check index of target element
{
    for(let i = 0; i <arr.length; i++)  //traverses array
    {
        if(arr[i] == targetElem)  //checks if array element equals target element
        {
            return i;  //return the index of the found element
        }
    }
    return -1;  //return -1 if index and element is not found
}


console.log("\n #8: myIndexOf function \n");

console.log(myIndexOf(sampleArr, 4));  //calls myIndexOf function

//-------------------------------------------------------------------
//#9 myPush function


function myPush(arr, elementToAdd) //function to push element to end of array
{
       arr[arr.length] = elementToAdd;  //adds element to end of array
       return arr.length;  //displays the new length of the array
}


console.log("\n #9: myPush function \n");

console.log(myPush(sampleArr, 9));  //calls myPush function

//-------------------------------------------------------------------
//#10 myLastIndexOf function


function myLastIndexOf(arr, targetNum)  //function to return the last index of a target element
{
let elemIndex = -1;  //default element index is -1
for(let i = 0; i<arr.length;i++)  //traverses array
{
    if(arr[i] == targetNum) //checks if array element equals target element
    {
        elemIndex = i;  //updates index if element is found
    }
}
return elemIndex;  //returns the index of that element
}

console.log("\n #10: myLastIndexOf function \n");

console.log(myLastIndexOf(sampleArr, 5));  //calls myLastIndexOf function

//-------------------------------------------------------------------
//#11 grabKeys function


let sampleObj = {fruit1: "apple", fruit2: "orange", fruit3: "pear"}  //object to test functions 11-12

Object.prototype.grabKeys = function () //function to obtain and print the keys of an object in an array
{ 
    
    let keyArray = []; //empty array to display keys
    for (elem in this) //for in loop to traverse object
    {
      if (this.hasOwnProperty(elem))  //checks object property with name of element
      {
        keyArray.push(elem); //push element into array
      }
    }
    return keyArray;  //return the final array
  };

  console.log("\n #11: grabKeys function \n");
  console.log(sampleObj.grabKeys());  //calls grabKeys function

//-------------------------------------------------------------------
//#12 grabValues function


Object.prototype.grabValues = function () //function to obtain and print the values of an object in an array
{
    let valueArray = []; //empty array to display values
    for (elem in this)  // for in loop to traverse object
    {
      if (this.hasOwnProperty(elem)) //checks object property with name of element
      {
        valueArray.push(this[elem]); //push element into array
      }
    }
    return valueArray; //return the final array
  };

console.log("\n #12: grabValues function \n");

console.log(sampleObj.grabValues(sampleObj));  //calls grabValues function

//-------------------------------------------------------------------
//#1 Miscellaneous (optional) problem / sum of a range

   function sumOfRange(start, end) //function to find the sum between a range of two numbers
    {  
        let sum = 0; //initalizes sum variable
         for(let i = start; i <= end; i++) //traverses between start and end value
        { 
         sum+=i;  //adds the current value with sum
        }
        return sum;  //return the final sum, which is the sum of values in the desired range
    }



console.log("\n #1 Miscellaneous: sumOfRange function \n");

console.log(sumOfRange(1,13));  //calls sumOfRange function, for between 1 and 13 

//-------------------------------------------------------------------
//#2 Miscellaneous (optional) problem / reversing an array

let sampleArr2 = [1,2,3,4,5,6]; //array to be used

function reverseArray(arr) //function to reverse a given array
{  
    let revArr = []
     for(let i = arr.length-1; i >= 0 ; i--) //traverses array from end to start
    { 
     revArr.push(arr[i]);  //pushes current value onto new array
    }
    return revArr;  //return the new, reversed array
}


console.log("\n #2 Miscellaneous: reverseArray function \n");

console.log(reverseArray(sampleArr2));  //calls reverseArray function