//convert any value to boolean
var num = 'noushedul islam akib';
var num2 = 'Mohiuddin';
console.log(!!num);
console.log(Boolean(num2));

//falsy value remove (Thre are 6 type of falsy value in js)
var falsyValue = [1,2,'three',0,false,true,null,undefined,'',NaN];
console.log(falsyValue);
var falsyValueAll = falsyValue.filter(Boolean);
console.log(falsyValueAll);

//resize any array length
var lengthOfNum = [1,2,3,4,5,6];
lengthOfNum.length = 3;
console.log(lengthOfNum);

//multi-dimention array to flat array
//one level array
var multiDia = [1,[2,3],4,[5,6]];
console.log(multiDia);
console.log(multiDia.flat());

//multi level array
var multiLevel = [1,[2,[3,4],5],6,[7,8]];
console.log(multiLevel);
console.log(multiLevel.flat());
console.log(multiLevel.flat(Infinity));//here must I capital letter

//array swaping
var myarray = [1,2,3,4,5,6,7,8,9];
[myarray[0],myarray[8]] = [myarray[8],myarray[0]];
console.log(myarray);

//always use "use strict"

//message replace 
var mysub = 'I love sub, i missed sub';
console.log(mysub.replace(/sub/g,'southern'));

//figure out exicution time
var startTime = performance.now();
for(var i =1; i<100; i++){
    console.log(`I love Southern CSE Department ${i}`);
}
var endTime = performance.now();
console.log(`Total Execution Time is: ${endTime -startTime}`);


