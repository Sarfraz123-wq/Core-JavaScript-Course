var i=0;
do{
    document.write("Outer loop" +i);
    
    document.write("<br>");
    i++;
    var j=0;
    do
        {
            document.write("Inner Loop" +j);
            document.write("<br>");
                j++;
        
        }while(j<5);
}while(i<3);