//Exacly same as c#.
var a= parseInt(prompt("Enter First Number"));
var b = parseInt(prompt("Enter Second Number"));
var c;
var symbol = prompt("operator");
switch(symbol)
    {
            case '+':
            c = a+b;
            document.write("The first number is " + a+"<br>");
            document.write("The Second number is " + b+"<br>");
            document.write("The operator is "+ symbol+"<br>");
            document.write("The result is "+c+"<br>");
                break; 
            case '-':
            c = a-b;
            document.write("The first number is " + a+"<br>");
            document.write("The Second number is " + b+"<br>");
            document.write("The operator is "+ symbol+"<br>");
            document.write("The result is "+c +"<br>");
                break;
            case "*":
            c = a*b;
            document.write("The first number is " + a +"<br>");
            document.write("The Second number is " + b+"<br>");
            document.write("The operator is "+ symbol+"<br>");
                document.write("The result is "+c +"<br>");
                break;
            case "/":
            c = a/b;
            document.write("The first number is " + a+"<br>");
            document.write("The Second number is " + b+"<br>");
            document.write("The operator is "+ symbol+"<br>");
            document.write("The result is "+c +"<br>");
                break;
            default :
            document.write("Wrong Operator");
            break;
    }
    
    //Example Number:2
    var day= prompt("Give input");
    switch(day)
    {
        case "1":
        document.write("Today is Monday");
        break;
        case "2":
        document.write("Today is Tuesday");
        break;
        case "3":
        document.write("Today is Wednesday");
        break;
        case "4":
        document.write("Today is Thursday");
        break;
        case "5":
        document.write("Today is Friday");
        break;
        case "6":
        document.write("Today is Saturday");
        break;
        case "7":
        document.write("Today is Sunday");
        break;
        default:
        document.write("Wrong number chosen");
    }
