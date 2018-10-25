var toRoman = function(number){

var integer = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
var result = " ";
    if ( number > 3999 || number===0) {

        return "invalid number";
    }
    for (var i =0; i<=integer.length; i++ ){


      while ( number > number%integer[i] ) {
        result = result + roman[i];
        number = number - integer[i];
      }

    }
    return result;
  }

  $(document).ready(function(){
  $("button").click(function(event){
    event.preventDefault();
    var inputNumber = parseInt($("#Number").val());
    $("#output").text(toRoman(inputNumber));

  });
});
