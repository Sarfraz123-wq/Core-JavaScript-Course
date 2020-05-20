// Array by taking an input from user.
// Method #1
var a = new Array(3); // Here we already initialize the size of an array.
var size = a.length;
for(var i=0; i<size; i++)
    a[i] = prompt("Give inputs")
for(var j=0; j<size; j++)
    document.write(a[j] +"<br>");

//Method #2:
var array = []; // don't know the size  of an array
var size = prompt("Size of an array"); // that's why we use variable to use array
for(var i=0; i<size; i++)
    array[i]=prompt("Inputs")
// for display
for(var j=0; j<size; j++)
    document.write(array[j]+"<br>");
var ary = ["abc","def","ghi",123,"xyz"];
for(var i=0; i<ary.length; i++)
{
    document.write(i+"="+ary[i]+"<br>");
}
var a=["Sarfraz","tahir",123];
document.write(a+"<br>");
delete a[0];// delete thindo aa para , dindo aa ain uho index undefined thindo aaa and length me countt thindo aaa.

document.write(a+"<br>");
document.write(a[0]);
document.write(a.length);
    