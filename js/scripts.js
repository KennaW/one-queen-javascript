var queenAttack = function queenAttack(pos1, pos2) {
    if ((pos1[0] === pos2[0]) || (pos1[1] === pos2[1])) {
        return true;
    } else if (Math.abs((pos1[0] - pos2[0])) === Math.abs((pos1[1] - pos2[1]))) {
        return true;
    } else {
        return false;
    }
};

$(document).ready(function() {
    $("form").submit(function(event) {
        var x1 = $("input#x1").val();
        var y1 = $("input#y1").val();
        var x2 = $("input#x2").val();
        var y2 = $("input#y2").val();

        var pos1 = [x1, y1];
        var pos2 = [x2, y2];

        var attack = queenAttack(pos1, pos2);

        $(".not").empty();
        if(!attack) {
            $(".not").text("not ");
        }

        $("#result").show();

        event.preventDefault();
    });


});
