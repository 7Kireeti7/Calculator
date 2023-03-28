function addition(){
    //function defination
   var number1= parseInt( document.getElementById("num1").value)
   var number2=parseInt(document.getElementById("num2").value)
   
   var result= number1 + number2
   document.getElementById("showresults").innerHTML=`${number1} + ${number2} = ${result}`

   }
  
   function subtraction(){

    var number1= parseInt( document.getElementById("num1").value)
    var number2=parseInt(document.getElementById("num2").value)
    
    var result= number1 - number2
    document.getElementById("showresults").innerHTML=`${number1} - ${number2} = ${result}`
    
       }
       
   
   function multiplication(){

    var number1= parseInt( document.getElementById("num1").value)
    var number2=parseInt(document.getElementById("num2").value)
    
    var result= number1 * number2
    document.getElementById("showresults").innerHTML=`${number1} * ${number2} = ${result}`
   
    
            }
     
   
   function division(){
   
    var number1= parseInt( document.getElementById("num1").value)
    var number2=parseInt(document.getElementById("num2").value)
    
    var result= number1 / number2
    document.getElementById("showresults").innerHTML=`${number1} / ${number2} = ${result}`
       }
      