/**
 * Created by madhan on 4/24/17.
 */
var view = {
    displayMessage: function(msg){
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function(location){
    var cell = document.getElementById(location);
    cell.setAttribute("class","hit");
    },
    displayMiss: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class","miss");
    }
};
view.displayHit("00");
view.displayMiss("12");
view.displayMessage("Tap tap, is this thing on?")