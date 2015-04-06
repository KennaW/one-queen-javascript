// var queenAttack = function queenAttack(pos1, pos2) {
//     if ((pos1[0] === pos2[0]) || (pos1[1] === pos2[1])) {
//         return true;
//     } else if (Math.abs((pos1[0] - pos2[0])) === Math.abs((pos1[1] - pos2[1]))) {
//         return true;
//     } else {
//         return false;
//     }
// };
//
// $(document).ready(function() {
//     $("form").submit(function(event) {
//         var x1 = $("input#x1").val();
//         var y1 = $("input#y1").val();
//         var x2 = $("input#x2").val();
//         var y2 = $("input#y2").val();
//
//         var pos1 = [x1, y1];
//         var pos2 = [x2, y2];
//
//         var attack = queenAttack(pos1, pos2);
//
//         $(".not").empty();
//         if(!attack) {
//             $(".not").text("not ");
//         }
//
//         $("#result").show();
//
//         event.preventDefault();
//     });
//
//
// });

var pigLatin = function pigLatin(input) {
    var input_array = input.split(" ");
    var final_string = "";

    for (var i = 0; i < input_array.length; i++) {
        var word = input_array[i];
        word = word.split("");
        var output = "";
        var temp = "";

        if (word.length > 2 && word[0] === 's' && word[1] === 'q') {
            word.splice(0, 3);
            temp += "squ";
            output += word.join("");
        } else {
            for (var j = 0; j <= word.length; j++) {
                if(word[0] !== "a" && word[0] !== "e" && word[0] !== "i" && word[0] !== "o" && word[0] !== "u") {
                    temp += word.splice(0, 1);
                    j = 0;
                } else {
                    output += word.join("");
                    break;
                }

            }
        }
        output += temp + "ay ";
        console.log(output);

        final_string += output;
        console.log(final_string);
    }
    final_string = final_string.substring(0, final_string.length - 1);
    return final_string;



//     word = word.split("");
//     var output = "";
//     var temp = "";
//     if (word.length > 2 && word[0] === 's' && word[1] === 'q') {
//         word.splice(0, 3);
//         temp += "squ";
//         output += word.join("");
//     } else {
//     for (var i = 0; i <= word.length; i++) {
//         if(word[0] !== "a" && word[0] !== "e" && word[0] !== "i" && word[0] !== "o" && word[0] !== "u") {
//             temp += word.splice(0, 1);
//             i = 0;
//         } else {
//             output += word.join("");
//             break;
//         }
//
//     }
// }
//
//     output += temp + "ay";
//     return output;
//
//
//
//
//

//     return final_string;
};
