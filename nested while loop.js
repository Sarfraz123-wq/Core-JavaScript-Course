// In loops brackets are must otherwise output will be none
var i=0;
while(i<3)
    {
        document.write("Outer Loop" + i);
        i++;
        document.write("<br>");
        var j=0;
        while(j<5)
        {
                document.write("Inner Loop" +j);
                j++;
                document.write("<br>");
        }
            
    }