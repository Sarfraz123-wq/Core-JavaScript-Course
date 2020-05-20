var arr = new Array(4);
//arr[n-1] =20;
var size = arr.length;
for(var i=0; i<=size; i++)
    {
        arr[i] = parseInt(prompt("Give input numbers"));
    }
// for display
    document.write("The input numbers are <br>")
    for(var i=0; i<=size; i++)
    {
        if(i==3)
            {
                arr[i] = 100;// 4th index always equal to 100;
            }
        document.write(arr[i] +" <br>" );
    
    }
    /*document.write("The even numbers are <br>")
    for(var j=0; j<=size; j++)
    {
        if(arr[j]%2==0)
            document.write(arr[j] +" ");
    }
    document.write("The odd numbers are <br>")
    for(var j=0; j<=size; j++)
    {
        if(arr[j]%2!=0)
            document.write(arr[j] +" ");
    }*/