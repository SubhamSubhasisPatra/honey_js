
/*

Java -> 

{
	int , float , double , boolean ;
	int a = 10 ; 
	boolean s = true ; 
}


honey -> string 
1 -> number 
1.2  -> number 
suham  -> string
true / false -> boolean  
[1,2,3] -> object
10 * ['gita' , 'gec', 'kiit'] -> NaN

JS 


NOTE : 

	when we get undefined -> if somewhere in the program we have defined a variable 
							but we have not assigned any value to it and we are printing or using 
							that variable then we get undefined 
							
							eg -> var a ; // comment line ->>> a = undefined  
									
							1 - console.log(a) -> untill and unless no value is assigned to a 
										it's undefined 
							2 - var result = 10 * a ; // comment -> 10 * undefined 
										result = NaN 
s = 1 
p = [1,2,3]

*/

//java -> int a = 10 ;
//js -> 

//var (, let , const -> optional) ;

//var age = 20.222 ;
//
//var name = 'honey12';
//var time = true 
//var collegeNameList = ['gita' , 'gec', 'kiit']
//console.log(typeof age)
//console.log(typeof name)
//console.log(typeof time)
//console.log(typeof collegeNameList)

//var timeAge = true * 10 * ['gita' , 'gec', 'kiit']
//console.log(timeAge)

//var lastValue 
//var firstValue = 10 * lastValue
// 10 * unfined
//console.log(firstValue)


// let's make a calculator 

var number1 , number2 ; 

// add of two number 
number1  = 10 
number2 = 20 
var addResult  = number1 + number2
var subResult = number1 - number2 
var mulResult = number1 * number2 
var divResult = number1 / number2 
console.log('addition : ',addResult)
console.log('substraction : ',subResult)
console.log('mult : ',mulResult)
console.log('div : ',divResult)




