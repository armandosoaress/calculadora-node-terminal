var readline = require('readline');
var resp = "";

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("digite o primeiro numero: ",
 function(answer) {
    var num1 = parseInt(answer);

    leitor.question("digite o segundo numero: ",
    function(answer) {
        var num2 = parseInt(answer);

        leitor.question("digite o operador: ",
         function(answer) {
        var operador = answer;

        if (operador=='+') {
            result=num1 + num2;
        }   
        if (operador=='-') {
            result=num1 - num2;
        }
        if (operador=='x') {
            result=num1 * num2;
        }
        if (operador=='/') {
            result=num1 / num2;
        }
         
       console.log("\na soma de " + num1 + "+"+num2+" é = "+result);
       
   
   leitor.close();
});
   });
});




