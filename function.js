/* Syntax; function function_name()
{
block of statements;} Body of function
}
example:1
function display()
{
document.write("Sarfraz Rasheed");
}
Calling a function..
function_name ();
display();
function names are case sensitive.
*/

// Funcion without parameters
document.write("Without parameters <br>")
function display()
{
    document.write("Sarfraz Rasheed <br>");
}
display();
display();
display();
document.write("-----------------------------<br>");

// Function with parameters

/* Syntax: function function_name(paramter1,paramter2,paramter3...)
{
    block of statement;
}
calling..
function_name(paramter1,paramter2,paramter3...)
*/
document.write("Parameters <br>")
function myfunction (inp1,inp2)
{
    document.write("karachi <br>")
    // any block of code here.
}
myfunction(1,2);

// Missing Arguements
document.write("Missing Arguements <br>")
function addition(num1,num2,num3)
{
    var result = num1 + num2 + num3;
    document.write(result +"<br>");
    
}
addition(10,20,30); 
/*if im not giving here value of num3 then result will be none because of num3's value is undefined.*/

// Arguements Objects
document.write("-----------------------------<br>");

function abc()
{
//    for(var i=0; i<arguments.length;i++)// dono se sarfraz rashed kehar print kr raha he.
    document.write(arguments.length+"<br>");
}
abc("Sarfraz ","Rasheed ","Kehar " +"<br>");

document.write("-----------------------------");
function disp()
{
    document.write(arguments.length+"<br>");
    
}document.write("-----------------------------<br>");

disp("abc ","xyz ","Kehar <br>");

//We can pass too many arguments as well.
document.write("Too many arguments passed <br>")

function pdt(a,b)
{
    var product = a*b;
    document.write(product*arguments[2]*arguments[3]+"<br>");
}
pdt(2,3,4,2);
// Default parameters 
document.write("Default parameters <br>")
function xyz(one,two,three=30)
{
    var add = one+two+three;
    document.write(add +"<br>");
}
xyz(10,20);
document.write("-----------------------------<br>");

function abc(one,two,three=null)
{
    var add = one+two+three;
    document.write(add);
}
abc(10,20,"<br>");
document.write("-----------------------------<br>");


function ab(one,two,three=null)
{
    var add = one+two+three;
    document.write(add+"<br>");
}
ab(10,20,50);// We can also give value once initialize null.

/* Rest Parameters.
Rest parameters must be declare at last.
Rest parameters works like an array. We can use indexes here as well.
... represent rest parameters.
We can use almost all methods of an array here.
*/
document.write("Rest parameters <br>");
function xx(a,...nums)
{
    document.write(a +"<br>");
    document.write(nums+"<br>");
    
}
xx(10,20,30,40,50);
document.write("-----------------------------<br>");

function show(a, b, ...args)
{
    multiplication = a*b*args[0]*args[1]*args[2]*args[3];
    document.write(multiplication);
}
show(1,2,3,4,5,6);

/* Function Expression
-----------------------
It is similar to a function but in this we assign a function with any variable name.
example.
var a = function show()
{
document.write("Sarfraz");
};
We break the expression function's body with semi colon;
a();
We call it by it's variable name with parenthesis. 
We can't call it before defining the function but in normal function we can do.

Anonymous Function
-----------------
It is similar to Function expression but we can create function without giving it's name.
example:
var a = function()
{
body
};
a();



*/
